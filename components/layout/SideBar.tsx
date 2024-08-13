"use client"

import React from 'react'
import { navLink } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className='h-screen sticky top-0 left-0 bg-[#00000030] border-r-[1px] rounded-r-md backdrop-blur-lg p-5 flex flex-col gap-10 shadow-2xl max-lg:hidden'>
      <h2 className='text-3xl font-extrabold text-white mb-2 p-5 tracking-wider'>
        Lawyer<span className='text-blue-500'>Meet</span>
      </h2>
      <div className='flex flex-col gap-8'>
        {navLink.map((link, index) => (
          <Link href={link.url} key={index} className={`flex items-center gap-4 text-lg text-white transition-transform duration-300 ease-in-out p-5 px-10 rounded-lg 
            ${pathname === link.url ? "bg-gray-600 shadow-lg scale-105" : "bg-gray-800 hover:bg-gray-700"}`}>
            <div className='text-xl'>{link.icon}</div>
            <label className='cursor-pointer'>{link.label}</label>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar;



// "use client"

// import React from 'react'
// import { navLink } from '@/lib/constants';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';


// const SideBar: React.FC = () => {
//   const pathname = usePathname();

//   return (
//     <div className='h-screen left-0 top-0 sticky bg-gray-950 p-10 flex flex-col gap-16 shadow-xl max-lg:hidden'>
//       <h2 className='text-2xl font-bold mb-4'>LawyerMeet</h2>
//       <div className='flex flex-col gap-12'>
//         {navLink.map((link, index) =>
//           <Link href={link.url} key={index} className={`flex gap-4 text-lg  hover:bg-gray-800 p-4 rounded-md ${pathname === link.url ? "bg-blue-500" : "bg-green-500"}`} >
//             <label htmlFor="">{link.label}</label>
//             <div>{link.icon}</div>

//           </Link>
//         )}

//       </div>
//     </div>
//   )
// }

// export default SideBar;
