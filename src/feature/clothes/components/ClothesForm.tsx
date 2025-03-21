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
import {
  ClothesFormSchema,
  ClothesFormSchemaType,
} from "../config/clothes.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/ui/button";
import { FormSelect } from "../../../components/ui/form-select";
import {
  CLOTHES_COLORS,
  CLOTHES_SIZES,
  CLOTHES_TYPES,
} from "../config/clothes.data";
import { useAtom } from "jotai";
import { clothesAtom } from "../store/shoesStore";
import { Separator } from "@/components/ui/separator";
import { PackageSearch } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import { markRowLimit } from "@/config/env";
import { loadClothesFromExcel, saveClothesToExcel } from "@/feature/order/sheet";
// import { toast } from "sonner"

export const ClothesForm = () => {
  const [clothes, setClothes] = useAtom(clothesAtom);

  const form = useForm<ClothesFormSchemaType>({
    resolver: zodResolver(ClothesFormSchema),
    defaultValues: {
      fullName: "",
      tradeMark: "",
      articleType: "",
      articleName: "",
      clothesType: "",
      color: "",
      size: "",
      composition: "",
      tnved: "",
    },
  });

  const onSubmit: SubmitHandler<ClothesFormSchemaType> = (data) => {
    if (clothes.length >= markRowLimit) {
      toast("Разрешено до 700 позиций", {
        description: "Для большего числа создайте новый документ",
        action: {
          label: "Скрыть",
          onClick: () => console.log("Прочитано"),
        },
      }); 
      return;
    }
    setClothes([...clothes, data]);
  };

  const watcherShoesType = form.watch("clothesType");
  const watcherTradeMark = form.watch("tradeMark");
  const watcherArticleName = form.watch("articleName");
  const watcherColor = form.watch("color");
  const watcherSize = form.watch("size");

  useEffect(() => {
    const fullNameValue = `${watcherShoesType || ""} ${watcherTradeMark || ""} арт. ${watcherArticleName || ""} Цвет: ${watcherColor || ""} Размер: ${watcherSize || ""}`;

    form.setValue("fullName", fullNameValue);
  }, [
    form,
    watcherShoesType,
    watcherTradeMark,
    watcherArticleName,
    watcherColor,
    watcherSize,
  ]);

      const handleExcelFileUpload = async (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
          try {
            const data = await loadClothesFromExcel(file);
            console.log("Parsed:", data);
            setClothes(data);
            toast("Заказ загружен из файла");
          } catch (error) {
            toast("Ошибка чтения файла");
          }
        }
      };
    
      const handleExcelFileExport = () => {
        saveClothesToExcel(clothes)
          .then(() => {
            toast("Скачивание заказа");
          })
          .catch(() => {
            toast("Не удалось сохранить заказ");
          });
      };
    
      const handleButtonClick = () => {
        document.getElementById("excelFileClothes")?.click();
      };

  return (
    <div className="m-auto my-12 p-12 bg-white rounded-xl shadow-lg max-[1024px]:p-6">
      <Form {...form}>
        <div className="flex gap-2 items-center">
          <PackageSearch />
          <TypographyH3>Добавить новый товар</TypographyH3>
        </div>
        <Separator className="mt-2" />
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Введите полное наименование товара (Формируется автоматически)
                </FormLabel>
                <FormControl>
                  <Input
                    disabled
                    placeholder="Полное наименование товара"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-6 f-wrap max-[1024px]:flex-col">
            <FormField
              control={form.control}
              name="tradeMark"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Товарный Бренд</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите товарный бренд" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormSelect
              className="flex-1"
              form={form}
              name="articleType"
              label="Артикул/Модель"
              placeholder="Артикул/Модель"
              options={["Артикул", "Модель"]}
              hasFilter={true}
            />
            <FormField
              control={form.control}
              name="articleName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Артикул/Модель (Значение)</FormLabel>
                  <FormControl>
                    <Input placeholder="Артикул/Модель" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Select */}
          <div className="flex gap-6 f-wrap max-[1024px]:flex-col">
            <FormSelect
              className="flex-1"
              form={form}
              name="clothesType"
              label="Вид одежды"
              placeholder="Выберите вид одежды"
              options={CLOTHES_TYPES}
              hasFilter={true}
            />

            <FormSelect
              className="flex-1"
              form={form}
              name="color"
              label="Цвет"
              placeholder="Выберите цвет одежды"
              options={CLOTHES_COLORS}
              hasFilter={true}
            />

            <FormSelect
              className="flex-1"
              form={form}
              name="size"
              label="Размер в штихмассовой системе"
              placeholder="Размер в штихмассовой системе"
              options={CLOTHES_SIZES}
              hasFilter={true}
            />
          </div>
          {/* Select */}

          <div className="flex gap-6 f-wrap max-[1024px]:flex-col max-[1024px]:items-stretch">
            <FormField
              control={form.control}
              name="composition"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Состав</FormLabel>
                  <FormControl>
                    <Input placeholder="Состав" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between gap-6 items-end max-[1024px]:flex-col max-[1024px]:items-stretch">
            <FormField
              control={form.control}
              name="tnved"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Код ТНВЭД</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Введите код ТНВЭД (Оставьте пустой если не знаете код)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={clothes.length >= markRowLimit}>Добавить товар</Button>
          </div>
        </form>
      </Form>
      <div
        className="flex gap-6 items-end f-wrap max-[1024px]:flex-col max-[1024px]:items-stretch "
        style={{
          justifyContent: "space-between",
          width: "100%",
          marginTop: 20
        }}
      >
        <h4>Загрузка из файла, <a style={{
          color: "hsl(var(--primary))"
        }} href="/news">инструкция</a></h4>
        <label className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-[#A3C55A] h-12 px-5 py-5">
          <Button type="button" onClick={handleButtonClick}>
            Загрузить таблицу из файла Excel
          </Button>
          <input
            id="excelFileClothes"
            type="file"
            accept=".xlsx"
            onChange={handleExcelFileUpload}
            style={{ display: "none" }} // Скрываем поле ввода
          />
        </label>
        <Button type="submit" onClick={handleExcelFileExport}>
          Скачать таблицу в виде файла excel
        </Button>
      </div>
    </div>
  );
};
