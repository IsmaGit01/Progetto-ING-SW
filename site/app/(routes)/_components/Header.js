import { Button } from '@/components/ui/button'
import { Menu, MenuSquare } from 'lucide-react'
import React from 'react'
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';


function Header({toggleSideBar}) {
  const {user}=useUser();
  return (
    <div className='flex justify-between md:justify-end shadow-sm bg-white items-center'>
        <Menu className='md:hidden h-7 w-7
         text-slate-500 cursor-pointer'
         onClick={()=>toggleSideBar()}
         />
         {!user ? <Link href="/sign-up">
        <Button className='bg-blue-500 
        hover:bg-blue-600 shadow-sm mr-4 mt-4'>
            Registrati</Button>
            </Link>:
            <div className='mr-4 my-2 flex'>
              <h2 className='p-2 -mt-1 mr-2'>{user.fullName}</h2>
              <UserButton/>
            </div>}
    </div>
  )
}

export default Header