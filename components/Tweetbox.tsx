import React, { Dispatch, MouseEvent, SetStateAction, useRef, useState } from 'react'
import { CalendarIcon, FaceSmileIcon, MagnifyingGlassCircleIcon, MapPinIcon, CameraIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { Tweet, TweetBody } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'



interface Props {
  setTweets: Dispatch<SetStateAction<Tweet[]>>
}


function Tweetbox( {setTweets}: Props) {
  const [input, setInput] = useState<string>('')
  const [image, setImage] = useState<string>('')

  const imageInputRef = useRef<HTMLInputElement>(null)
  
  const { data:session } = useSession()
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false) 

  const addImagetoTweet = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      e.preventDefault();
      if (!imageInputRef.current?.value) return;
      setImage(imageInputRef.current.value)
      imageInputRef.current.value='';
      setImageUrlBoxIsOpen(false);
    }

    const postTweet = async ()  => {
       const tweetInfo: TweetBody = {
        text: input,
        username: session?.user?.name || 'Unknown User',
        profileImg: session?.user?.image || 'https://links.papareact.com/gll',
        image: image,
       }

       const result = await fetch(`/api/addTweet`, {
        body:JSON.stringify(tweetInfo),
        method: 'POST',
       })

       const json = await result.json(); 
       const newTweets = await fetchTweets();
       setTweets(newTweets)
       return json 
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        postTweet()
        setInput('')
        setImage('')
        setImageUrlBoxIsOpen(false)

    }

  return (
    <div className='flex p-5 space-x-2'>
        <img className='object-cover mt-4 rounded-full h-14 w-14' src= {session?.user?.image || "https://links.papareact.com/gll"} alt="" />
        <div className='flex items-center flex-1 '>

          <form className='flex flex-col flex-1 lg:pl-2'>
            <input value={input} onChange={ (e)=> setInput (e.target.value)} type="text" placeholder=" What's Happening?" className='w-full h-24 text-xl bg-red-300 rounded-lg outline-none placeholder:text-xl placeholder:text-black'/>

            <div className='flex items-center '>

              <div className='flex flex-1 text-bold space-x-1 text-black '>
                <CameraIcon onClick={() => setImageUrlBoxIsOpen ( !imageUrlBoxIsOpen )} className='hidden lg:inline w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150' />
                <MagnifyingGlassCircleIcon className=' hidden lg:inline w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150 ' />
                <FaceSmileIcon className='hidden w-5 h-5 transition-transform duration-150 ease-out cursor-pointer lg:inline hover:scale-150 ' />
                <CalendarIcon className='hidden lg:inline w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150 ' />
                <MapPinIcon className='hidden lg:inline w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150 ' /> 
                
              </div>

              <button onClick={handleSubmit} disabled={!input || !session } className='px-5 py-2 mt-2 font-bold text-black rounded-full disabled:opacity-40 bg-red-300 '>
                  Tweet 
              </button>

            </div>
            {imageUrlBoxIsOpen && (
              <form className='flex px-4 py-2 mt-5 rounded-lg bg-red-300'> 
                <input ref={ imageInputRef } className='flex-1 p-2 text-black bg-transparent outline-none placeholder:text-black ' type="text" placeholder='Enter Image URL...' />
                <button type='submit' onClick={addImagetoTweet} className='font-bold text-black'>Add Image</button>
              </form>
            )}

            {image && (
              <img src={image} alt="" className='object-contain w-full h-40 mt-10 shadow-lg rounded-xl'/>
            ) }
          </form>
        </div>
    </div>
  )
}

export default Tweetbox