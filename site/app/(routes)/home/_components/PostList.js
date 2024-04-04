import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';

function PostList({postList, updatePostList}) {

  return (
    <div>
      {postList?postList.map((item,index)=>(
        <div key={index}>
          <PostItem post={item} updatePostList={()=>updatePostList()}/>
        </div>
      )) //Skeleton effect:
    :<div>
      {
        [1,2,3].map((item,index)=>(
          <div className='h-[200px] w-full bg-slate-200 animate-pulse my-5 rounded-lg max-w-custom mx-auto'>
          </div>
        ))
      }</div>}
    </div>
  )
}

export default PostList