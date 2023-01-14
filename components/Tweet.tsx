import React, { useEffect, useState } from 'react'
import {Comment, CommentBody, Tweet} from '../typings'
import TimeAgo from 'react-timeago'
import {
    ArrowsRightLeftIcon,
    HeartIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    ArrowUpTrayIcon,
} from '@heroicons/react/24/outline'
import { fetchComments } from '../utils/fetchComments'
import { useSession } from 'next-auth/react'


interface Props {
    tweet: Tweet
}

function Tweet( { tweet }: Props) {
     const [comments, setComments] = useState<Comment[]>([])

     const [commentBoxVisible, setCommentBoxVisible] = useState<boolean>(false)

     const [input, setInput] = useState<string>('')

     const {data: session} =useSession()


     const refreshComments = async () => {
        const comments: Comment[] = await fetchComments(tweet._id)
        setComments(comments);
     }
     useEffect (() => { 
      refreshComments();
     },[])
      
     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()

    // Comment logic
    const comment: CommentBody = {
      comment: input,
      tweetId: tweet._id,
      username: session?.user?.name || 'Unknown User',
      profileImg: session?.user?.image || 'https://links.papareact.com/gll',
    }

    const result = await fetch(`/api/addComment`, {
      body: JSON.stringify(comment),
      method: 'POST',
    })


    setInput('')
    setCommentBoxVisible(false)
    refreshComments()
}

  return (
    <div key={tweet._id} className='flex flex-col p-5 space-x-3 border-gray-100 border-y'>
        <div className='flex space-x-3'>
            <img className='object-cover w-10 h-10 rounded-full' src={tweet.profileImg} alt="" />
            
            <div>
                <div className= 'flex items-center space-x-1 ' >
                    <p className= 'mr-1 font-bold' > {tweet.username}</p>
                    <p className= 'hidden text-sm text-black sm:inline' > @{tweet.username.replace(/\s+/g,'').toLowerCase()}.</p>

                    <TimeAgo
                    className='text-sm text-gray-700'
                     date={tweet._createdAt}
                     />
                </div>
                <p className='pt-1'>{tweet.text }</p>
                {tweet.image && ( 
                    <img className='object-cover m-5 mb-1 ml-0 rounded-lg shadow-sm max-h-60' src={tweet.image} alt="" />
                )}
            </div>
        </div>

        <div className='flex justify-between mt-5 '>
            
            <div onClick={() => session && setCommentBoxVisible(!commentBoxVisible) } className='flex items-center space-x-3 text-black cursor-pointer '>
                <ChatBubbleOvalLeftEllipsisIcon className='w-5 h-5' />
                <p>{comments.length}</p>
            </div>
            
            <div className='flex items-center space-x-3 text-black cursor-pointer ' >
                <HeartIcon className='w-5 h-5' />
            </div>

            <div className='flex items-center space-x-3 text-black cursor-pointer ' >
                <ArrowUpTrayIcon className='w-5 h-5' />
            </div>
        </div>



        {/* Comment Box Logic */}


        {commentBoxVisible && (
            <form onSubmit={handleSubmit} className='flex mt-3 space-x-3'>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Write a comment...' className='flex-1 p-2 bg-red-300 rounded-lg outline-none placeholder:text-black'/>
                <button disabled={!input}  type='submit' className='text-black font-bold disabled:text-gray-700' >Post</button>
            </form>
        )}

        {comments?.length > 0 && (
            <div className='py-5 my-2 mt-5 space-y-3 overflow-y-scroll border-t border-gray-100 max-h-44 scrollbar-hide'>
                {comments.map((comment) => (
                    <div key={comment._id} className='relative flex space-x-2' >
                        <hr className='absolute h-8 left-5 top-10 border-x border-black/30 ' />
                        <img src={comment.profileImg} className="object-cover mt-2 rounded-full h-7 w-7" alt="" />
                         <div>
                            <div className='flex space-x-1 items-centers '>
                                <p className='mr-1 text-sm font-bold'>{comment.username}</p>
                                <p className='hidden text-sm text-black '> @{tweet.username.replace(/\s+/g,'').toLowerCase()}.</p>
                                <TimeAgo
                                className='text-sm text-gray-700'
                                date={comment._createdAt}
                            />
                            </div>
                            <p>{comment.comment}</p>
                         </div>
                    </div>
                ))}
            </div>
        )}

    </div>
  )
}

export default Tweet