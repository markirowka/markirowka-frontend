import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { TypographyP } from "@/components/ui/typography";
import { Copy } from "lucide-react";
import { orderProductsStoreAtom } from "../../store";
import { useAtom } from "jotai";

interface IOrderTableDuplicateProductProps {
  id: number;
}

export const OrderTableDuplicateProduct: FC<IOrderTableDuplicateProductProps> = ({
  id,
}) => {
  const [orderProducts, setOrderProducts] = useAtom(orderProductsStoreAtom);

  const handleDuplicateProduct = (id: number) => {
    const duplicatedProduct = { ...orderProducts[id] };
    const updatedProducts = [
      ...orderProducts.slice(0, id + 1),
      duplicatedProduct,
      ...orderProducts.slice(id + 1).map((product, index) => ({
        ...product,
        id: id + 1 + index,
      })),
    ];
    setOrderProducts(updatedProducts);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Copy className="w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Копировать: №{id + 1}</AlertDialogTitle>
          <AlertDialogDescription>
            <TypographyP>
              Вы уверены что хотите создать копию продукта?
            </TypographyP>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              handleDuplicateProduct(id);
            }}
          >
            Подтвердить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
