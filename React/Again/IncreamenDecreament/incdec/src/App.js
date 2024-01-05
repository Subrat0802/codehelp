
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Increament And Decreament</h1>
      <div>
        <button onClick={() => setCount(count+1)}>+</button>
        <div>{count}</div>
        <button onClick={() => setCount(count-1)}>-</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App;
