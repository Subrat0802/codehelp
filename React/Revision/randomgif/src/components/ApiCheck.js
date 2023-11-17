import React, { useEffect } from 'react'

const ApiCheck = () => {

async function fetchdata(){
    try {
        const response = await fetch('https://realtor.p.rapidapi.com/locations/v2/auto-complete');
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

useEffect(() => {
    fetchdata();
},[])

}

export default ApiCheck