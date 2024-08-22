"use client"

import AppointmentForm from "@/components/appointmnent/appointmentForm";
// import { SelectForm } from "@/components/appointmnent/Form";

const CreateAppointment = () => {
    return (
        <div className="px-10 py-5">
            <p className="text-3xl text-white w-full font-bold border-b-[2px] border-gray-700 mb-8 pb-2">Create Appointment</p>
            <AppointmentForm />
            {/* <SelectForm /> */}
        </div>
    )
}

export default CreateAppointment;