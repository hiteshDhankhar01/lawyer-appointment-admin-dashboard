import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    appointmentDate: Date,
    appointmentTime: String,
    service: String,
    status: String,
    notes: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
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