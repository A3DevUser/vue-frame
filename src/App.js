import './App.css';
import { MainObject } from './Component/MainObject';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{MainObject.alert("Hiii...!")}}>Save</button>
    </div>
  );
}

export default App;
