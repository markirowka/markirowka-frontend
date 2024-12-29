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
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { columns } from "./columns";
import { PackageSearch } from "lucide-react";
import { orderProductsStoreAtom } from "../../store";
import { userAtom } from "@/feature/common";
// import { useNavigate } from "react-router-dom"
import { backendInstance } from "@/services/backendService";
import { toast } from "sonner";
import { ClothesPage, ShoesPage } from "@/pages";
import { clothesAtom } from "@/feature/clothes";
import { shoesAtom } from "@/feature/shoes";
import { localStorageService } from "@/services/localStorage";

const watchingCategories = ["Одежда", "Обувь"];

export function OrderTable() {
  const [user] = useAtom(userAtom);
  // const navigate = useNavigate();
  const [orderProducts, setOrder] = useAtom(orderProductsStoreAtom);
  const [clothes] = useAtom(clothesAtom);
  const [shoes] = useAtom(shoesAtom);
  const [pending, Pending] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [markFormEnabled, setMarkFormEnabled] = useState(false);

  useEffect(() => {
    const savedOrders = localStorageService.getSavedOrder().map(item => ({
      category: item.category || "", // Если нет значения, ставим пустую строку
      name: item.name || "", // Если нет значения, ставим пустую строку
      quantity: item.quantity || 0, // Если нет значения, ставим 0
      price: item.price || 0, // Если нет значения, ставим 0
      date: item.date || "", // Если нет значения, ставим пустую строку
    }));
    
    setOrder(savedOrders); // Устанавливаем состояние заказов
  }, []);

  // Второй useEffect для сохранения данных о заказах в localStorage
  useEffect(() => {
    localStorageService.saveOrder(orderProducts); // Сохраняем заказы в localStorage при изменении состояния orders
  }, [orderProducts]);

  const showMarkClothes = !!orderProducts.find((p) => {
    return p.category === watchingCategories[0];
  });

  const showMarkShoes = !!orderProducts.find((p) => {
    return p.category === watchingCategories[1];
  });

  const isMarkCheckboxAvailable = showMarkClothes || showMarkShoes;

  const table = useReactTable({
    data: orderProducts,
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
        pageSize: 99,
      },
    },
  });

  const createOrderAction = async () => {
    if (!user) {
      toast("Вы не зарегистрированы в системе", {
        description: "Войдите, чтобы сделать заказ",
        action: {
          label: "Скрыть",
          onClick: () => console.error("Пользователь не зарегистрирован"),
        },
      });
      return;
    }
    Pending(true);
    toast("Создание документа началось", {
      description: "Накладные создаются...",
      action: {
        label: "Скрыть",
        onClick: () => console.log("Прочитано"),
      },
    }); 
    const { files } = await backendInstance.createOrder(
      orderProducts,
      shoes.length > 0 ? shoes : undefined,
      clothes.length > 0 ? clothes : undefined
    );
    files.forEach((file: any) => {
      if (user && user.id) backendInstance.downloadFile(file.name, user.id);
    });
    Pending(false);
  };

  const updateMarkFormEnabled = (event: any) => {
    setMarkFormEnabled(!!event.target?.checked);
  };

  return (
    <>
      <div className="w-full m-auto my-12 p-12 bg-white rounded-xl shadow-lg max-[1024px]:p-6">
        <div className="flex gap-2 items-center">
          <PackageSearch />
          <TypographyH3>Список товаров для поставки</TypographyH3>
        </div>
        <div className="flex items-center py-4 justify-between max-[1024px]:flex-col max-[1024px]:items-start max-[1024px]:gap-2">
          <Input
            placeholder="Поиск по названию"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <div>Добавлено {orderProducts.length} шт</div>
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
        <div className="flex items-center justify-between space-x-2 py-4">
          <div
            className={`flex-1 text-sm form-approve-checkbox${
              !isMarkCheckboxAvailable ? " disabled" : ""
            }`}
          >
            <label htmlFor="make">
              <input
                className={`order-additional-checkbox${
                  !isMarkCheckboxAvailable ? " disabled" : ""
                }`}
                type="checkbox"
                checked={markFormEnabled}
                onChange={updateMarkFormEnabled}
                disabled={!isMarkCheckboxAvailable}
                name="make"
              />
              <p>Заполнить накладную для создания маркировки</p>
            </label>
          </div>
        </div>
      </div>
      {markFormEnabled && showMarkClothes ? (
        <ClothesPage withBtn={false} />
      ) : null}
      {markFormEnabled && showMarkShoes ? <ShoesPage withBtn={false} /> : null}
      <div className="buttonPageCtnr">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={createOrderAction}
            disabled={orderProducts.length === 0 || pending}
          >
            Скачать и отправить документы
          </Button>
        </div>
      </div>
    </>
  );
}
