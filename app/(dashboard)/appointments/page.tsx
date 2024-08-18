import DataTable from '@/components/custom ui/DataTable';
import { columnsAppintment } from '@/lib/ColumnDef';
import { getAllAppointments } from '@/lib/action/action';
import { Separator } from '@radix-ui/react-separator';
import React from 'react'

const appointmnetPage: React.FC = async () => {
    const allCustomers = await getAllAppointments();

    const plainAppointments = allCustomers.map(appointment => ({
        ...appointment.toObject(),
        _id: appointment._id.toString(),
    }));
    return (
        <div className="px-10 py-5">
            <p className="text-4xl text-white w-full font-extrabold border-b-[2px] border-gray-700 mb-8">Users</p>
            <Separator className="bg-gray-800" />
            <DataTable columns={columnsAppintment} data={plainAppointments} searchKey='name' />
        </div>
    )
}

export default appointmnetPage;
