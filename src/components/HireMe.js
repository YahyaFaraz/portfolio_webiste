import React from 'react';
import { CircularText } from './icons';
import Link from 'next/link';






const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
      md:right-8 md:left-auto md:top-0 md:bottom-auto'>
        <div className='w-36 h-36 md:w-24 md:h-24 lg:w-32 lg:h-32 items-center justify-center relative'>
          <CircularText className='fill-black animate-spin-slow  absolute inset-0 w-full h-full '/>
          {/* Updated Link usage */}
          <Link href='mailto:yahyafara1234@gmail.com'
            className=' flex items-center justify-center absolute left-1/2  top-1/2
              -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border-solid border-black
              w-16 h-16 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-full hover:text-dark hover:bg-white
              font-semibold text-sm md:text-xs lg:text-sm border  border-black z-10' >
                Hire Me
          </Link>
        </div>
    </div>
  )
}

export default HireMe;
