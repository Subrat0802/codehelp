import React, { useEffect, useState } from "react";

const App = () => {
  const [text,setText] = useState('');

  // Variation 1 Every Render
  // useEffect( () => {
  //   console.log("Ui rendering run");
  // })


  //variation 2 First Render
  // useEffect(() => {
  //   console.log("Ui rendered")
  // }, []);


  //variation 3 on first render + whenever dependency changes
  // useEffect(() => {
  //   console.log("Ui rendered")
  // }, [text]);


  //variation 4 to handle unmounting of a comopnent
  useEffect(() => {
    // add event listener 
    console.log("listener added");
    return () => {
      console.log("listener Removed");
    }
  }, [text]);


  function changeHandler(event){
    console.log(text)
    setText(event.target.value);

  }
  return (
  <div className="App">
    <input type="text" placeholder="Text" onChange={changeHandler}></input>
  </div>
  );
};

export default App;
