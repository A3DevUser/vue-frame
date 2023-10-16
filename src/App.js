import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainObject } from './Component/Elements/commonFun'
import Form from './Component/Form'
import ModalButton from './Component/ModalButton'
import ModalCompo from './Component/ModalCompo'
import SectionNav from './Component/SectionNav'

const App = () => {

  const dispatch = useDispatch()
  const [show,setshow] = useState(false)

  const handleFunc = () =>{
    setshow(!show)
  }

  useEffect(()=>{
    console.log('show',show)
  },[])


  return (
    <div>
      {
        MainObject.modalButton('Open Action',handleFunc)
        
      }
      {
        MainObject.modalpop('Modal Title',<Form/>,show,handleFunc)
      }
      {/* <ModalButton title={'click me'} funcName={handleFunc}/>
      <ModalCompo bodyDetails={'this is mmy body'} title={'This is title'} show={show} showFunc={handleFunc} /> */}
      {/* <button onClick={()=>{setshow(true)}}>open Modal</button> */}
      {
        // MainObject.modalpop(show,setshow,<Form/>)
      }
      {/* <SectionNav/> */}
    </div>
  )
}

export default App
