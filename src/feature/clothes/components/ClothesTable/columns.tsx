import { ColumnDef } from "@tanstack/react-table";
import { ClothesFormSchemaType } from "../../config";
import { ClothesTableViewProduct } from "./ClothesTableViewProduct";
import { ClothesTableRemoveProduct } from "./ClothesTableRemoveProduct";
import { ClothesTableDuplicateProduct } from "./ClothesTableDuplicateProduct";
import { useAtom } from "jotai";
import { clothesAtom } from "../../store";

export const generateFullNameClothes = (row: any) => {
  const watcherShoesType = row.shoesType;
  const watcherTradeMark = row.tradeMark;
  const watcherArticleName = row.articleName;
  const watcherColor = row.color;
  const watcherSize = row.size;

  const fullNameValue = `${watcherShoesType} ${watcherTradeMark} арт. ${watcherArticleName} Цвет: ${watcherColor} Размер: ${watcherSize}`;

  return fullNameValue;
};

export const updateParamClothes = (
  setClothes: any,
  rowIndex: number,
  key: keyof ClothesFormSchemaType
) => {
  return (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setClothes((prevShoes: any[]) =>
      prevShoes.map((item: any[], idx: number) =>
        idx === rowIndex
          ? {
              ...item,
              [key]: event.target.value,
              fullName: generateFullNameClothes({
                ...item,
                [key]: event.target.value,
              }),
              toUpdate: true,
            }
          : item
      )
    );
  };
};

export const columns: ColumnDef<ClothesFormSchemaType>[] = [
  {
    id: "id",
    header: "#",
    cell: ({ row }) => {
      return <div className="lowercase">{row.index + 1}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "articleName",
    header: "Артикул/Модель",
    cell: ({ row }) => {
      const [clothes, setClothes] = useAtom(clothesAtom);
      clothes;
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("articleName")}
            onChange={updateParamClothes(setClothes, row.index, "articleName")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "tradeMark",
    header: "Товарный Бренд",
    cell: ({ row }) => {
      const [clothes, setClothes] = useAtom(clothesAtom);
      clothes;
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("tradeMark")}
            onChange={updateParamClothes(setClothes, row.index, "tradeMark")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "clothesType",
    header: "Вид одежды",
    cell: ({ row }) => {
      const [clothes, setClothes] = useAtom(clothesAtom);
      clothes;
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("clothesType")}
            onChange={updateParamClothes(setClothes, row.index, "clothesType")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "color",
    header: "Цвет",
    cell: ({ row }) => {
      const [clothes, setClothes] = useAtom(clothesAtom);
      clothes;
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("color")}
            onChange={updateParamClothes(setClothes, row.index, "color")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "size",
    header: "Размер",
    cell: ({ row }) => {
      const [clothes, setClothes] = useAtom(clothesAtom);
      clothes;
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("size")}
            onChange={updateParamClothes(setClothes, row.index, "size")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "composition",
    header: "Состав",
    cell: ({ row }) => {
      const [clothes, setClothes] = useAtom(clothesAtom);
      clothes;
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("composition")}
            onChange={updateParamClothes(setClothes, row.index, "composition")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "tnved",
    header: "Код ТНВЭД",
    cell: ({ row }) => {
      const [clothes, setClothes] = useAtom(clothesAtom);
      clothes;
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("tnved")}
            onChange={updateParamClothes(setClothes, row.index, "tnved")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right"></div>,
    cell: ({ row }) => {
      return (
        <div className="flex flex-row gap-2 items-center justify-end">
          <ClothesTableViewProduct product={row.original} id={row.index} />
          <ClothesTableRemoveProduct id={row.index} />
          <ClothesTableDuplicateProduct id={row.index} />
        </div>
      );
    },
  },
];
