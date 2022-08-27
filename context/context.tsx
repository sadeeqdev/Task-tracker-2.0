import React, { createContext, ReactNode, useState } from 'react';

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
  filterTodos: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);


const TodoProvider = ({ children } : {children: React.ReactNode}) => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      name: 'post 1',
      description: 'this is a description',
      date: '2020-12-24',
    },
    {
      id: 2,
      name: 'post 2',
      description: 'this is a description',
      date: '2020-30-12',
    },
  ]);

  const addTodo = (todo:ITodo) => {
     const newTodo: ITodo = {
      id: Math.random(),
      name: todo.name,
      description: todo.description,
      date: todo.date,
    }

    setTodos([...todos, newTodo])
  }

  const filterTodos = (id:number) => {
    return todos.find((todo:ITodo) => todo.id === id)
  }

  const deleteTodo = (id:number) => {
    setTodos(todos.filter(item => item.id !== id))
  }

   return <TodoContext.Provider value={{ todos, addTodo, deleteTodo, filterTodos }}>{children}</TodoContext.Provider>;
};

export default TodoProvider