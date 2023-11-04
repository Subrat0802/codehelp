import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page, totalPages, handlePageChange} = useContext(AppContext)
  return (
    <div className='fixed bottom-0  w-11/12 max-w-[600px] bg-white py-2 '>
      <div className='flex justify-between'>
        
        <p className='font-bold'>
          page {page} of {totalPages}
        </p>


        <div>
        { page > 1 &&
          (<button className='hover:opacity-75 rounded-md border bg-gray-800 text-white px-2 py-1 mr-2' onClick={() => handlePageChange(page - 1)}>
            Previous
          </button>)
        }
        { page < totalPages &&
          (<button className='hover:opacity-75 border rounded-md bg-gray-800 text-white px-2 py-1 ml-2' onClick={() => handlePageChange(page + 1)}>
            next
          </button>)
        }
        </div>
        

      </div>
    </div>
  )
}

export default Pagination