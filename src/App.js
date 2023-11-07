import { MainObject } from './Component/Elements/commonFun'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import MultiDropDown from './Component/Elements/MultiDropDown'
import Form from './Component/Form'
import GridForm from './Component/GridForm'
import Navbar from './Component/NavBar'
import TabsBar from './Component/Tabs'
import FormConf from './Component/FormConf'
// import LogInPage from './Component/LogInDirectory/LogInPage'
const App = () => {

  const [show,setshow] = useState(false)

  const handleFunc = ()=>{
    setshow(!show)
  }

  eval(
    `window.handleClick = ()=>{
      alert('hello world')
    }`
  )

  return (
    <div>

      {/* {

        MainObject.modalButton('title',handleFunc)
      }{
        MainObject.modalpop('model title',<Form/>,show,handleFunc)
      } */}
{/* <MultiDropDown/> */}
{/* <button className='btn btn-primary' onClick={()=>{eval('handleClick()')}}>Click me</button> */}
      <Navbar/>
      {/* <TabsBar/> */}
      <Routes>
        {/* <Route path='/' element={<LogInPage/>}/> */}
        <Route path='/forms' element={<Form/>}/>
        <Route path ='/GridForm' element={<GridForm/>}/>
        <Route path='/confform' element={<FormConf/>}/>
      // </Routes>
    </div>
  )
}

export default App
