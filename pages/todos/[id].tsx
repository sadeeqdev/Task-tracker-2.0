import React, { useContext } from 'react'
import MyLayout from '../../Layouts/Layout'
import { useRouter } from 'next/router'
import {TodoContext} from '../../context/context'

interface ITodo {
  id: number;
  name: string;
  date: string;
  description: string;
}

type TodoContextType = {
  todos: ITodo[];
  filterTodos: (id: number) => ITodo;
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: number) => void;
};

const Todos = () => {
  const router = useRouter()
  const { id } = router.query 
  const {filterTodos} = useContext(TodoContext) as TodoContextType
  const Todo = filterTodos(parseFloat(id))

  return (
    <div className='text-white bg-subBlue w-full h-50 p-5 space-y-5'>
        <button className='text-white bg-dark rounded px-5 py-2 hover:bg-blue' onClick={() => router.back()}>Back</button>
        <p>{Todo.name}</p>
        <p>{Todo.date}</p>
        <p>{Todo.description}</p>
    </div>
  )
}

Todos.PageLayout = MyLayout;


export default Todos