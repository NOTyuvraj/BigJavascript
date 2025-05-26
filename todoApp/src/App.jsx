import React from 'react'
import{ TodoList } from "./components/TodoList"
import './App.css'

export const App = () => {
  // const [list , setList] = useState()
  return (
    <div className='App'>
      <TodoList />
    </div>
  )
}
