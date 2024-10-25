import { ColumnDef } from "@tanstack/react-table";
import { ShoesFormSchemaType } from "../../config";
import { ShoesTableViewProduct } from "./ShoesTableViewProduct";
import { ShoesTableDeleteProduct } from "./ShoesTableRemoveProduct";
import { ShoesTableDuplicateProduct } from "./ShoesTableDuplicateProduct";
import { useAtom } from "jotai";
import { shoesAtom } from "../../store";

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
    header: "Артикул/Модель",
    cell: ({ row }) => {
      const [shoes, setShoes] = useAtom(shoesAtom);
      const updateParam = (event: React.ChangeEvent<HTMLInputElement>) => {
        shoes;
        setShoes((prevShoes) =>
          prevShoes.map((item, idx) =>
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
    header: "Товарный Бренд",
    cell: ({ row }) => {
      const [shoes, setShoes] = useAtom(shoesAtom);
      const updateParam = (event: React.ChangeEvent<HTMLInputElement>) => {
        shoes;
        setShoes((prevShoes) =>
          prevShoes.map((item, idx) =>
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
          <ShoesTableViewProduct product={row.original} id={row.index} />
          <ShoesTableDeleteProduct id={row.index} />
          <ShoesTableDuplicateProduct id={row.index} />
        </div>
      );
    },
  },
];
