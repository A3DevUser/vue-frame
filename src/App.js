import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import { MainObject } from './Component/commonFun';

function App() {
  
  const [btnVal, setbtnVal] = useState()
  const [loading,setloading] = useState(true)

  const funButton = () => {return console.log("Button Clicked")};

  // const btnInfo = {classNameVal: 'btn btn-primary btn-sm',
  //                  widthVal: '90px',
  //                  heightVal: '30px',
  //                  btnName: 'Save'}
  useEffect(() => {
      axios.get(`http://localhost:8080/VF/getBtn?formId=Form-101`)
      .then((btnData) => {setbtnVal(btnData.data);
       setloading(false)})
  },[])
  return <>
  {
    loading ? MainObject.loader() : 
    btnVal.map((res)=>{
      return MainObject.button(res,funButton)    
    })
  }
  </>
}

export default App;
