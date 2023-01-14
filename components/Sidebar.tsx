import React from 'react' 
import {
  BellIcon,
  UserIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  HashtagIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'
import {signIn,signOut,useSession} from 'next-auth/react'





function Sidebar() {
  const { data: session } = useSession()
  return <div className='flex flex-col items-center col-span-2 px-4 md:items-start bg-red-400'> 
      <img className='m-4 w-11 h-11' src="https://raw.githubusercontent.com/sprdgx/Photos/main/SPIDDER.png" alt="" />
      <SidebarRow Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={HashtagIcon} title='Explore' />
      <SidebarRow Icon={BellIcon} title='Notifications' />
      <SidebarRow Icon={ChatBubbleBottomCenterIcon} title='Messages' />
      <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
      <SidebarRow onClick={ session ? signOut: signIn} Icon={UserIcon} title={session ? 'Sign Out': 'Sign In'} />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title='More' />

    </div>

}

export default Sidebar