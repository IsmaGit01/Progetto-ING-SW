"use client"
import React, { useEffect, useState } from 'react'
import Banner from '../_components/Banner'
import { useUser } from '@clerk/nextjs'
import WritePost from '../_components/WritePost';
import PostList from '../_components/PostList';
import GlobalApi from '@/app/_utils/GlobalApi';

function Home() {
  const {user} = useUser();
  //Array dove viene salvata la risposta
  const [postList,setPostList]=useState([]);

  useEffect(()=>{
      getAllPost();
  },[])
  
  //Fetch all posts
  const getAllPost=()=>{
      GlobalApi.getAllPost().then(resp=>{
          setPostList(resp.data)
      })
  }
  return (
    <div className='p-5 px-10'>
      {!user? <Banner/>
      
    :<WritePost getAllPost={()=>getAllPost()}/>}

    <PostList postList={postList}
    updatePostList={()=>getAllPost()}/>
    </div>
  )
}

export default Home