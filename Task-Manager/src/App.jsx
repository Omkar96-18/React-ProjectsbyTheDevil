import { useState } from 'react'
import Header from '../../Task-Manager/src/components/Header';
import TaskForm from '../../Task-Manager/src/components/TaskForm';
import TaskList from '../../Task-Manager/src/components/TaskList';
import './App.css'
import { TaskProvider } from '../../Task-Manager/src/context/TaskContext'

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-800">
        <Header />
        <TaskForm/>
        <TaskList/>
      </div>
    </TaskProvider>
  )
}

export default App
