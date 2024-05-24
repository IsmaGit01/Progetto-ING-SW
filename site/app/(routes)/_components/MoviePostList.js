import React from 'react';
import PostItem from './PostItem';

function MoviePostList({ postList, updatePostList }) {
  // Filter postList to include only movie reviews
  const moviePosts = postList.filter(post => post.postCategory === 'movies');

  return (
    <div>
      {moviePosts.length > 0 ? (
        moviePosts.map((item, index) => (
          <div key={index}>
            <PostItem post={item} updatePostList={updatePostList} />
          </div>
        ))
      ) : (
        // Placeholder for no movie reviews
        <p className='mt-10 ml-2'>Non ci sono recensioni di Film ☹️</p>
      )}
    </div>
  );
}

export default MoviePostList;
