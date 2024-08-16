"use client";

import { Button } from "@/components/ui/button";
import {
    ColumnDef,
    ColumnFiltersState,
    getFilteredRowModel,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "../ui/input";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchKey: string;
}

const DataTable = <TData, TValue>({ columns, data, searchKey }: DataTableProps<TData, TValue>) => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },
    });

    return (
        <div className="p-6  rounded-lg shadow-lg">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Search..."
                    value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
                    onChange={(e) => table.getColumn(searchKey)?.setFilterValue(e.target.value)}
                    className="w-full max-w-xs px-4 py-2 bg-gray-900 text-gray-300 placeholder-gray-600 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
            </div>
            <div className="overflow-x-auto">
                <Table className="w-full bg-gray-950 rounded-lg shadow-inner">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="hover:bg-gray-950 transition-colors duration-200">
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-800"
                                    >
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} className="hover:bg-gray-800 transition-colors duration-200">
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="px-6 py-4 text-sm text-gray-400 border-b border-gray-800">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="px-6 py-4 text-center text-gray-500"
                                >
                                    No results found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="mt-4 flex justify-between">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="px-4 py-2 text-sm text-gray-300 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg hover:bg-opacity-100 disabled:opacity-50"
                >
                    Previous
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="px-4 py-2 text-sm text-gray-300 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg hover:bg-opacity-100 disabled:opacity-50"
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default DataTable;
