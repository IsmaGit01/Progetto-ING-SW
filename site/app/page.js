"use client"
import Image from 'next/image'
import { useEffect } from 'react';
import GlobalApi from './_utils/GlobalApi';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Home() {

  const {user}=useUser();

  useEffect(()=>{

    user&&createUserProfile(); //Create user profile only if user is available

  },[user])

  //To create User Profile and save it to the DB

  const createUserProfile=()=>{

    const data={
      name:user.fullName,
      email:user.primaryEmailAddress.emailAddress,
      image:user.imageUrl
    }

    GlobalApi.createUser(data).then(resp=>{
      console.log(resp.data);
      localStorage.setItem('isLogin',true)
    })
  }
  
  return (
  <div>

    <UserButton/>

    <button onClick={()=>{window.location.href='./home'}}>
    Home
    </button>

  </div>
  )
}
