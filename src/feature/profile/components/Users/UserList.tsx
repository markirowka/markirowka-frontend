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
import { userAtom } from "@/feature/common";
import { backendInstance } from "@/services/backendService";
import { UserDisplayData } from "@/feature/types";
import { userListAtom } from "@/feature/common/admin";

export const userColumns: ColumnDef<UserDisplayData>[] = [
  {
    accessorKey: "Id",
    header: "Номер",
    cell: ({ row }) => <div className="capitalize">{row.original.user_id}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return <div className="lowercase">{row.original.email}</div>;
    },
  },
  {
    accessorKey: "inn",
    header: "ИНН",
    cell: ({ row }) => {
      return <div className="lowercase">{row.original.inn}</div>;
    },
  },
  {
    accessorKey: "full_name",
    header: "Название",
    cell: ({ row }) => {
      return <div className="lowercase">{row.original.full_name}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-right">Роль</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium text-lime-500">
          {row.original.user_role === "ADMIN"
            ? "Администратор"
            : "Пользователь"}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [displayUsers, setDisplayUsers] = useAtom(userListAtom);

      const UpdateUserRole = (newRole: string) => {
        displayUsers;
        return () => {
          backendInstance
            .editProfileParamsByAdmin({
              id: row.original.id,
              user_role: newRole,
            })
            .then(async () => {
              const newData = await backendInstance.getAllUsers();
              setDisplayUsers(newData);
            })
            .catch((e) => {
              console.log(e);
            });
        };
      };

      const deleteUser = () => {
        backendInstance
          .deleteUser(row.original.id)
          .then(async () => {
            const newData = await backendInstance.getAllUsers();
            setDisplayUsers(newData);
          })
          .catch((e) => {
            console.log(e);
          });
      };

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
            <DropdownMenuItem onClick={UpdateUserRole("ADMIN")}>
              Сделать администратором
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={UpdateUserRole("USER")}>
              Убрать из администраторов
            </DropdownMenuItem>
            <DropdownMenuItem onClick={deleteUser}>Удалить</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const defaultPageLimit = 20;

export function UserList() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [user] = useAtom(userAtom);
  const [displayUsers, setDisplayUsers] = useAtom(userListAtom);
  const [usersCount, setUsersCount] = React.useState<Number>(0);
  const [pageOffset, setPageOffset] = React.useState<Number>(0);
  const [pageLimit, setPageLimit] = React.useState<Number>(defaultPageLimit);

  const table = useReactTable({
    data: displayUsers,
    columns: userColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    },
  });

  React.useEffect(() => {
    setPageLimit(defaultPageLimit);
    backendInstance.getAllUsersCount().then((c) => {
      setUsersCount(c);
    });
  }, []);

  React.useEffect(() => {
    if (user && user?.user_role === "ADMIN") {
      backendInstance
        .getAllUsers(Number(pageOffset), Number(pageLimit))
        .then((users) => {
          setDisplayUsers(prevUsers => [...prevUsers, ...users]);
        });
    }
  }, [pageOffset]);

  const displayNum = Math.min((Number(pageOffset) + Number(pageLimit)), Number(usersCount));

  const displayLoadMore = Number(displayNum) < Number(usersCount);

  const paginateHandler = () => {
    setPageOffset((offset) => Number(offset) + Number(pageLimit));
  };

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
                  colSpan={userColumns.length}
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
          {`Показано ${displayNum} из ${usersCount} пользователей`}
        </div>
        <Button
          size="sm"
          className="flex flex-row items-center gap-2 profile-edit-button"
          onClick={paginateHandler}
          disabled={!displayLoadMore}
        >
          Загрузить ещё
        </Button>
      </div>
    </div>
  );
}
