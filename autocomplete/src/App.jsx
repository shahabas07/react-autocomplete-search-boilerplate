import './App.css';
import { useEffect, useState } from "react";
import data from "./resources/countryData";

const filterData =(data, inputValue) => {
  if (inputValue=== "") {
    return [];
  }
  const filteredData = data.filter((item)=>
    item.name.toLowerCase().startsWith(inputValue.toLowerCase())
  );
  return filteredData.slice(0, 5);
};

function App(){
  const [currData, changeData] = useState([]);
  const [inputValue, changeValue] = useState("");
  useEffect(() => {
    const filteredData =filterData(data, inputValue);
    changeData(filteredData);
  }, [inputValue]);
  function change(e) {
    changeValue(e.target.value);
  }
  function returnn() {
    changeValue("");
    changeData([]);
  }
  function handleKeyDown(e) {
    if (e.key ==='Escape') {
      changeData([]);
    }
  }
  return (
    <div className="App">
    <div className='suggtn'>
        <input onChange={change}  onKeyDown={handleKeyDown} type="text"  id="box"  value={inputValue} placeholder="Type country name"></input>
        <div>
          {currData.map((e) => (
            <div > {e.name} </div>
          ))}
        </div>
    </div>
      <div>
        <button onClick={returnn}>clear</button>
      </div>
    </div>
  );
}
export default App;
