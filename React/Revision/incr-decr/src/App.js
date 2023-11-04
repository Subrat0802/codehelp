import { useState } from "react";
import "./App.css";

function App() {
  const [rs, setRs] = useState(0);
  const [orange,setOrange] = useState(0);
  function handleInc(){
    setRs(rs + 100);
   
  }

  function handleDec(){
    if(rs<=0){
      setRs(0);
   
    }
    else{
      setRs(rs-100)
      
    }
  }
  function handleIncOrg(){
   
    setOrange(orange+100);
  }

  function handleDecOrg(){
    if(orange<=0){
      setOrange(0);
    }
    else{
      setOrange(orange-100)
    }
  }
  return (
  <div>
    <div>
      <h1>Cart</h1>
    </div>

    <div>
      <h2>Apple {rs}</h2>
      <button onClick={handleInc}>Inc</button>

      <br/>
      <br/>
      
      <button onClick={handleDec}>Dec</button>
    </div>

    <div>
      <h2>orange {orange}</h2>
      <button onClick={handleIncOrg}>Inc</button>

      <br/>
      <br/>
      
      <button onClick={handleDecOrg}>Dec</button>
    </div>

    <h1>Total bill: {orange+rs}</h1>
  </div>
  );
}

export default App;
