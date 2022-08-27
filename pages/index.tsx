import Head from 'next/head'
import { useState } from 'react'
import AddButton from '../components/AddButton'
import AddTodo from '../components/AddTodo'
import MyLayout from '../Layouts/Layout'
import Todos from './todos'

const Home = () => {
  const [checkOpen, setCheckOpen] = useState(false)

  function handleOpen(){
    setCheckOpen(true)
  }

  function handleCheckClose (data:boolean){
    setCheckOpen(data)
  }

  return (
    <div>
      <Head>
        <title>Task Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AddTodo checkOpen={checkOpen} checkClose={handleCheckClose}/>
      <Todos/>
      <AddButton onClick={handleOpen}></AddButton>
     
    </div>
  )
}

Home.PageLayout = MyLayout;

export default Home
