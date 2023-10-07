import './App.css';
import { MainObject } from './Component/commonFun';

function App() {
  let obj = [{name: "Audit",value: "Pass"},
             {name: "Audit",value: "Fail"},
             {name: "Audit",value: "NA"}]
  return (
    <div className="App">
      <button onClick={()=>{MainObject.alert("Hiii...!")}}>Save</button>
      {
        MainObject.button("m-3","Submit","100px","30px")
      }
      {
        MainObject.input("m-3","text","100px","30px")
      }
      {
        MainObject.dropdown(obj)
      }
    </div>
  );
}

export default App;
