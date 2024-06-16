import React from 'react'

const Stats = [
    {
        count: "5K",
        label:"Active Students"
    },
    {
        count: "10+",
        label:"Mentors"
    },
    {
        count: "200+",
        label:"Courses"
    },
    {
        count: "50+",
        label:"Awards"
    },
    
]

const StatsComponent = () => {
  return (
    <section className='w-full bg-richblack-600 flex justify-center py-5'>
        <div className=' w-8/12'>
            <div className='flex  justify-between items-center'>
                {
                    Stats.map((el, i) => (
                        <div key={i} className='flex flex-col items-center'>
                            <h1 className='font-bold text-3xl'>{el.count}</h1>
                            <h2>{el.label}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default StatsComponent