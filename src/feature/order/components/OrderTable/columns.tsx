import { ColumnDef } from "@tanstack/react-table";
import { ORDER_PRODUCTS_CATEGORY, OrderFormSchemaType } from "../../config";
import { OrderTableViewProduct } from "./OrderTableViewProduct";
import { OrderTableDeleteProduct } from "./OrderTableRemoveProduct";
import { OrderTableDuplicateProduct } from "./OrderTableDuplicateProduct";
import { orderProductsStoreAtom } from "../../store";
import { useAtom } from "jotai";

export const columns: ColumnDef<OrderFormSchemaType>[] = [
  {
    id: "id",
    header: "#",
    cell: ({ row }) => {
      return <div className="capitalize font-medium">#{row.index + 1}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Наименование",
    cell: ({ row }) => {
      const [orderProducts, setOrderProducts] = useAtom(orderProductsStoreAtom);
      const updateParam = (event: React.ChangeEvent<HTMLInputElement>) => {
        orderProducts;
        setOrderProducts((prevMenu) =>
          prevMenu.map((item, idx) =>
            idx === row.index
              ? { ...item, name: event.target.value, toUpdate: true }
              : item
          )
        );
      };
      return (
        <div className="lowercase">
          <input
            type="text"
            value={row.getValue("name")}
            onChange={updateParam}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Категория",
    cell: ({ row }) => {
      const [orderProducts, setOrderProducts] = useAtom(orderProductsStoreAtom);
      const updateParam = (event: React.ChangeEvent<HTMLSelectElement>) => {
        orderProducts;
        setOrderProducts((prevMenu) =>
          prevMenu.map((item, idx) =>
            idx === row.index
              ? { ...item, category: event.target.value, toUpdate: true }
              : item
          )
        );
      };
      return (
        <div className="lowercase">
          <select value={row.getValue("category")} onChange={updateParam}>
            {ORDER_PRODUCTS_CATEGORY.map((val) => {
              return (
                <option key={`op${1.301}_${val}`} value={val}>
                  {val}
                </option>
              );
            })}
          </select>
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Кол-во, шт.",
    cell: ({ row }) => {
		const [orderProducts, setOrderProducts] = useAtom(orderProductsStoreAtom);
		const updateParam = (event: React.ChangeEvent<HTMLInputElement>) => {
		  orderProducts;
		  setOrderProducts((prevMenu) =>
			prevMenu.map((item, idx) =>
			  idx === row.index
				? { ...item, quantity: Number(event.target.value), toUpdate: true }
				: item
			)
		  );
		};
		return (
		  <div className="lowercase">
			<input
			  type="number"
			  value={row.getValue("quantity")}
			  onChange={updateParam}
			/>
		  </div>
		);
	  },
  },
  {
    accessorKey: "price",
    header: "Цена, ₽",
    cell: ({ row }) => {
		const [orderProducts, setOrderProducts] = useAtom(orderProductsStoreAtom);
		const updateParam = (event: React.ChangeEvent<HTMLInputElement>) => {
		  orderProducts;
		  setOrderProducts((prevMenu) =>
			prevMenu.map((item, idx) =>
			  idx === row.index
				? { ...item, price: Number(event.target.value), toUpdate: true }
				: item
			)
		  );
		};
		return (
		  <div className="lowercase">
			<input
			  type="number"
			  value={row.getValue("price")}
			  onChange={updateParam}
			/>
		  </div>
		);
	  },
  },
  /* {
		accessorKey: "date",
		header: "Дата",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("date")} ₽</div>
		),
	}, */
  {
    accessorKey: "action",
    header: () => <div className="text-right"></div>,
    cell: ({ row }) => {
      return (
        <div className="flex flex-row gap-2 items-center justify-end">
          <OrderTableViewProduct product={row.original} id={row.index} />
          <OrderTableDeleteProduct id={row.index} />
          <OrderTableDuplicateProduct id={row.index} />
        </div>
      );
    },
  },
];
