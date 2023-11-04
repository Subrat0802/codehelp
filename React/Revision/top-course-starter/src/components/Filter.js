import React from 'react'

const Filter = ({filterData}) => {
  return (
    <div className='flex justify-center bg-blue-600 py-2'>
        {
            filterData.map((el) => {
                return <button className='mr-4 hover:text-white transition-all '>{el.title}</button>
            })
        }
    </div>
  )
}

export default Filter