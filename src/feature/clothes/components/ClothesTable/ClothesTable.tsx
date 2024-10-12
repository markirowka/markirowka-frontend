"use client";

import {
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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TypographyH3 } from "@/components/ui/typography";
// import { ShoesFormSchemaType } from "../../config"
import { useState } from "react";
import { clothesAtom } from "../../store/shoesStore";
import { useAtom } from "jotai";
import { columns } from "./columns";
import { PackageSearch } from "lucide-react";
import { userAtom } from "@/feature/common";
// import { useNavigate } from "react-router-dom"
import { backendInstance } from "@/services/backendService";
import { toast } from "sonner";

export function ClothesTable() {
  const [user] = useAtom(userAtom);
  const [clothes] = useAtom(clothesAtom);
  const [pending, Pending] = useState(false);
  // const navigate = useNavigate();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: clothes,
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

  if (!user) {
    // navigate("/auth");
    return;
  }

  const saveClothesAction = async () => {
    Pending(true);
    console.log("Save");
    await backendInstance.createSpecifyClothes(clothes);
    toast("Заявка отпралена", {
      description: `Свяжемся с Вами по данным из Вашего профиля`,
      action: { label: "Скрыть", onClick: () => {} },
    });
    // if (user.id && file.filename) backendInstance.downloadFile(file.filename, user.id)
    Pending(false);
  };

  return (
    <div className="w-full m-auto my-12 p-12 bg-white rounded-xl shadow-lg max-[1024px]:p-6">
      <div className="flex gap-2 items-center">
        <PackageSearch />
        <TypographyH3>Список товаров</TypographyH3>
      </div>
      <div className="flex items-center py-4 justify-between max-[1024px]:flex-col max-[1024px]:items-start max-[1024px]:gap-2">
        <Input
          placeholder="Поиск по артикулу"
          value={
            (table.getColumn("articleName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("articleName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div>Добавлено {clothes.length} шт</div>
      </div>
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
                  Товаров не найдено.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} из{" "}
          {table.getFilteredRowModel().rows.length} строк выделено.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={saveClothesAction}
            disabled={clothes.length === 0 || pending}
          >
            Сформировать список
          </Button>
        </div>
      </div>
    </div>
  );
}
