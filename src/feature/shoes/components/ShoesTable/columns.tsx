import { ColumnDef } from "@tanstack/react-table";
import { ShoesFormSchemaType } from "../../config";
import { ShoesTableViewProduct } from "./ShoesTableViewProduct";
import { ShoesTableDeleteProduct } from "./ShoesTableRemoveProduct";
import { ShoesTableDuplicateProduct } from "./ShoesTableDuplicateProduct";
import { useAtom } from "jotai";
import { shoesAtom } from "../../store";

export const generateFullNameShoes = (row: any) => {
  const watcherShoesType = row.shoesType;
  const watcherTradeMark = row.tradeMark;
  const watcherArticleName = row.articleName;
  const watcherColor = row.color;
  const watcherSize = row.size;

  const fullNameValue = `${watcherShoesType} ${watcherTradeMark} арт. ${watcherArticleName} Цвет: ${watcherColor} Размер: ${watcherSize}`;

  return fullNameValue;
};

export const updateParamShoes = (
  setShoes: any,
  rowIndex: number,
  key: keyof ShoesFormSchemaType
) => {
  return (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShoes((prevShoes: any[]) =>
      prevShoes.map((item: any[], idx: number) =>
        idx === rowIndex
          ? {
              ...item,
              [key]: event.target.value,
              fullName: generateFullNameShoes({
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

export const columns: ColumnDef<ShoesFormSchemaType>[] = [
  {
    id: "id",
    header: "#",
    cell: ({ row }) => {
      console.log(row);
      return <div className="capitalize font-medium">{row.index + 1}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "articleName",
    header: "Номер Артикула/Модели",
    cell: ({ row }) => {
      const [shoes, setShoes] = useAtom(shoesAtom);
      shoes;
      return (
        <div className="capitalize font-medium">
          <input
            type="text"
            value={row.getValue("articleName")}
            onChange={updateParamShoes(setShoes, row.index, "articleName")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "tradeMark",
    header: "Товарный Бренд",
    cell: ({ row }) => {
      const [shoes, setShoes] = useAtom(shoesAtom);
      shoes;
      return (
        <div className="capitalize font-medium">
          <input
            type="text"
            value={row.getValue("tradeMark")}
            onChange={updateParamShoes(setShoes, row.index, "tradeMark")}
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
          <ShoesTableViewProduct product={row.original} id={row.index} />
          <ShoesTableDeleteProduct id={row.index} />
          <ShoesTableDuplicateProduct id={row.index} />
        </div>
      );
    },
  },
];
