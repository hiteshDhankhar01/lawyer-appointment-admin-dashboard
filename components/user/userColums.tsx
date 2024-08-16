"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<UserType>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "gender",
        header: "Gender",
    },
];


export const columnsAppintment: ColumnDef<AppointmentType>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phoneNo",
        header: "Phone No.",
    },
    // {
    //     accessorKey: "date",
    //     header: "Date",
    // },
    {
        accessorKey: "service",
        header: "Service",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "message",
        header: "Message",
    },
];
