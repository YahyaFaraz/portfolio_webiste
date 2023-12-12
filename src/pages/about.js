import AnimatedText from '@/components/AnimatedText'
import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '/public/images/profile/developer-pic-2.png'
import Skills from '@/components/Skills'
import TransitionEffect from '@/components/TransitionEffect';

const about = () => {
  return (
    <>
      <TransitionEffect />
      <Head>
        <title>Yahya Faraz</title>
        <meta
          name="description"
          content="This is the about page where I introduce myself and my work that I have been doing."
        />
        
      </Head>
      <main className='flex w-full flex-col items-center justify-center '>
        <Layout className='pt-16'>
          <AnimatedText
            text={' "Passion Fuels Purpose" '}
            className=' items-center justify-center text-5xl sm:text-2xl md:text-3xl mb-12 text-center'
          />
          <div className=' grid w-full grid-cols-8 sm:gap-8 gap-16 '>
            <div className='col-span-4 gap-y-12 flex flex-col items-start justify-start md:order-2  md:items-center md:justify-center md:col-span-8 '>
              <h2 className='mx-2 mb-3 text-3xl font-bold uppercase text-black/75'>
                Biography
              </h2>
              <p className='font-medium'>
                Hi, I Am Muhammad Yahya Faraz, A Web Developer, And An AI Python
                Expert With A Passion For Creating Beautiful, Functional, And
                User-Centered Digital Experiences.
              </p>
              <p className='font-medium'>
                - Coding isn't just lines of text for me; it's a canvas where I
                paint the future. Follow along as I strive to turn my passion
                into a powerful force for change.
              </p>
              <p className='font-medium'>
                - Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
        <div className='relative rounded-2xl border-2 border-solid border-white bg-  p-1
          col-span-4 md:order-1 md:col-span-8 '>
              <div className='absolute top-0  rounded-[2rem] -right-3 -z-10 w-[102%] h-[103%] ' />
              <Image
                src={profilePic}
                alt={'Profile Picture'}
                sizes=' ( max-width: 768px) 100vw ( max-width: 1200px) 50vw, 33vw'
                className='w-full h-auto rounded-2xl'
              />
            </div>
        <div className='col-span-8 md:order-3'>
            <Skills   />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default about

 