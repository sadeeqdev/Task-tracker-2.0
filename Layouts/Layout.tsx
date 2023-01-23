import React from 'react'
import Header from '../components/Header'
import TodoBody from '../components/Body'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='w-180 h-200 mx-auto border bg-midnight text-white mt-20 overflow-y-scroll' >
        <Header/>
         <TodoBody>
            {children}
        </TodoBody>
    </div>
  )
}

export default Layout