import React from 'react'

const AddButton:React.FC<{onClick?: React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
  return (
    <button onClick={onClick} className='rounded-full h-20 w-20 text-white bg-dark text-4xl justify-center items-center flex hover:bg-blue pb-1 absolute top 3xl:top-190 2xl:top-195 right-125'>
        +
    </button>
  )
}

export default AddButton