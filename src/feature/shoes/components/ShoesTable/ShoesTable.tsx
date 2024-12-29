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
import { useEffect, useState } from "react";
import { shoesAtom } from "../../store/shoesStore";
import { useAtom } from "jotai";
import { columns } from "./columns";
import { PackageSearch } from "lucide-react";
import { backendInstance } from "@/services/backendService";
// import { userAtom } from "@/feature/common"
import { toast } from "sonner";
import { markRowLimit } from "@/config/env";
import { localStorageService } from "@/services/localStorage";
// import { useNavigate } from "react-router-dom"

export function ShoesTable(props: { withBtn: boolean }) {
  // const [user] = useAtom(userAtom)
  const [shoes, setShoes] = useAtom(shoesAtom);
  // const navigate = useNavigate();
  const [pending, Pending] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  // First useEffect to load shoes data from localStorage
  useEffect(() => {
    const savedShoes = localStorageService.getSavedShoes().map((item) => ({
      fullName: item.fullName || "", // Default to empty string if undefined
      tradeMark: item.tradeMark || "", // Default to empty string
      articleType: item.articleType || "", // Default to empty string
      articleName: item.articleName || "", // Default to empty string
      shoesType: item.shoesType || "", // Default to empty string
      color: item.color || "", // Default to empty string
      size: item.size || "", // Default to empty string
      upperMaterial: item.upperMaterial || "", // Default to empty string
      liningMaterial: item.liningMaterial || "", // Default to empty string
      bottomMaterial: item.bottomMaterial || "", // Default to empty string
      tnved: item.tnved || "", // Default to empty string
    }));

    setShoes(savedShoes); // Set the shoes state
  }, []);

  // Second useEffect to save shoes data to localStorage
  useEffect(() => {
    localStorageService.saveShoes(shoes); // Save shoes to localStorage when shoes data changes
  }, [shoes]);

  const table = useReactTable({
    data: shoes,
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
        pageSize: markRowLimit,
      },
    },
  });

  const generateTableAction = async () => {
    Pending(true);
    await backendInstance.createSpecifyShoes(shoes);
    toast("Заявка отпралена", {
      description: `Свяжемся с Вами по данным из Вашего профиля`,
      action: { label: "Скрыть", onClick: () => {} },
    });
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
        <div>Добавлено {shoes.length} шт</div>
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
          Всего {table.getFilteredRowModel().rows.length} строк.
        </div>
        {props.withBtn ? (
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={generateTableAction}
              disabled={shoes.length === 0 || pending}
            >
              Сформировать заказ
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
