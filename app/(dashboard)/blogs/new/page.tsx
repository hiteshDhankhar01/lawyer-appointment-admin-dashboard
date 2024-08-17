import BlogForm from "@/components/blog/BlogForm"

const CreateBlog = () => {
    return (
        <div className="px-10 py-5">
            <p className="text-4xl text-white w-full font-extrabold border-b-[2px] border-gray-700 mb-8">Create Blog</p>
            <BlogForm />
        </div>
    )
}

export default CreateBlog;