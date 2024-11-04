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
import {
  orderHistoryAtom,
  orderToUpdateListAtom,
  orderTotalCountAtom,
  ordersPageAtom,
  userAtom,
} from "@/feature/common";
import { backendInstance } from "@/services/backendService";
import { ADMIN_ROLE, ordersPerPage, orderStatusNames } from "@/config/env";
import { OrderData } from "@/feature/types";
import {
  downloadFileById,
  formatTimestamp,
  formatTimestampWithOffset,
} from "@/utils";
import { toast } from "sonner";
import { useState } from "react";

export const columns: ColumnDef<OrderData>[] = [
  {
    accessorKey: "orderId",
    header: "Номер заказа",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.original.document_ids[0] || "Неизв."}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Дата заказа",
    cell: ({ row }) => {
      return (
        <div className="lowercase">
          {formatTimestamp(row.original.order_date * 1000)}
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Оплатить до",
    cell: ({ row }) => {
      return (
        <div className="lowercase">
          {row.original.order_status !== "paid"
            ? formatTimestampWithOffset(row.original.order_date, 30)
            : ""}
        </div>
      );
    },
  },
  {
    accessorKey: "note",
    header: "Отметить",
    cell: ({ row }) => {
      const [, modifyUpdateList] = useAtom(orderToUpdateListAtom);

      const checkboxHandler = (event: any) => {
        const isChecked = event.target.checked;
        const orderId = row.original.id;

        modifyUpdateList((prevList) => {
          if (isChecked) {
            return prevList.includes(orderId)
              ? prevList
              : [...prevList, orderId];
          } else {
            return prevList.filter((id) => id !== orderId);
          }
        });
      };

      return (
        <div className="lowercase">
          {row.original.order_status !== "paid" ? (
            <input
              className="order-additional-checkbox"
              type="checkbox"
              onChange={checkboxHandler}
            />
          ) : null}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-right">Статус заказа</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium text-lime-500">
          {orderStatusNames[
            row.original.order_status as keyof typeof orderStatusNames
          ] || "Неизвестно"}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      const [user] = useAtom(userAtom);
      const [ordersPage] = useAtom(ordersPageAtom);
      const [displayOrders, setDisplayOrders] =
        useAtom<OrderData[]>(orderHistoryAtom);
      displayOrders;

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
            <DropdownMenuItem
              onClick={() => {
                downloadFileById(
                  row.original.document_ids[0],
                  row.original.user_id
                );
              }}
            >
              Скачать документы
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () => {
                if (!user) return;
                const file = row.original.document_ids[0];
                if (file) {
                  const deletion = await backendInstance.deleteFile({
                    fileId: file,
                  });
                  const orders =
                    user.user_role === "ADMIN"
                      ? await backendInstance.getOrders(ordersPage)
                      : await backendInstance.getUserOrders(ordersPage);
                  toast(
                    deletion.message
                      ? "Ошибка удаления"
                      : "Файлы успешно удалены",
                    {
                      action: { label: "Скрыть", onClick: () => {} },
                    }
                  );
                  setDisplayOrders(orders);
                }
              }}
            >
              Удалить
            </DropdownMenuItem>
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
  const [displayOrders, setDisplayOrders] =
    useAtom<OrderData[]>(orderHistoryAtom);
  const [updatedCount, setUpdationCount] = useState(0);
  const [toUpdateList] = useAtom(orderToUpdateListAtom);
  const [ordersPage, setOrdersPage] = useAtom(ordersPageAtom);
  const [displayPaginator, setDisplayPaginator] = useState(true);
  const [defaultPageSize, setDefaultPageSize] = useState(5);

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
      pagination: {
        pageIndex: 0,
        pageSize: defaultPageSize,
      },
    },
  });

  React.useMemo(async () => {
    if (!user) return;
    const count =
      user.user_role === "ADMIN"
        ? await backendInstance.getTotalCount()
        : await backendInstance.getUserOrderCount();
    const orders =
      user.user_role === "ADMIN"
        ? await backendInstance.getOrders(ordersPage)
        : await backendInstance.getUserOrders(ordersPage);
    setDisplayOrders((nowOrders) => {
      if (displayPaginator) return orders;
      const newOrders = [...nowOrders];
      newOrders.push(...orders);
      console.log("Upd orders:", newOrders);
      return newOrders;
    });
    setOrderCount(count);
  }, [ordersPage, updatedCount]);

  const UpdatePage = (forward = true) => {
    return () => {
      const newPage = forward ? ordersPage + 1 : ordersPage - 1;
      setOrdersPage(newPage);
    };
  };

  const showMore = () => {
    const newPage = ordersPage + 1;
    setOrdersPage(newPage);
    setDefaultPageSize((value) => value + 5);
    setDisplayPaginator(false);
  };

  const updateOrderStatusList = () => {
    if (!user) return;
    const newStatus = user.user_role === ADMIN_ROLE ? "paid" : "pay_messaged";
    backendInstance
      .updateOrders(toUpdateList, newStatus)
      .then(() => {
        setUpdationCount((count) => count + 1);
        toast("Изменения сохранены", {
          // style: popUpStyle,
          description: "Данные по заказам сохранены",
          action: {
            label: "Скрыть",
            onClick: () => console.log("Прочитано"),
          },
        });
      })
      .catch((e) => {
        toast("Ошибка сохранения данных", {
          description: e.message || e,
          action: {
            label: "Скрыть",
            onClick: () => console.log("Прочитано"),
          },
        });
      });
  };

  const isLastPage =
    ordersPage * ordersPerPage >= orderCount || orderCount <= ordersPerPage;

  return (
    <div className="w-full m-auto my-4 p-12 bg-white rounded-xl shadow-lg max-[1200px]: p-6">
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
      <div className="flex items-center justify-end space-x-2 py-4 max-[1200px]:flex-col max-[1200px]:gap-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {`Всего ${orderCount} строк.`}
        </div>
        {!isLastPage ? (
          <Button
            size="sm"
            className="flex flex-row items-center gap-2 profile-edit-button"
            onClick={showMore}
            disabled={isLastPage}
          >
            Загрузить ещё
          </Button>
        ) : null}
        {toUpdateList.length > 0 ? (
          <Button
            size="sm"
            className="flex flex-row items-center gap-2 profile-edit-button"
            onClick={updateOrderStatusList}
          >
            {user && user.user_role === ADMIN_ROLE
              ? "Подтвердить оплату"
              : "Сообщить об оплате"}
          </Button>
        ) : null}
        <div className="space-x-2 max-[400px]:space-x-0">
          {displayPaginator ? (
            <>
              <Button
                variant="outline"
                size="sm"
                className={"button"}
                onClick={UpdatePage(false)}
                disabled={ordersPage === 1}
              >
                Прошлая страница
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={"button"}
                onClick={UpdatePage(true)}
                disabled={isLastPage}
              >
                Следующая страница
              </Button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
