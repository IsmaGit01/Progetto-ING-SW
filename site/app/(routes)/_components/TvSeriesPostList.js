import React from 'react';
import PostItem from './PostItem';

function TvSeriesPostList({ postList, updatePostList }) {
  // Filter postList to include only tvseries reviews
  const tvseriesPosts = postList.filter(post => post.postCategory === 'tv_series');

  return (
    <div>
      {tvseriesPosts.length > 0 ? (
        tvseriesPosts.map((item, index) => (
          <div key={index}>
            <PostItem post={item} updatePostList={updatePostList} />
          </div>
        ))
      ) : (
        // Placeholder for no tvseries reviews
        <p className='mt-10 ml-2'>Non ci sono recensioni su Serie TV ☹️</p>
      )}
    </div>
  );
}

export default TvSeriesPostList;
