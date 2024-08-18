"use client";

import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Loader from '../custom ui/Loader';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';

const formSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters long." }).max(25, { message: "Title must be at most 25 characters long." }),
    excerpt: z.string().min(5, { message: "Excerpt must be at least 5 characters long." }),
    image: z.string().url({ message: "Image must be a valid URL." }),
    paragraph: z.string().min(10, { message: "Paragraph must be at least 10 characters long." }),
});

interface BlogFormProps {
    initialData?: BlogType | null;
}

const BlogForm2: React.FC<BlogFormProps> = ({ initialData }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const { register, handleSubmit, setError, formState: { errors } } = useForm<BlogType>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            title: '',
            excerpt: '',
            image: '',
            paragraph: '',
        },
    });

    useEffect(() => {
        setLoading(false);
    }, []);

    const onSubmit = async (data: BlogType) => {
        setLoading(true);

        try {
            const response = await fetch('/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const errorText = await response.text();
                alert("some thing is wrong")
                console.error('Error creating blog:', errorText);
            }

            const responseData = await response.json();
            console.log('Blog created successfully:', responseData);
            router.push('/blogs');
            setLoading(false);
        } catch (error) {
            console.error('Unexpected error:', error);
        }
    };

    return loading ? (
        <Loader />
    ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6 bg-gray-900 text-white rounded-lg shadow-lg backdrop-blur-lg border border-gray-700">
            <div className="relative group">
                <label htmlFor="title" className="block text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Title</label>
                <Input
                    type="text"
                    id="title"
                    {...register('title')}
                    className="mt-1 p-3 w-full bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Enter your title here"
                />
                {errors.title && <p className="mt-2 text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <div className="relative group">
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Excerpt</label>
                <Input
                    type="text"
                    id="excerpt"
                    {...register('excerpt')}
                    className="mt-1 p-3 w-full bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Enter a brief excerpt"
                />
                {errors.excerpt && <p className="mt-2 text-red-500 text-sm">{errors.excerpt.message}</p>}
            </div>

            <div className="relative group">
                <label htmlFor="image" className="block text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Image URL</label>
                <Input
                    type="text"
                    id="image"
                    {...register('image')}
                    className="mt-1 p-3 w-full bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="https://example.com/image.jpg"
                />
                {errors.image && <p className="mt-2 text-red-500 text-sm">{errors.image.message}</p>}
            </div>

            <div className="relative group">
                <label htmlFor="paragraph" className="block text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Paragraph</label>
                <textarea
                    id="paragraph"
                    {...register('paragraph')}
                    className="mt-1 p-3 w-full bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Write your content here..."
                    rows={4}
                />
                {errors.paragraph && <p className="mt-2 text-red-500 text-sm">{errors.paragraph.message}</p>}
            </div>

            <button type="submit" className="px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg shadow-lg text-lg font-semibold tracking-wide text-white transition-all transform ">
                Submit
            </button>
        </form>

    );
};

export default BlogForm2;
