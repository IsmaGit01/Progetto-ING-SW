"use client"
import React, { useEffect, useState } from 'react';
import Banner from '../_components/Banner';
import { useUser } from '@clerk/nextjs';
import WritePost from '../_components/WritePost';
import TvSeriesPostList from '../_components/TvSeriesPostList'; 
import GlobalApi from '@/app/_utils/GlobalApi';

function SerieTvPage() {
  const { user } = useUser();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = () => {
    GlobalApi.getAllPost().then(resp => {
      setPostList(resp.data);
    });
  };

  return (
    <div className='p-5 px-10'>
      {!user ? <Banner /> : <WritePost getAllPost={() => getAllPost()} />}
      {/* Filtra solo le recensioni di serie tv attraverso TvSeriesPostList */}
      <TvSeriesPostList postList={postList} updatePostList={() => getAllPost()} />
    </div>
  );
}

export default SerieTvPage;