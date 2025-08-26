import { useState } from 'react'
import TodoApp from './components/TodoApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <TodoApp />
    </div>
  )
}

export default App
