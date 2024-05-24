import React, { useContext, useState } from 'react';
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button';
import GlobalApi from '@/app/_utils/GlobalApi';
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { useToast } from '@/components/ui/use-toast';

function WritePost({getAllPost}) {

  const {user} = useUser();

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [category, setCategory] = useState('movies');

  const {toast} = useToast();

  const {userDetail,setUserDetail} = useContext(UserDetailContext);

  const onCreatePost=()=>{
    const data = {
      postTitle:title,
      postRating:rating,
      postCategory:category,
      postText:review,
      createdAt:Date.now().toString(),
      createdBy:userDetail._id
    }

    GlobalApi.createPost(data).then(resp=>{
      console.log(resp);
      //Si resetta il form dopo la pubblicazione
      setCategory('movies');
      setTitle('');
      setRating(1);
      setReview('');

      if (resp)
      {
        getAllPost()
        //Toast Message di successo nel postare
        toast({
          title: "Fantastico!",
          description: "La tua recensione è stata pubblicata con successo.",
          variant: "success" //Color green
        })
      }
    },(error)=>{
      
      //Toast Message di fallimento nel postare
      toast({
        title: "Oops!",
        description: "C'è stato un errore lato server.",
        variant: "destructive" //Color red
      })
    })
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Title:', title);
    console.log('Rating:', rating);
    console.log('Review:', review);
    console.log('Category:', category);
  };

  return (
    <div>
      <h2 className='p-1 text-[25px] font-medium text-gray-800 max-w-custom mx-auto'>Ciao {user.username}!</h2>  
      <h2 className='p-1 text-gray-400 max-w-custom mx-auto'>Condividi i tuoi pensieri sul tuo intrattenimento preferito con la nostra Community</h2> 
      <div className='p-6 border rounded-lg mt-5 bg-blue-500 max-w-custom mx-auto'>
        <h2 className='text-[20px] text-white'>Crea Recensione</h2>
        <div>
          <div className='mx-auto mt-5 p-2'>
            <form onSubmit={handleSubmit} className="flex flex-wrap">
              <div className="flex flex-col w-full lg:w-1/4 lg:pr-4 mb-4 lg:mb-0">
                <label htmlFor="category" className="block text-white">Categoria</label>
                <select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                className="mt-1 p-2.5 border border-gray-300 rounded-md w-full bg-white"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}
                required >
                <option value="movies">Film</option>
                <option value="tv_series">Serie TV</option>
                <option value="games">Videogiochi</option>
                <option value="music">Musica</option>
                <option value="books">Libri</option>
                </select>
              </div>
              <div className="w-1/2 flex flex-col lg:w-1/2 lg:px-2 mb-4 lg:mb-0">
                <label htmlFor="title" className="block text-white">Titolo</label>
                <input
                placeholder = "Aggiungi Titolo..."
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full placeholder:text-[14px]"
                required/>
              </div>
              <div className="flex flex-col w-full lg:w-1/4 lg:pl-4 mb-4 lg:mb-0">
                <label htmlFor="rating" className="block text-white">Voto (1-10)</label>
                <input
                type="number"
                id="rating"
                value={rating}
                onChange={handleRatingChange}
                min="1"
                max="10"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required/>
              </div>
            </form>
          </div>
        </div>
          <div className='p-4 bg-white rounded-lg mt-2 border border-gray-200'>
          <label htmlFor="review" className="block text-gray-700"></label>
            <textarea placeholder = "Aggiungi Recensione..."
            id="review"
            value={review}
            onChange={handleReviewChange}
            className='outline-none w-full resize-none border-0 p-0 mt-1'
            style={{
            fontSize: '15px',
            color: '#333',
            lineHeight: '1.5',
            minHeight: '100px'}}
            required
            ></textarea>
          </div>
          <div className='mt-2 flex justify-between'>
            <div className='flex gap-5'>
            </div>
            <Button className='text-blue-500 gap-2 bg-white rounded-xl hover:bg-blue-500 hover:text-white hover:border-2 active:bg-white active:text-blue-500 transition duration-150 ease-in-out mt-3'
            //Publish disabilitato se l'utente non mette nulla dentro il create review
            disabled={!review?.length || !title?.length}
            onClick={()=>onCreatePost()}
            >Pubblica</Button>
          </div>
      </div>
    </div>
  )
}

export default WritePost