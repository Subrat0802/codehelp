import React from 'react'

const Filter = ({filterData}) => {
  return (
    <div className='11/12 flex flex-wrap max-w-max space-x-4 gap-4 mx-auto py-4 justify-center'>
        {filterData.map((data) => {
            return <button key={data.id}>{data.title}</button>
        })}
    </div>
  )
}

export default Filter