import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

function Banner() {
  return (
    <div className='p-2 bg-white-400 
    rounded-xl shadow-sm flex items-center
    bg-blue-100
     border gap-5'>
        <Image src='/test.png' width={150} height={150} alt='entertainment'/>
        <div>
        <h2 className='font-bold text-[27px] '>Benvenuto!</h2>
        <h2 className='p-1'>Unisciti alla nostra Community e libera il tuo spirito creativo </h2>
        <Link href="/sign-up">
        <Button className="mt-3 bg-blue-500 hover:bg-blue-600 shadow-sm">Registrati</Button>
        </Link>
        </div>
        
    </div>
  )
}

export default Banner