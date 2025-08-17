import React from 'react'
import Home from './Components/Home'
import Instructions from './Components/Instructions'
import { Route, Routes } from 'react-router-dom'
import Search from './Components/Search'

const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/instructions' element={<Instructions />}/>
    <Route path='/search' element={<Search/>}/>
    </Routes>
     
    
    </>
  )
}

export default App
