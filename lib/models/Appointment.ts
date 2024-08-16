import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNo: Number,
    date: Date,
    service: String,
    status: String,
    message: String,
    userId: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema)

export default Appointment;