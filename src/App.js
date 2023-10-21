import React from 'react'
import { Route, Routes } from 'react-router'
import MultiDropDown from './Component/Elements/MultiDropDown'
import Form from './Component/Form'
import GridForm from './Component/GridForm'
import Navbar from './Component/NavBar'
import TabsBar from './Component/Tabs'
import FormConf from './Component/FormConf'
const App = () => {
  return (
    <div>
{/* <MultiDropDown/> */}
      <Navbar/>
      {/* <TabsBar/> */}
      <Routes>
        <Route path='/forms' element={<Form/>}/>
        <Route path ='/GridForm' element={<GridForm/>}/>
        <Route path='/confform' element={<FormConf/>}/>
      </Routes>
    </div>
  )
}

export default App
