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
import { MenuItem } from "@/feature/types";
import { itemsToUpdateAtom } from "@/feature/common/admin";

export const menuColumns: ColumnDef<MenuItem>[] = [
  {
    accessorKey: "Id",
    header: "Id",
    cell: ({ row }) => <div className="capitalize">{row.original.isNew ? "" : String(row.original.id)}</div>,
  },
  {
    accessorKey: "name",
    header: "Название",
    cell: ({ row }) => {
      const [editableMenu, setEditableMenu] = useAtom(itemsToUpdateAtom);
      editableMenu;
      const UpdateItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditableMenu(prevMenu =>
          prevMenu.map(item =>
            Number(item.id) === Number(row.original.id) ? { ...item, name: event.target.value, toUpdate: true } : item
          )
        );
      }
      return <div className="lowercase"><input type="text" value={row.original.name} onChange={UpdateItem} /></div>;
    },
  },
  {
    accessorKey: "url",
    header: "Ссылка",
    cell: ({ row }) => {
      const [editableMenu, setEditableMenu] = useAtom(itemsToUpdateAtom);
      editableMenu;
      const UpdateItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditableMenu(prevMenu =>
          prevMenu.map(item =>
            Number(item.id) === Number(row.original.id) ? { ...item, url: event.target.value, toUpdate: true } : item
          )
        );
      }
      return <div className="lowercase"><input type="text" value={row.original.url} onChange={UpdateItem} /></div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [editableMenu, setEditableMenu] = useAtom(itemsToUpdateAtom);
      const DeleteItem = () => {
          editableMenu;
          if (row.original.isNew) {
            setEditableMenu(prevItems => prevItems.filter(item =>{ 
              return  Number(item.id) !== Number(row.original.id);
            }));
          } else {
            setEditableMenu(prevMenu =>
              prevMenu.map(item =>
                item.id === row.original.id ? { ...item, toDelete: true } : item
              )
            );
          }
      }

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
            <DropdownMenuItem onClick={DeleteItem}>
              Удалить
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function MenuItemEditor() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [isPending, Pending] = React.useState(false);
  const [user] = useAtom(userAtom);
  const [editableMenu, setEditableMenu] = useAtom(itemsToUpdateAtom);


  const table = useReactTable({
    data: editableMenu,
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

  const fetchMenu = async () => {
    if (user && user.user_role === 'ADMIN') {
      const menu = await backendInstance.getMenu();
      setEditableMenu(menu);
    }
  };

  React.useEffect(() => {
    fetchMenu();
  }, [user, setEditableMenu]);

  const AddMenuItem  = () => {
  
    console.log("Adding...")
    const newItem: MenuItem = {
      id: 999990 + editableMenu.length,
      name:"",
      url: "",
      isNew: true
    }
    // const newItemList: MenuItem[] = [...newMenuItems, newItem];
    setEditableMenu(prevItems => [...prevItems, newItem]);
    // console.log(newItemList);
  }

  const SaveAction = () => {

    Pending(true);
    const toDeleteItems = editableMenu.filter((item) => {
      return item.toDelete;
    })
    const toUpdateItems = editableMenu.filter((item) => {
      return item.toUpdate;
    })
    const toAddItems =  editableMenu.filter((item) => {
      return item.isNew;
    })

    Promise.all([
      backendInstance.addMenuItems(toAddItems),
      backendInstance.editMenuItems(toUpdateItems),
      backendInstance.deleteMenuItems(toDeleteItems)
    ]).then(() => {
      fetchMenu().then(() => {
         Pending(false)
      })
    })
  }

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
            {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.original.toDelete? "todelete" : (row.getIsSelected() && "selected")}
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
            }
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={AddMenuItem}
            disabled={false}
          >
            Добавить элемент
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={SaveAction}
            disabled={isPending ? true : false}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}
