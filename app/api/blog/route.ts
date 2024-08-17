import Blog from "@/lib/models/Blog";
import { connectToDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {

    try {
        await connectToDB()
        const { title, excerpt, image, paragraph } = await req.json()

        if (!title || !excerpt || !image || !paragraph) {
            return new NextResponse("Not enough data tocreatea blog", { status: 400 })
        }

        const newBlog = await Blog.create({
            title, excerpt, image, paragraph
        })

        await newBlog.save()
        return new NextResponse(newBlog, { status: 200 })
    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}