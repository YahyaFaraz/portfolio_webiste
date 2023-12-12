import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block p-32  bg-white ${className} xl:p-16 mb:p-12 sm:p-8`}>
          {children}
    </div>
  )
}

export default Layout