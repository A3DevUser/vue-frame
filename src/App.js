import React, { useEffect, useState } from 'react'
import { MainObject } from './commonFun'
import axios from 'axios';

const App = () => {
    const [btnVal, setbtnVal] = useState()
    const funaction = () => {return "Button Clicked"};
    useEffect(() => {
        axios.get(`http://localhost:8080/VF/getBtn?formId=Form-101`)
        .then((res) => {setbtnVal(res.data)})
    },[])
  return (
    <>
    {
        btnVal.map((res) => {
            return <>{MainObject.button(res.classNameVal,res.widthVal.res.heightVal,res.btnName,funaction)}</>
        })
        
    }
    </>
  )
}

export default App