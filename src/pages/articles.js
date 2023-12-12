import React from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import imagination_article_img from '../../public/images/articles/imagination_article_img.png'
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedArticle = ({ title, time, summary, link}) => {
  return(
    <li>
      <div className='border border-black p-2 rounded-xl border-b-gray-400'>
        <Link href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg border-black '>
        {/* <Image src={img} alt={title} className='w-25 h-15' /> */}
        </Link>
        <Link href={link} target='_blank'>
          <h2 className='capitalize text-2xl font-bold my-2 flex'>
            {title}
          </h2>

        </Link> 
        <p className=' mb text-lg'>{summary}</p>
        <span className='text-pink-700 font-semibold'>{time}</span>
     </div>
     </li>

  )
}
const articles = () => {
  return (
    <>
    <Head>
  <title>Yahya Faraz | Articles Page</title>
  <meta name= 'description' content='any description '/>
     </Head>
     <TransitionEffect/>
     <main>
     <Layout>
          <AnimatedText text={'Words creates Worlds'} className='mb-16 justify-center items-center text-center font-bold text-5xl lg:text-3xl '/>
          <ul className='grid grid-cols-1 gap-16 '>
        <FeaturedArticle 
         title={'The Art of Imagination'}
          time={'Dec 20, 2022'}
       summary={'Every wonder was once an imagination.'}
            link={'https://medium.com/@yahyafaraz1234/the-art-of-imagination-6f1d6efcea17'}
            />           
          </ul>
     </Layout>
     </main>
      
    </>
  )
}

export default articles