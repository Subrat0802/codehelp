import navbar from "../component/navbar.js";
const container = document.querySelector("#navbar");

container.innerHTML=navbar();







const button = document.querySelector("#registration_button");

const handleRegistration = () => {

    //catch the value
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const re_password = document.querySelector("#re_password").value;

    // console.log(name,email,password,re_password);
    //validation
    if(!name || !email || !password || !re_password){
        alert("type all the field");
        return;
    }

    //validation to check password and con fpassword are the ssame
    if(password !== re_password){
        alert("password not matched");
        return;
    }

    //payload
    const payload = {
        email: email,
        password: password
    }

    //link => https://reqres.in/api/register
    //post
    fetch("https://reqres.in/api/register" , {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res);
        localStorage.setItem("reg_token",JSON.stringify(res.token));
        window.location.href = "login.html";
    }).catch((err) => {
        console.log(err);
    })


    


}

button.addEventListener("click", handleRegistration);