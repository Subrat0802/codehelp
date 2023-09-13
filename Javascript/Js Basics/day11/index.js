
// console.log("Hello Jee");

// const API_KEY = "a07e04b484e939163e460aef2c19f501";

// async function showWeather(){
//     let city = "bhopal"
    
//     try{
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const data = await response.json();
//         console.log(data);

//         renderWeather(data);
//     }

//     catch(e){
//         console.log("Error",e);
//     }

// }

// showWeather();


function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("Error: no geoLocation Support");
    }
    
}

function showPosition(position){
    let lat=position.coords.latitude;
    let lon = position.longitude;

    console.log(lat);
}
