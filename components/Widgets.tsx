import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
function Widgets() {
  return (
    <div className='hidden col-span-2 px-2 bg-red-400 lg:inline'>
        {/* Search */}
        <div  className='flex items-center p-3 mt-2 space-x-2 bg-red-400 rounded-full '>
            <MagnifyingGlassIcon className='w-5 h-5 text-black' />
            <input type="text" placeholder='Search Spidder' className='flex-1 bg-transparent outline-none placeholder:text-black'/>
        </div>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Bitcoin"
          options={{height: 1000 }}
          
        />

    </div>
  )
}

export default Widgets