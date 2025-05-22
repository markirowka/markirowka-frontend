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
      return <div className="lowercase">{row.index + 1}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "tradeMark",
    header: "Товарный Бренд",
    cell: ({ row }) => {
      const [, setShoes] = useAtom(shoesAtom);
      return (
        <div className="lowercase">
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
    accessorKey: "articleName",
    header: "Артикул",
    cell: ({ row }) => {
      const [, setShoes] = useAtom(shoesAtom);
      return (
        <div className="lowercase">
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
    accessorKey: "shoesType",
    header: "Тип обуви",
    cell: ({ row }) => {
      const [, setShoes] = useAtom(shoesAtom);
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("shoesType")}
            onChange={updateParamShoes(setShoes, row.index, "shoesType")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "color",
    header: "Цвет",
    cell: ({ row }) => {
      const [, setShoes] = useAtom(shoesAtom);
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("color")}
            onChange={updateParamShoes(setShoes, row.index, "color")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "size",
    header: "Размер",
    cell: ({ row }) => {
      const [, setShoes] = useAtom(shoesAtom);
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("size")}
            onChange={updateParamShoes(setShoes, row.index, "size")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "upperMaterial",
    header: "Материал верха",
    cell: ({ row }) => {
      const [, setShoes] = useAtom(shoesAtom);
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("upperMaterial")}
            onChange={updateParamShoes(setShoes, row.index, "upperMaterial")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "liningMaterial",
    header: "Материал подкладки",
    cell: ({ row }) => {
      const [, setShoes] = useAtom(shoesAtom);
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("liningMaterial")}
            onChange={updateParamShoes(setShoes, row.index, "liningMaterial")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "bottomMaterial",
    header: "Материал низа",
    cell: ({ row }) => {
      const [, setShoes] = useAtom(shoesAtom);
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("bottomMaterial")}
            onChange={updateParamShoes(setShoes, row.index, "bottomMaterial")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "tnved",
    header: "Код ТНВЭД",
    cell: ({ row }) => {
      const [, setShoes] = useAtom(shoesAtom);
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("tnved")}
            onChange={updateParamShoes(setShoes, row.index, "tnved")}
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