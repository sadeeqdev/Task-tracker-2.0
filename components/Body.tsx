import React from 'react'
import AddButton from './AddButton'
import Header from './Header'
import Tabs from './Tabs'

const TodoBody = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <div className='p-5 grid grid-cols-1 gap-y-5 mt-20'>
        {children}
      </div>
    </>

  )
}

export default TodoBody