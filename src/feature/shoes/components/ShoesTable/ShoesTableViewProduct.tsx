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
import { SHOES_COLORS, SHOES_SIZES, SHOES_TYPES, ShoesFormSchemaType } from "../../config";
import { FC } from "react";
import { shoesAtom } from "../../store";
import { useAtom } from "jotai";
import { updateParamShoes } from "./columns";

interface IShoesTableViewProductProps {
  id: number;
  product: ShoesFormSchemaType;
}

export const ShoesTableViewProduct: FC<IShoesTableViewProductProps> = ({
  id,
  product,
}) => {
  const [shoes, setShoes] = useAtom(shoesAtom);
  shoes;

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
                onChange={updateParamShoes(setShoes, id, "tradeMark")}
                className="text-base input-text-right"
              />
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">Артикул/Модель</span>
              <select
                value={product.articleType}
                onChange={updateParamShoes(setShoes, id, "articleType")}
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
                onChange={updateParamShoes(setShoes, id, "articleName")}
                className="text-base input-text-right"
              />
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">Вид обуви</span>
              <select
                value={product.shoesType}
                onChange={updateParamShoes(setShoes, id, "shoesType")}
                className="text-base input-text-right"
              >
                {SHOES_TYPES.map((value, index) => {
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
                onChange={updateParamShoes(setShoes, id, "color")}
                className="text-base input-text-right"
              >
				{SHOES_COLORS.map((value, index) => {
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
                onChange={updateParamShoes(setShoes, id, "size")}
                className="text-base input-text-right"
              >
				{SHOES_SIZES.map((value, index) => {
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
              <span className="font-semibold text-base">Материал верха</span>
              <input
                type="text"
                value={product.upperMaterial}
                onChange={updateParamShoes(setShoes, id, "upperMaterial")}
                className="text-base input-text-right"
              />
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">
                Материал подкладки
              </span>
              <input
                type="text"
                value={product.liningMaterial}
                onChange={updateParamShoes(setShoes, id, "liningMaterial")}
                className="text-base input-text-right"
              />
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">
                Материал низа/подошвы
              </span>
              <input
                type="text"
                value={product.bottomMaterial}
                onChange={updateParamShoes(setShoes, id, "bottomMaterial")}
                className="text-base input-text-right"
              />
            </div>

            <div className="flex justify-between mb-2 p-1 border-b border-gray-200">
              <span className="font-semibold text-base">Код ТНВЭД</span>
              <input
                type="text"
                value={product.tnved}
                onChange={updateParamShoes(setShoes, id, "tnved")}
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
