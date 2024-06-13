import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import moment from "moment";
import { Flag, MoreVertical, Trash } from 'lucide-react';
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from '@/components/ui/button';
import GlobalApi from '@/app/_utils/GlobalApi';
import { useToast } from '@/components/ui/use-toast';

function CommentList({ commentList }) {
  const { userDetail } = useContext(UserDetailContext);
  const { toast } = useToast();
  const [commentListData, setCommentListData] = useState([]);

  useEffect(() => {
    // Sort comments by createdAt in descending order (most recent first) and update state
    setCommentListData([...commentList].sort((a, b) => b.createdAt - a.createdAt));
  }, [commentList]);

  const onDeleteComment = (comment) => {
    const result = commentListData.filter(item => item._id !== comment._id);
    setCommentListData(result);
    GlobalApi.deleteComment(comment._id).then(resp => {
      if (resp) {
        toast({
          title: 'Eliminato!',
          description: 'Commento eliminato con successo.',
          variant: "success" //Color green
        });
      }
    });
  };

  return (
    <div>
      {commentListData.map((item, index) => (
        <div key={index} className='flex items-start gap-3 m-5'>
          <Image 
            src={item?.createdBy?.image} 
            alt='user-image'
            width={30}
            height={30}
            className='rounded'
          />
          <div className='flex flex-col w-full'>
            <h2 className='-mt-1 mb-2 text-gray-600'>{item.createdBy.name}</h2>
            <div className='border-gray-200 border-2 rounded-lg p-3 -mt-1 flex justify-between items-center text-gray-600'>
              <span>{item.commentText}</span>
              {item.createdBy?._id === userDetail?._id &&
                <Popover>
                  <PopoverTrigger>
                    <MoreVertical className='h-4 w-4 cursor-pointer' />
                  </PopoverTrigger>
                  <PopoverContent className ="w-full h-full">
                    <Button className="flex gap-2 mb-2 border-gray-200 border-2 rounded-lg text-gray-600" variant="outline" onClick={() => onDeleteComment(item)}>
                      <div className='flex gap-2 text-[12px]'><Trash className='h-4 w-4' /> Elimina</div>
                    </Button>
                    <Button className="flex gap-2 border-gray-200 border-2 rounded-lg text-gray-600" variant="outline">
                      <div className='flex gap-2 text-[12px]'><Flag className='h-4 w-4' /> Segnala</div>
                    </Button>
                  </PopoverContent>
                </Popover>
              }
            </div>
            <h2 className='text-[11px] text-gray-600 text-right mr-4 mt-1'>{moment(Number(item.createdAt)).format("DD MMM | hh:mm A")}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
