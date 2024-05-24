import React from 'react';
import PostItem from './PostItem';

function MusicPostList({ postList, updatePostList }) {
  // Filter postList to include only music reviews
  const musicPosts = postList.filter(post => post.postCategory === 'music');

  return (
    <div>
      {musicPosts.length > 0 ? (
        musicPosts.map((item, index) => (
          <div key={index}>
            <PostItem post={item} updatePostList={updatePostList} />
          </div>
        ))
      ) : (
        // Placeholder for no music reviews
        <p className='mt-10 ml-2'>Non ci sono recensioni di Musica ☹️</p>
      )}
    </div>
  );
}

export default MusicPostList;
