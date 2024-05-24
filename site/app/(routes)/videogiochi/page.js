"use client"
import React, { useEffect, useState } from 'react';
import Banner from '../_components/Banner';
import { useUser } from '@clerk/nextjs';
import WritePost from '../_components/WritePost';
import GamesPostList from '../_components/GamesPostList'; // Import MoviePostList component
import GlobalApi from '@/app/_utils/GlobalApi';

function VideogiochiPage() {
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
      {/* Filtra solo le recensioni di giochi attraverso GamesPostList */}
      <GamesPostList postList={postList} updatePostList={() => getAllPost()} />
    </div>
  );
}

export default VideogiochiPage;