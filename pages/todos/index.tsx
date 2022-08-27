import React, { useContext } from 'react'
import Tabs from '../../components/Tabs'
import { TodoContext } from '../../context/context'

const Todos = () => {
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

  const {todos} = useContext(TodoContext) as TodoContextType


  return (
    <div>
      <div className='space-y-5'>
          {todos.map((todo:ITodo) => (
            <Tabs key={todo.id} todo={todo}/>
          ))}
      </div>
    </div>
  )
}

export default Todos