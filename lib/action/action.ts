import Appointment from "../models/Appointment"
import Blog from "../models/Blog"
import User from "../models/User"
import { connectToDB } from "../mongoDB"

export const getTotalUsers = async () => {
    try {
        await connectToDB();
        const users = await User.find();
        return users.length;
    } catch (error) {
        console.error("Error fetching total users:", error);
        throw error;
    }
}

export const getAllUsers = async () => {
    await connectToDB()
    const allUser = await User.find()
    return allUser
}

export const getTotalAppointments = async () => {
    await connectToDB()
    const appointments = await Appointment.find()
    const totoalAppointments = appointments.length
    return totoalAppointments
}

export const getAllAppointments = async () => {
    await connectToDB()
    const allAppointments = await Appointment.find()
    return allAppointments
}

export const getTotalBlogs = async () => {
    await connectToDB()
    const blog = await Blog.find()
    const totoalBlog = blog.length
    return totoalBlog
}

export const getAllBlogs = async () => {
    await connectToDB()
    const allBlogs = await Blog.find()
    return allBlogs
}
