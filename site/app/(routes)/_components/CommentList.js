//CommentList.js
import React from 'react';
import Image from 'next/image';
import moment from "moment";

function CommentList({ commentList }) {
  if (!Array.isArray(commentList)) {
    return null; // Or render some fallback UI
  }

  // Sort comments by createdAt in descending order
  const sortedComments = [...commentList].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div>
      {sortedComments.map((item, index) => (
        <div key={index} className='flex items-start gap-3 m-5'>
          <Image 
            src={item?.createdBy?.image} 
            alt='user-image'
            width={30}
            height={30}
            className='rounded'
          />
          <div className='flex flex-col w-full'>
            <h2 className='-mt-1 mb-2 text-gray-600'>{item.createdBy.name}</h2>
            <h2 className='border-gray-200 border-2 rounded-lg p-3 -mt-1 flex justify-between items-center text-gray-600'>{item.commentText}</h2>
            <h2 className='text-[11px] text-gray-600 text-right mr-4 mt-1'>{moment(Number(item.createdAt)).format("DD MMM | hh:mm A")}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;

//