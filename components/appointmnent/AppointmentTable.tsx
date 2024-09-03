"use client"

import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
}
    from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dot } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// interface AppointmentType{
//     id: string;
//     userId: string;
//     name: string;
//     email: string;
//     phoneNo: number;
//     service: string;
//     status: string;
//     message: string;
// }

interface AppointmentTableProps {
    appointmentData: AppointmentType[];
}

const AppointmentTable: React.FC<AppointmentTableProps> = ({ appointmentData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const router = useRouter();

    const filteredData = appointmentData.filter((appointment) =>
        appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (

        <div className="overflow-x-auto m-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-6 shadow-2xl border border-gray-700">
            <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-3 border-none rounded-lg w-full bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
            />
            <Table className="min-w-full bg-gray-800 rounded-lg">
                <TableHeader>
                    <TableRow className="bg-gray-900 text-gray-200">
                        <TableHead className="px-4 py-3 text-left tracking-wider uppercase font-semibold">Name</TableHead>
                        <TableHead className="px-4 py-3 text-left tracking-wider uppercase font-semibold">Email</TableHead>
                        <TableHead className="px-4 py-3 text-left tracking-wider uppercase font-semibold">Date</TableHead>
                        <TableHead className="px-4 py-3 text-left tracking-wider uppercase font-semibold">Status</TableHead>
                        <TableHead className="px-4 py-3 text-left tracking-wider uppercase font-semibold">Service</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentRows.length > 0 ? (
                        currentRows.map((appointment) => (

                            <TableRow className="cursor-default hover:bg-gray-700 transform transition-all duration-200 "
                                key={appointment._id} onClick={() => router.push(`/appointments/${appointment._id}`)}>
                                <TableCell className="px-4 py-3 border-b border-gray-700">{appointment.name}</TableCell>
                                <TableCell className="px-4 py-3 border-b border-gray-700">{appointment.email}</TableCell>
                                <TableCell className="px-4 py-3 border-b border-gray-700">
                                    {format(new Date(appointment.appointmentDate), 'eeee, MMMM do yyyy, hh:mm a')}
                                </TableCell>
                                <TableCell
                                    className={`px-4 py-3 border-b border-gray-700 ${appointment.status === 'Scheduled'
                                        ? 'text-green-400'
                                        : appointment.status === 'Completed'
                                            ? 'text-blue-400'
                                            : appointment.status === 'Pending'
                                                ? 'text-yellow-400'
                                                : 'text-red-400'
                                        }`}
                                >
                                    {appointment.status}
                                </TableCell>
                                <TableCell className="px-4 py-3 border-b border-gray-700">{appointment.service}</TableCell>
                            </TableRow>

                        ))
                    ) : (
                        <TableRow>
                            <TableCell className="px-4 py-2 text-center bg-gray-800" colSpan={5}>
                                No results found
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex justify-between mt-6">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm text-gray-300 border border-gray-600 rounded-lg bg-gray-700 bg-opacity-70 hover:bg-opacity-90 hover:text-white transition duration-300 disabled:opacity-50"
                >
                    Previous
                </Button>
                <span className="px-4 py-2">
                    Page {currentPage} of {totalPages}
                </span>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm text-gray-300 border border-gray-600 rounded-lg bg-gray-700 bg-opacity-70 hover:bg-opacity-90 hover:text-white transition duration-300 disabled:opacity-50"
                >
                    Next
                </Button>
            </div>
        </div>

    );
};

export default AppointmentTable;
