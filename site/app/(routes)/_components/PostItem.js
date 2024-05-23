//PostItem.js
import React, { useContext, useState } from "react";
import Image from "next/image";
import moment from "moment";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CommentList from "./CommentList";

//Interfaccia Recensioni

function PostItem({ post, updatePostList }) {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  const { user } = useUser();

  const { toast } = useToast();

  const [userInputComment, setUserInputComment] = useState();

  const checkIsUserLike = (postLikes) => {
    return postLikes.find((item) => item?._id == userDetail?._id);
  };

  const onLikeClick = (isLike, postId) => {
    const data = {
      userId: userDetail?._id,
      isLike: isLike,
    };
    GlobalApi.onPostLike(postId, data).then((resp) => {
      console.log(resp);
      updatePostList();
    });
  };

  const addComment = (postId) => {
    const data = {
      commentText: userInputComment,
      createdBy: userDetail._id,
      post: postId,
      createdAt: Date.now().toString(),
    };
    GlobalApi.addComment(data).then((resp) => {
      if (resp) {
        toast({
          title: "Fantastico!",
          description: "Il tuo commento e' stato pubblicato con successo.",
          variant: "success", //Color green
        });
        updatePostList();
      }
    });
    setUserInputComment("");
  };

  return (
    <div className="p-5 border-gray-200 border-2 rounded-lg my-5 max-w-custom mx-auto">
      <div className="flex gap-3 items-center p-3">
        <Image
          src={post.createdBy.image}
          alt="user-image"
          width={35}
          height={35}
          className="rounded"
        ></Image>
        <div>
          <h2>{post.createdBy.name}</h2>
          <h2 className="text-[12px] text-gray-500">
            {moment(Number(post.createdAt)).format("DD MMM | hh:mm A")}
          </h2>
        </div>
        <div className="items-center mr-auto ml-auto my-1">
          <h2 className="text-[14px]">{post.postTitle}</h2>
          <h2 className="text-blue-500 text-[12px] hover:cursor-pointer ml-0">
            {post.postCategory}
          </h2>
        </div>
        <div>
          <h2 className="text-[14px] mr-2 -mt-4">Voto: {post.postRating}/10</h2>
        </div>
      </div>
      <div className="p-4 rounded-lg mt-1">
        <h2>{post.postText}</h2>
      </div>
      {/*Likes and Comments*/}
      <div className="flex gap-8 my-6 mb-8 justify-between">
        <div className="flex gap-3 items-center text-[15px] ml-3">
          {!checkIsUserLike(post?.likes) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => onLikeClick(true, post._id)}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={() => onLikeClick(false, post._id)}
              className="w-6 h-6 text-pink-600 hover:cursor-pointer"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          )}
          <h2>{post?.likes?.length} Likes</h2>
        </div>
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="flex gap-3 items-center text-[15px] mr-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              <h2>{post?.comments?.length} Commenti</h2>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-h-[80vh] overflow-y-auto p-6">
            <AlertDialogHeader className="sticky top-0 bg-white z-10">
              <AlertDialogTitle className="flex justify-between items-center">
                Commenti <AlertDialogCancel className="bg-red-500 text-white border-white border-2 rounded-xl hover:bg-white hover:text-red-500 hover:border-red-500">X</AlertDialogCancel>
              </AlertDialogTitle>
              <AlertDialogDescription className="max-h-[60vh] overflow-y-auto">
                <CommentList commentList = {post?.comments}/>
              </AlertDialogDescription>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
        <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-ellipsis"
          className="hover:cursor-pointer text-gray-700 mr-6"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </div>
      </div>
      
      {/*Comment Section*/}
      {user && (
        <div className="mt-5">
          <hr className="mb-5"></hr>
          <div className="flex gap-4 items-center">
            <Image
              src={user?.imageUrl}
              width={30}
              height={30}
              alt="user-image"
              className="rounded"
            />
            <input
              type="text"
              value={userInputComment}
              onChange={(e) => setUserInputComment(e.target.value)}
              placeholder="Scrivi un commento..."
              className="w-full p-2 rounded-xl px-5 outline-none resize-none border-gray-200 border-2"
              style={{
                fontSize: "15px",
                color: "#333",
                overflow: "auto",
                height: "40px",
              }}
            />
            <Button
              disabled={!userInputComment}
              onClick={() => addComment(post._id)}
              className="bg-blue-500 rounded-xl h-9 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 hover:rounded-xl active:text-blue-500 transition duration-150 ease-in-out"
            >
              Commenta
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostItem;
