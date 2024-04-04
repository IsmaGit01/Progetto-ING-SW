//PostItem.js
import React from 'react'
import Image from 'next/image'
import moment from 'moment'

//Interfaccia Recensioni

function PostItem({post}) {
  return (
    <div className='p-5 border rounded-lg my-5 max-w-custom mx-auto'>
      <div className='flex gap-3 items-center p-3'>
        <Image
        src={post.createdBy.image}
        alt="user-image"
        width={35}
        height={35}
        className='rounded'
        ></Image>
        <div>
          <h2>{post.createdBy.name}</h2> 
          <h2 className='text-[12px] text-gray-500'>{moment(Number(post.createdAt)).format('DD MMM | hh:mm A')}</h2>
        </div>
        <div className='items-center mr-auto ml-auto my-1'>
          <h2 className='text-[14px]'>"{post.postTitle}"</h2> 
          <h2 className='text-blue-500 text-[12px] hover:cursor-pointer ml-2'>{post.postCategory}</h2>
        </div>
        <div>
          <h2 className='text-[14px] mr-2 -mt-4'>Rated: {post.postRating}/10</h2>
        </div>
      </div>
      <div className='p-4 rounded-lg mt-1'>
        <h2>{post.postText}</h2>
      </div> 
      <div className='flex gap-8 my-2 ml-2'>
        <div className='flex gap-3 items-center text-gray-700 text-[15px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <h2>123 Likes</h2>
        </div>
        <div className='flex gap-3 items-center text-gray-700 text-[15px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          <h2>45 Comments</h2>
        </div>
        <div className='flex ml-auto mr-8'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis"
            className="hover:cursor-pointer text-gray-700">
            <circle cx="12" cy="12" r="1"/>
            <circle cx="19" cy="12" r="1"/>
            <circle cx="5" cy="12" r="1"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PostItem