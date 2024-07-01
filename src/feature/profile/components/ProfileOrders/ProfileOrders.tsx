"use client";

import * as React from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAtom } from "jotai";
import { orderHistoryAtom, orderTotalCountAtom, ordersPageAtom, userAtom } from "@/feature/common";
import { backendInstance } from "@/services/backendService";
import { ordersPerPage } from "@/config/env";
import { OrderData } from "@/feature/types";


export const columns: ColumnDef<OrderData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "orderId",
    header: "Номер заказа",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: "Дата заказа",
    cell: ({ row }) => { 
		console.log("Row: ", row)
		return(
	<div className="lowercase">{row.original.order_date}</div>
)},
  },
  {
    accessorKey: "status",
    header: () => <div className="text-right">Статус заказа</div>,
    cell: () => {
      return (
        <div className="text-right font-medium text-lime-500">Выполнен</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Действия</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(payment.id))}
            >
              Скопировать номер заказа
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Просмотреть заказ</DropdownMenuItem>
            <DropdownMenuItem>Просмотреть накладную</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function ProfileOrders() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [user] = useAtom(userAtom);
  const [orderCount, setOrderCount] = useAtom(orderTotalCountAtom);
  const [displayOrders, setDisplayOrders] = useAtom<OrderData[]>(orderHistoryAtom);
  const [ordersPage, setOrdersPage] = useAtom(ordersPageAtom);

  const table = useReactTable({
    data: displayOrders,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  React.useMemo(async () => {
    const count =
      user && user?.user_role === "ADMIN"
        ? await backendInstance.getUserOrderCount()
        : await backendInstance.getTotalCount();
    const orders = user && user?.user_role === "ADMIN"
	? await backendInstance.getUserOrders(ordersPage)
	: await backendInstance.getOrders(ordersPage);
	setDisplayOrders(orders)
	setOrderCount(count)
  }, [ordersPage]);

  const UpdatePage = (forward = true) => {
	  return(() => {
		const newPage = forward ? ordersPage + 1 : ordersPage - 1;
		setOrdersPage(newPage)
	  })
  }

  const isLastPage = ((ordersPage * ordersPerPage) >= orderCount) || orderCount <= ordersPerPage;

  return (
    <div className="w-full m-auto my-4 p-12 bg-white rounded-xl shadow-lg">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Ничего не найдено
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} из{" "}
          {orderCount} строк выделено.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={UpdatePage(true)}
            disabled={!(ordersPage === 1)}
          >
            Прошлая страница
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={UpdatePage(false)}
            disabled={!isLastPage}
          >
            Следующая страница
          </Button>
        </div>
      </div>
    </div>
  );
}
