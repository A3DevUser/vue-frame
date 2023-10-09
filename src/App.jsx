import './App.css';
import { commonFunc, inputFunc, MainObject } from './Component/MainObject';
import { details,btnDetails } from './Elements/Details';
import {Accordion } from 'react-bootstrap'

function App() {

  
  let outputObj = {};
  const  doSomething = (e,details) =>{
    if(details.category == 'input'){
      let val = e.target.value;
      let id = e.target.id;
      Object.assign(outputObj,{[id]:val})
    }else if(details.category == 'button'){
      if(details.type == 'save'){
        console.log('save')
      }else if(details.type == 'submit'){
        console.log('submit')
      }
    }

  }

  return (
    <div className="App">
      {
      details.map((res,i)=>{
        return commonFunc.input(res,doSomething)
      })
    }
    {
      btnDetails.map((res,i)=>{
        return commonFunc.button(res,doSomething)
      })
    }
    </div>
  );
}

export default App;
