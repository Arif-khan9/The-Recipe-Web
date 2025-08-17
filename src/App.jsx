import React from 'react'
import Home from './Components/Home'
import Instructions from './Components/Instructions'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/instructions' element={<Instructions />}/>
    </Routes>
     
    
    </>
  )
}

export default App
