import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
          <footer className='w-full border-t-2 border-solid border-black font-medium text-lg sm:text-base'>
                    <Layout className='py-8 flex items-center justify-between   lg:py- lg:flex-col '>
                         <span>
                              {new Date().getFullYear()} &copy; All rights reserved
                         </span>
                         <div className='flex items-center lg:p-2  '>
                              Build with<span className= 'text-black text-2xl  '>&hearts;</span>
                               by&nbsp;<Link href={'https://www.upwork.com/freelancers/~0151184031e6ef0d52'} className=' underline underline-offset-2
                              '>
                                   Yahya Faraz</Link>
                         </div>
                         <div>
                              <Link href= 'https://www.linkedin.com/in/yahya-faraz-8b6997231/'>Say Hello</Link>
                         </div>
                    </Layout>

          </footer>

   )
}

export default Footer 