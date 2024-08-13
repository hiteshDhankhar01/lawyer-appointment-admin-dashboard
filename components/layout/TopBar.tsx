"use client"

import React, { useState } from 'react';
import { navLink } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

const TopBar: React.FC = () => {
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const pathname = usePathname();

    return (
        <div className='sticky top-0 z-20 w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex justify-between items-center px-6 py-3 shadow-lg lg:hidden'>
            <h2 className='text-2xl font-extrabold text-white tracking-wider'>
                Lawyer<span className='text-blue-500'>Meet</span>
            </h2>
            <div className='flex gap-8 max-md:hidden'>
                {navLink.map((link, index) => (
                    <Link
                        href={link.url}
                        key={index}
                        className={`flex items-center gap-2 text-md text-white transition-transform duration-300 ease-in-out px-4 py-2 rounded-lg 
                        ${pathname === link.url ? "bg-gray-600 shadow-lg scale-105" : "bg-gray-800 hover:bg-gray-700"}`}
                    >
                        <label className='cursor-pointer'>{link.label}</label>
                        <div className='text-md'>{link.icon}</div>
                    </Link>
                ))}
            </div>
            <div className="relative flex gap-4 items-center">
                <Menu
                    className="cursor-pointer text-white sm:hidden"
                    onClick={() => setDropdownMenu(!dropdownMenu)}
                />
                {dropdownMenu && (
                    <div className="absolute top-12 right-0 flex flex-col gap-4 p-5 bg-gray-800 shadow-xl rounded-lg">
                        {navLink.map((link) => (
                            <Link
                                href={link.url}
                                key={link.label}
                                className={`flex items-center gap-2 text-white transition-transform duration-300 ease-in-out p-2 rounded-lg 
                                ${pathname === link.url ? "bg-gray-600" : "bg-gray-700 hover:bg-gray-600"}`}
                            >
                                <div className='text-xl'>{link.icon}</div>
                                <p>{link.label}</p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopBar;

// "use client"

// import React from 'react'
// import { navLink } from '@/lib/constants';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const TopBar: React.FC = () => {
//     const pathname = usePathname();
//     return (
//         <div className='sticky top-0 z-20 w-full  bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex  justify-between items-center px-8 py-4 shadow-lg lg:hidden'>
//             <h2 className='text-3xl font-extrabold text-white mb-2 p-5 tracking-wider'>
//                 Lawyer<span className='text-blue-500'>Meet</span>
//             </h2>
//             <div className='flex gap-8'>
//                 {navLink.map((link, index) => (
//                     <Link href={link.url} key={index} className={`flex items-center gap-4 text-lg text-white transition-transform duration-300 ease-in-out p-5 px-10 rounded-lg
//             ${pathname === link.url ? "bg-gray-600 shadow-lg scale-105" : "bg-gray-800 hover:bg-gray-700"}`}>
//                         <label className='cursor-pointer'>{link.label}</label>
//                         <div className='text-xl'>{link.icon}</div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default TopBar;