import React, { useState } from 'react'
import Card from './Card';

const Testimonial = (props) => {
    let reviews=props.reviews;
    const [index, setIndex] = useState(0);
    
    function handlePreviw(){
        if(index-1 < 0){
            setIndex(reviews.length-1)
        }
        else{
            setIndex(index-1);
        }
    }


    function handleRandom(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    function handleNext(){
        if(index+1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

  return (
    <div>
        <Card review={reviews[index]} />
        <div className="flex justify-between w-full  px-32">
            <button onClick={handlePreviw} className="bg-blue-700 text-white p-2 rounded-md">Preview</button>
            <button onClick={handleRandom} className="bg-blue-700 text-white p-2 rounded-md">Random</button>
            <button onClick={handleNext} className="bg-blue-700 text-white p-2 rounded-md">Next</button>
        </div>
        
    </div>
  )
}

export default Testimonial