import React from 'react';
import PostItem from './PostItem';

function GamesPostList({ postList, updatePostList }) {
  // Filter postList to include only games reviews
  const gamePosts = postList.filter(post => post.postCategory === 'games');

  return (
    <div>
      {gamePosts.length > 0 ? (
        gamePosts.map((item, index) => (
          <div key={index}>
            <PostItem post={item} updatePostList={updatePostList} />
          </div>
        ))
      ) : (
        // Placeholder for no games reviews
        <p className='mt-10 ml-2'>Non ci sono recensioni di Videogiochi ☹️</p>
      )}
    </div>
  );
}

export default GamesPostList;
