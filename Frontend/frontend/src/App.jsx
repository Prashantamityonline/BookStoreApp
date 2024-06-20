import React from 'react'
import Home from './Home/Home'
import { Routes, Route } from 'react-router-dom'
import Course from './Components/Course'


const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course" element={<Course />} />
   </Routes>
  )
}

export default App