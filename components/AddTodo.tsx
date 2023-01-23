import React, { useContext, useEffect, useState } from 'react'
import {TodoContext} from '../context/context'

interface TodoProps {
  checkOpen: boolean,
  checkClose(data:boolean):void
}

interface ITodo {
  id: number;
  name: string;
  date: string;
  description: string;
}

type TodoContextType = {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: number) => void;
};


const AddTodo:React.FC<TodoProps> = (props: TodoProps) => {
  const [open, setOpen] = useState(true)
  const {addTodo } = useContext(TodoContext) as TodoContextType
  const [formData, setFormData] = React.useState<ITodo | {}>();

  const handleClose = () => {
    setOpen(false)
    props.checkClose(false)
  }

  useEffect(() =>{
    setOpen(props.checkOpen)
  },[props.checkOpen])

  const handleForm = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });

  };

  const handleSaveTodo = (formData: ITodo | any) => {
    addTodo(formData);
    props.checkClose(false)

  };

  return (
    <>
    {open ? (
    <div className='absolute h-screen w-screen flex justify-center items-center top-0 left-0 z-20 backdrop-filter backdrop-blur-sm bg-opacity-10'>
            <div className='h-100 w-120 bg-dark'>
              <div className='flex p-5 justify-between'>
                <p className='text-xl'>Add Todo</p>
                <button className='text-red hover:text-subRed' onClick={handleClose}>Close</button>
              </div>
              <div className='p-5 space-y-5 text-dark'>
                <input type="text" className='w-full h-10 p-1' placeholder='Todo Name' id="name" onChange={handleForm}/>
                <input type="text" className='w-full h-10 p-1' placeholder='Todo Date' id="date" onChange={handleForm}/>
                <textarea className='w-full h-20 p-1' placeholder='Description' id="description" onChange={handleForm}/>
                <input type="submit"  className='w-full h-10 transition-2 bg-subBlue hover:bg-midnight mt-8 text-white cursor-pointer' onClick={() => handleSaveTodo(formData)}/>
              </div>
            </div>
        </div>
    ) : ''}
    </>
  )
}

export default AddTodo