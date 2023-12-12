import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { useRouter } from 'next/router';
import { TwitterIcon, LinkedinIcon } from './icons';
import { motion } from 'framer-motion';
import { useState } from 'react';

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <div className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] inline-block w-full bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath === href ? 'w-full' : 'w-0'
          } `}
        >
          &nbsp;
        </span>
      </div>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };

  return (
    <button onClick={handleClick} className={`${className} relative group `}>
      {title}
      <span
        className={`h-[1px] inline-block w-full bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        } `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 relative font-medium flex items-center justify-between ">
      <button
        className="flex flex-col   my-2 "
        onClick={handleClick}
      >
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out -translate-y-0.5 ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="mr-4 text-lg flex">
          <CustomLink href="/" title="Home" className={'mx-4'} />
          <CustomLink href="/about" title="About" className={'mx-4'} />
          <CustomLink href="/articles" title="Articles" className={'mx-4'} />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/YahyaFaraz1234"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yahya-faraz-8b6997231/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <LinkedinIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen ? 
        <motion.div
        initial={{scale:0, x:"-50%",y:"-50%"}} 
        animate={{scale:1, opacity:1}}
        className="min-w-[40vw] flex flex-col justify-between 
        items-center fixed top-1/2 left-1/2 -translate-x-1/2
        z-30 bg-black text-white rounded-lg backdrop-blur-lg py-32 bg-opacity-70 ">
          <nav className="mr-4 text-lg flex flex-col items-center justify-center ">
            <CustomLink href="/" title="Home" className={'mb-2' } />
            <CustomLink href="/about" title="About" className={'mb-2'} />
            <CustomLink href="/articles" title="Articles" className={'mb-2'} />
          </nav>
          <nav className=" mt-2 sm:mx-1
          flex items-center justify-center flex-wrap">
            <motion.a
              href="https://twitter.com/YahyaFaraz1234"
              target="_blank"
              whileHover={{ y: -2 }}
              className="w-6 mr-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yahya-faraz-8b6997231/"
              target="_blank"
              whileHover={{ y: -2 }}
              className="w-6 mr-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <LinkedinIcon />
            </motion.a>
          </nav>
        </motion.div>
      : null}

      <div className="absolute left-[50%] top-2 transform -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
