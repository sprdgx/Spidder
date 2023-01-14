import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import Widgets from '../components/Widgets'

interface Props {
  tweets: Tweet []
}

const Home = ({tweets}: Props) => {  
  
 
  
  return (
    <div className="max-h-screen mx-auto overflow-hidden lg:max-w-6xl ">
      <Head>

        <title>Spidder </title> 
        <link rel="icon" href="https://raw.githubusercontent.com/sprdgx/Photos/main/SPIDDER.png" />
      </Head>
      <main className='grid grid-cols-9 lg:grid-cols-9 bg-red-400 '>

        <Sidebar />

        {/* Feed */}
        <Feed tweets = {tweets} />


        {/* Widgets */} 
        <Widgets />

      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const tweets = await fetchTweets();

  return {
    props: { 
      tweets,

    }
  }
}
