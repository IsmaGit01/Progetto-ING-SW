import React from 'react';
import PostItem from './PostItem';

function BookPostList({ postList, updatePostList }) {
  // Filter postList to include only books reviews
  const bookPosts = postList.filter(post => post.postCategory === 'books');

  return (
    <div>
      {bookPosts.length > 0 ? (
        bookPosts.map((item, index) => (
          <div key={index}>
            <PostItem post={item} updatePostList={updatePostList} />
          </div>
        ))
      ) : (
        // Placeholder for no books reviews
        <p className='mt-10 ml-2'>Non ci sono recensioni di Libri ☹️</p>
      )}
    </div>
  );
}

export default BookPostList;
