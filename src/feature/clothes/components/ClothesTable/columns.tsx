import { ColumnDef } from "@tanstack/react-table";
import { ClothesFormSchemaType } from "../../config";
import { ClothesTableViewProduct } from "./ClothesTableViewProduct";
import { ClothesTableRemoveProduct } from "./ClothesTableRemoveProduct";
import { ClothesTableDuplicateProduct } from "./ClothesTableDuplicateProduct";
import { useAtom } from "jotai";
import { clothesAtom } from "../../store";

export const columns: ColumnDef<ClothesFormSchemaType>[] = [
  {
    id: "id",
    header: "#",
    cell: ({ row }) => {
      return <div className="capitalize font-medium">{row.index + 1}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "articleName",
    header: "Артикул/Модель",
    cell: ({ row }) => {
      const [clothes, setClothes] = useAtom(clothesAtom);
      const updateParam = (event: React.ChangeEvent<HTMLInputElement>) => {
        clothes;
        setClothes((prevClothes) =>
          prevClothes.map((item, idx) =>
            idx === row.index
              ? { ...item, articleName: event.target.value, toUpdate: true }
              : item
          )
        );
      };
      return (
        <div className="capitalize font-medium">
          <input
            type="text"
            value={row.getValue("articleName")}
            onChange={updateParam}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "tradeMark",
    header: "Товарный знак",
    cell: ({ row }) => {
      const [clothes, setClothes] = useAtom(clothesAtom);
      const updateParam = (event: React.ChangeEvent<HTMLInputElement>) => {
        clothes;
        setClothes((prevClothes) =>
          prevClothes.map((item, idx) =>
            idx === row.index
              ? { ...item, tradeMark: event.target.value, toUpdate: true }
              : item
          )
        );
      };
      return (
        <div className="capitalize font-medium">
          <input
            type="text"
            value={row.getValue("tradeMark")}
            onChange={updateParam}
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
