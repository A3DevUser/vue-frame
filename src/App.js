import React from 'react'
import { Route, Routes } from 'react-router'
import Form from './Component/Form'
import GridForm from './Component/GridForm'
import Navbar from './Component/NavBar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/forms' element={<Form/>}/>
        <Route path ='/GridForm' element={<GridForm/>}/>
      </Routes>
    </div>
  )
}

export default App
