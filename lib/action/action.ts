import Appointment from "../models/Appointment"
import User from "../models/User"
import { connectToDB } from "../mongoDB"

export const getTotalUsers = async () => {
    await connectToDB()
    const user = await User.find()
    const totoalUser = user.length
    return totoalUser
}

export const getAllUsers = async () => {
    await connectToDB()
    const allUser = await User.find()
    return allUser
}


export const getTotalAppointments = async () => {
    await connectToDB()
    const user = await Appointment.find()
    const totoalUser = user.length
    return totoalUser
}

export const getAllAppointments = async () => {
    await connectToDB()
    const allUser = await Appointment.find()
    return allUser
}