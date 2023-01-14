import React, { useState } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import Tweetbox from './Tweetbox'
import { Tweet } from '../typings'
import TweetComponent from '../components/Tweet'
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
   tweets : Tweet[]
}



function Feed( {tweets: tweetsProp }: Props ) {

  const [tweets ,setTweets] = useState<Tweet[]>(tweetsProp)

  const handleRefresh = async () => {
    

    const tweets = await fetchTweets () 
    setTweets(tweets)

  }

  return (
    <div className='max-h-screen col-span-7 overflow-scroll lg:col-span-5 scrollbar-hide border-x'>
        <div className='flex items-center justify-between bg-red-400'>
            <h1 className='p-5 pb-0 text-xl font-bold '>Home</h1>
            <h1 className='p-5 pb-0 text-2xl font-bold'>SPIDDER</h1>
            <ArrowPathIcon onClick={handleRefresh} className='w-7 h-7 mt-5 mr-5 transition-all duration-500 ease-out cursor-pointer text-black hover:rotate-180 active:scale-125 ' />
        </div>

        {/* Tweetbox*/}
        <div className='bg-red-400'>
            <Tweetbox setTweets={setTweets} />
        </div>
      {/* FEED */}
        <div className='bg-red-400' >
            {tweets.map(tweet => (
              < TweetComponent key={tweet._id} tweet={tweet} />
            ))}
        </div>

    </div>
  )
}

export default Feed