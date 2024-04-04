"use client"
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { UserDetailContext } from './_context/UserDetailContext'
import { useState } from 'react'
import { Toaster } from '@/components/ui/toaster'



const inter = Montserrat({ 
  
  subsets: ['latin'],
  weight: '700' 

})

//export const metadata = {
//  title: 'Rev App',
//  description: 'Generated by create next app',
//}

export default function RootLayout({ children }) {

  const [userDetail,setUserDetail]=useState();
  return (

    <ClerkProvider>

      <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
        <html lang="en">
          <body className={inter.className} >{children}
          <Toaster/>
          </body>
        </html>
      </UserDetailContext.Provider>
      
    </ClerkProvider>

  )
}