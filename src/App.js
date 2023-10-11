import { useState } from 'react';
import './App.css';
import { MainObject } from './Component/commonFun';
// import { Button } from 'react-bootstrap';
// import Modalpop from './Component/Modalpop';
// import SampleComp from './SampleComp';
import Table from './Component/Table';
// import { MainObject } from './Component/commonFun';
// import Table from './Component/Table';
// import { MainObject } from './Component/commonFun';

function App() {
  let obj = [{name: "Audit",value: "Pass"},
             {name: "Audit",value: "Fail"},
             {name: "Audit",value: "NA"}]

  // let accordionobj = [{secid: "sec01",sechead: "First Section", secbody: "Hello Word...!!",isOpen : true},
  // {secid: "sec02",sechead: "Second Section", secbody: "Hello New Word...!!", isOpen : false}]

  const [modalShow, setModalShow] = useState(false);
  const funaction = () => setModalShow(true);
             return (
    <div className="App">
      {/* <button onClick={()=>{MainObject.alert("Hiii...!")}}>Say Hi</button>
      {
        MainObject.button("m-3","Submit","100px","30px")
      }
      {
        MainObject.input("m-3","text","100px","30px")
      }

      {
        MainObject.accordion(accordionobj)
      }
      {
        MainObject.loader()
      } */}
      
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>Save</Button> */}

      {
        MainObject.button("btn btn-primary btn-sm","90px","30px","Save",funaction)
      }
      {
        MainObject.modalpop(modalShow, setModalShow,<Table/>,"Modal heading1")
      }
            {
        MainObject.dropdown(obj)
      }

      {/* <Modalpop show={modalShow} setModalShow={setModalShow} bodyDetails={<Table/>} titleDetails="Modal heading1"/> */}
    
    </div>
  );
}

export default App;
