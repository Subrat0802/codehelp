import React from 'react';
import Products from './components/Product'
import NewProduct from './components/NewProduct';


const App = () => {
  const products = [
    {
      id:"p1",
      title:"Nirma",
      amount:100,
      date:new Date(2021, 8, 10)
    },
    {
      id:"p2",
      title:"Surf Excel",
      amount:110,
      date:new Date(2021, 8, 11)
    },
    {
      id:"p3",
      title:"Tide",
      amount:120,
      date:new Date(2021, 8, 12)
    },
    {
      id:"p4",
      title:"Ghadi",
      amount:190,
      date:new Date(2021, 8, 13)
    },
  ];

  function printProductData(data){
    console.log("im inside app.js")
    console.log(data);
  }

  return (
    <div className='App'>
      <NewProduct printProduct = {printProductData}/>
      <Products items={products}/>
    </div>
  );
}

export default App;
