import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { TypographyH3 } from "../../../components/ui/typography";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSelect } from "../../../components/ui/form-select";
import { Separator } from "@/components/ui/separator";
import { PackageSearch } from "lucide-react";
import {
  ORDER_PRODUCTS_CATEGORY,
  OrderFormSchema,
  OrderFormSchemaType,
} from "../config";
import { useAtom } from "jotai";
import { orderProductsStoreAtom } from "../store";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { orderRowLimit } from "@/config/env";
import { getOrderFromExcelFile, saveOrderToExcel } from "../sheet";

export const OrderForm = () => {
  const [orderProducts, setOrderProducts] = useAtom(orderProductsStoreAtom);

  const form = useForm<OrderFormSchemaType>({
    resolver: zodResolver(OrderFormSchema),
    defaultValues: {
      date: new Date().toISOString().split("T")[0], // Задаем значение по умолчанию для даты
    },
  });

  const onSubmit: SubmitHandler<OrderFormSchemaType> = (product) => {
    if (orderProducts.length >= orderRowLimit) {
      toast("Разрешено до 100 позиций", {
        description: "Для большего числа создайте новый документ",
        action: {
          label: "Скрыть",
          onClick: () => console.log("Прочитано"),
        },
      });
      return;
    }
    setOrderProducts([...orderProducts, product]);
  };

  const handleExcelFileUpload = async (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const data = await getOrderFromExcelFile(file);
        setOrderProducts(data);
        toast("Заказ загружен из файла");
      } catch (error) {
        toast("Ошибка чтения файла");
      }
    }
  };

  const handleExcelFileExport = () => {
    saveOrderToExcel(orderProducts)
      .then(() => {
        toast("Скачивание заказа");
      })
      .catch(() => {
        toast("Не удалось сохранить заказ");
      });
  };

  const handleButtonClick = () => {
    document.getElementById("excelFile")?.click();
  };

  return (
    <div className="m-auto my-12 p-12 bg-white rounded-xl shadow-lg max-[1024px]:p-6">
      <Form {...form}>
        <div className="flex gap-2 items-center f-wrap">
          <PackageSearch />
          <TypographyH3>Добавить новый товар</TypographyH3>
        </div>
        <Separator className="mt-2" />
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
          <div className="flex gap-6 f-wrap max-[1024px]:flex-col">
            <FormSelect
              className="flex-1"
              form={form}
              name="category"
              label="Категория товара"
              placeholder="Выберите категорию товара"
              options={ORDER_PRODUCTS_CATEGORY}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Наименование</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Введите наименование товара"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Дата составления</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Дата составления документов"
                      type="date"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-6 items-end f-wrap max-[1024px]:flex-col max-[1024px]:items-stretch">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Кол-во, шт</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Введите количество товаров"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Цена, ₽ за шт</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Введите цену товаров"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={orderProducts.length >= orderRowLimit}
            >
              Добавить товар
            </Button>
          </div>
        </form>
      </Form>
      <div
        className="fileUploadForm flex"
        style={{
          width: "100%",
          justifyContent: "space-between",
          marginTop: 20
        }}
      >
        <h4>Загрузка из файла:</h4>
        <label className="flex items-center gap-2 cursor-pointer">
          <Button type="button" onClick={handleButtonClick}>
            Загрузить заказ из файла Excel
          </Button>
          <input
            id="excelFile"
            type="file"
            accept=".xlsx"
            onChange={handleExcelFileUpload}
            style={{ display: "none" }} // Скрываем поле ввода
          />
        </label>
        <Button type="submit" onClick={handleExcelFileExport}>
          Скачать заказ в виде файла excel
        </Button>
      </div>
    </div>
  );
};
