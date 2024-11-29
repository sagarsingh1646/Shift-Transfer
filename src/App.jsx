import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from './components/TaskCard'
import DashBoard from './pages/DashBoard'

function App() {
  return (
    <>
      <div className='font-bold'>World</div>
      <DashBoard />
    </>
  )
}

export default App
