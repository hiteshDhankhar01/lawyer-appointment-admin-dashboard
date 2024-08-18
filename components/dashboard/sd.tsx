import { getTotalUsers } from "@/lib/action/action"

export const totalUsers = async()=>{
    const totalUser = await getTotalUsers()
    return totalUser
}