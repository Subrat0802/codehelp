import navbar from "../component/navbar.js";
const container = document.querySelector("#navbar");

container.innerHTML=navbar();








//we need to collect data from user
//we need to make post req to our auth api

//api => response
//1. success => token
//2. failure => something wrong


// https://reqres.in/api/login

//POST
//send some data => {email, password}


//catch the button
const button = document.querySelector("#login_button");

//arrow function
//arrow function does'nt allow hoisting
const handleLogin = async () => {

    // catch the value the user type 
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // create the object that api takes
    const payLoad = {
        email: email,
        password: password
    }
    // console.log(payLoad);


    // post request to api
    try{
        const response = await fetch("https://reqres.in/api/login", {
            //post req to api
            //method => post
            //body => payload
            //headers

            method:'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(payLoad)
        })

        const data = await response.json();
        const login_token = data.token;
        console.log(login_token);
        localStorage.setItem("token", JSON.stringify(data.token));
        const reg_token = JSON.parse(localStorage.getItem("reg_token"));
        if(login_token === reg_token){
            window.location.href = "product.html";
        }
        else{
           
            alert("Something Wrong");
        }
        
    }
    catch(err){
        console.log(err);
    }



}

//1.create the fun async
//2.try catch block
//3.await fetch
//4.await response.json();

const test = () =>{

}


//add the EListener
button.addEventListener("click", handleLogin)