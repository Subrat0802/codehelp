import React from 'react'

const Filter = (props) => {
    const filterData=props.filterData;
    const setCatagory = props.setCatagory;
    const catagory = props.catagory;

    function clickHandler(data){
        setCatagory(data)
    }
  return (
    <div>
        {
            filterData.map((el) => {
                return <button onClick={() => clickHandler(el.title)}>{el.title}</button>
            })
        }
    </div>
  )
}

export default Filter