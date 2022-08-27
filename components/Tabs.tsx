import Link from 'next/link'
import React, { useContext } from 'react'
import {TodoContext} from '../context/context'


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

const Tabs = ({todo}:{todo:ITodo}) => {
  const {deleteTodo} = useContext(TodoContext) as TodoContextType

  function handleDelete(id:number){
    deleteTodo(id)
  }

  return (
    <div className='w-full bg-subBlue h-26 p-5 hover:bg-blue cursor-pointer rounded border border-dark'>
      <div className="flex justify-between">
        <p className='text-2xl'>{todo.name}</p>
        <Link href={`/todos/${todo.id}`}>
          <button className='hover:text-peach'>View</button>
        </Link>
      </div>
      <div className="flex justify-between">
        <p className='text-lg text-subWhite'>{todo.date}</p>
        <button className='text-red hover:text-subRed' onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Tabs