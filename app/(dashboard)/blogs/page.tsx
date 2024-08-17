import { Button } from '@/components/ui/button';
import { Ghost } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const blogPage: React.FC = () => {
    return (
        <div className='px-10 py-5'>
            <div className="flex  border-b-[2px] border-gray-700 mb-8 ">
                <p className="text-4xl text-white w-full font-extrabold ">Blogs</p>
                <Button variant={'secondary'} className='mb-2'>
                    <Link href="blogs/new">
                        Create new blog
                    </Link>
                </Button>
            </div>

        </div>
    )
}

export default blogPage;
