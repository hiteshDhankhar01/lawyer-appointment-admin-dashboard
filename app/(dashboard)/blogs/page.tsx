import DataTable from '@/components/custom ui/DataTable';
import { Button } from '@/components/ui/button';
import { columnsBlog } from '@/lib/ColumnDef';
import { getAllBlogs } from '@/lib/action/action';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';
import React from 'react'

const blogPage: React.FC = async () => {
    const allBlogs = await getAllBlogs();

    const plainBlogs = allBlogs.map(blog => ({
        ...blog.toObject(),
        _id: blog._id.toString(),
    }));

    return (
        <div className='px-10 py-5 flex flex-col'>
            <div className="flex  border-b-[2px] border-gray-700 mb-8 ">
                <p className="text-4xl text-white w-full font-extrabold ">Blogs</p>
                <Button variant={'secondary'} className='mb-2'>
                    <Link href="blogs/new">
                        Create new blog
                    </Link>
                </Button>
            </div>
            <Separator className="bg-gray-800" />
            <DataTable columns={columnsBlog} data={plainBlogs} searchKey='title' />
        </div>
    )
}

export default blogPage;

