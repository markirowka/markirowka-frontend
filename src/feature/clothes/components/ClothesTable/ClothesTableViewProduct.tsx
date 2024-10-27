import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  CLOTHES_COLORS,
  CLOTHES_SIZES,
  CLOTHES_TYPES,
  ClothesFormSchemaType,
} from "../../config";
import { FC } from "react";
import { clothesAtom } from "../../store";
import { useAtom } from "jotai";
import { updateParamClothes } from "./columns";

interface IClothesTableViewProductProps {
  id: number;
  product: ClothesFormSchemaType;
}

export const ClothesTableViewProduct: FC<IClothesTableViewProductProps> = ({
  id,
  product,
}) => {
  const [, setClothes] = useAtom(clothesAtom);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"ghost"}>Править</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="p-1">Продукт №{id + 1}</AlertDialogTitle>
		  <p className="dialogHint">Нажмите на поле для редактирования</p>
          <AlertDialogDescription>
            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">Товарный Бренд</span>
              <input
                type="text"
                value={product.tradeMark}
                onChange={updateParamClothes(setClothes, id, "tradeMark")}
                className="text-base input-text-right"
              />
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">Артикул/Модель</span>
              <select
                value={product.articleType}
                onChange={updateParamClothes(setClothes, id, "articleType")}
                className="text-base input-text-right"
              >
                <option value="Модель">Модель</option>
                <option value="Артикул">Артикул</option>
              </select>
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">
                Артикул/Модель (Значение)
              </span>
              <input
                type="text"
                value={product.articleName}
                onChange={updateParamClothes(setClothes, id, "articleName")}
                className="text-base input-text-right"
              />
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">Вид одежды</span>
              <select
                value={product.clothesType}
                onChange={updateParamClothes(setClothes, id, "clothesType")}
                className="text-base input-text-right"
              >
                {CLOTHES_TYPES.map((value, index) => {
                  return (
                    <option
                      key={`op_size_sh_shtype_${index * 1.21}`}
                      value={value}
                    >
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">Цвет</span>
              <select
                value={product.color}
                onChange={updateParamClothes(setClothes, id, "color")}
                className="text-base input-text-right"
              >
                {CLOTHES_COLORS.map((value, index) => {
                  return (
                    <option
                      key={`op_size_sh_shsize_${index * 1.21}`}
                      value={value}
                    >
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">
                Размер в штихмассовой системе
              </span>
              <select
                value={product.size}
                onChange={updateParamClothes(setClothes, id, "size")}
                className="text-base input-text-right"
              >
                {CLOTHES_SIZES.map((value, index) => {
                  return (
                    <option
                      key={`op_size_sh_shsize_${index * 1.21}`}
                      value={value}
                    >
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">Состав</span>
              <input
                type="text"
                value={product.composition}
                onChange={updateParamClothes(setClothes, id, "composition")}
                className="text-base input-text-right"
              />
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">Код ТНВЭД</span>
              <input
                type="text"
                value={product.tnved}
                onChange={updateParamClothes(setClothes, id, "tnved")}
                className="text-base input-text-right"
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Закрыть</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
