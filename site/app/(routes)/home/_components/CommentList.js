import React from 'react';
import Image from 'next/image';

function CommentList({ commentList }) {
  if (!Array.isArray(commentList)) {
    return null; // Or render some fallback UI
  }

  return (
    <div>
      {commentList.map((item, index) => (
        <div key={index}>
          <div className='flex items-center gap-3 m-5'>
            <Image 
              src={item?.createdBy?.image} 
              alt='user-image'
              width={30}
              height={30}
              className='rounded'
            />
            <h2 className='border-gray-200 border-2 rounded-lg p-2'>{item.commentText}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
