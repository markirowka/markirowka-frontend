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
import { userAtom } from "@/feature/common";
import { backendInstance } from "@/services/backendService";
import { LibItem } from "@/feature/types";
import { categoriesAtom } from "@/feature/common/admin";
import { sortByName } from "@/utils";
import { toast } from "sonner";
import { CategoryCreateDialog } from "./AddModal";

export const menuColumns: ColumnDef<LibItem>[] = [
  {
    accessorKey: "Id",
    header: "Id",
    cell: ({ row }) => (
      <div className="capitalize">
        {String(row.original.id)}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Название",
    cell: ({ row }) => {
      return <div className="">{row.original.name}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [, setCategories] = useAtom(categoriesAtom);

      const DeleteItem = () => {
        backendInstance
          .dropCategory(row.original.id)
          .then(async (res) => {
            if (res.success) {
              const newList = await backendInstance.getCategories();
              setCategories(newList.categories);
              toast("Категории обновлены");
            } else {
              toast("Не удалось обновить");
            }
          })
          .catch((e) => {
            console.log(e);
            toast("Не удалось обновить");
          });
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Открыть меню</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Действия</DropdownMenuLabel>
            <DropdownMenuItem onClick={DeleteItem}>Удалить</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function CatItemEditor() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [user] = useAtom(userAtom);
  const [categories, setCategories] = useAtom(categoriesAtom);

  const table = useReactTable({
    data: categories,
    columns: menuColumns,
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

  const fetchCts = async () => {
    if (user && user.user_role === "ADMIN") {
      const cts = (await backendInstance.getCategories())?.categories.sort(sortByName);
      setCategories(cts);
    }
  };

  React.useEffect(() => {
    fetchCts();
  }, [user]);

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
            {table
              .getRowModel()
              .rows.sort(sortByName)
              .map((row) => (
                <TableRow
                  key={row.id}
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
              ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground"></div>
        <div className="space-x-2">
          <CategoryCreateDialog />
        </div>
      </div>
    </div>
  );
}
