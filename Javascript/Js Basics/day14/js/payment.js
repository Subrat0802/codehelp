import navbar from "../component/navbar.js";
const container = document.querySelector("#navbar");

container.innerHTML=navbar();


//we need login check
import loginCheck from "../utils/loginCheck.js";
const loginStatus = loginCheck();
// console.log(loginCheck);

if(!loginStatus){
    window.location.href="login.html";
}

import states from "../utils/data.js";
// console.log(states);


const handleRenderState = (states) => {
    //catch the target
    const select = document.querySelector("#state");
    select.innerHTML = null;

    states.map((el) => {
        let option = document.createElement("option");
        option.innerText=el;
        option.value = el;

        select.append(option);
    })
}
handleRenderState(states)


const handleRenderPaymentInput = () => {
    //catch the select value
    const value = document.querySelector("#payment_mode").value;
    if(value === "cod"){
        const target = document.querySelector("#card_input");
        target.innerHTML = null;
        return;
    }
    else{

        const html = 
        `<label >Card Number:</label>
        <input type="number" id="cardNumber" placeholder="Enter Card Number">

        <label >CVV:</label>
        <input type="number" id="cvvNumber" placeholder="Enter CVV Number">
        
        <label >Expiry Date:</label>
        <input type="date" id="cardExpDate" placeholder="Enter Expiry Date">
        
        <label >Card Holde Name:</label>
        <input type="text" id="cardHolderName" placeholder="Enter Card Holder Name">`

    ///select the target
    const target = document.querySelector("#card_input");
    target.innerHTML = html;

    }
}


//catch the select tag
const paymentSelect = document.querySelector("#payment_mode");

paymentSelect.addEventListener("change", handleRenderPaymentInput)


const handleSubmit = (e) => {
    e.preventDefault();
    // alert("im")
    //catch the values
    const name = document.querySelector("#name").value;
    const address = document.querySelector("#address").value;
    const city = document.querySelector("#city").value;
    const state = document.querySelector("#state").value;
    const pin = document.querySelector("#pin").value;
    const paymentMode = document.querySelector("#payment_mode").value;

    if(!name || !address || !city || !state || !pin || !paymentMode){
        alert("Fill all the details");
        return;
    } 
    let cardNumber ;
    let cvv;
    let expDate;
    let cardName;

    if(paymentMode === "card"){
        //we will have another 4 value
        cardNumber = document.querySelector("#cardNumber").value;
        cvv = document.querySelector("#cvvNumber").value;
        expDate = document.querySelector("#cardExpDate").value;
        cardName = document.querySelector("#cardHolderName").value;

        //validation
        if(!cardNumber || !cvv || !expDate || !cardName){
            alert("fill the card details");
            return;
        }

    }


    //validation
    let payload = {
        name,
        address,
        city,
        state,
        pin,
        paymentMode
    }
    if(paymentMode === "card"){
        payload.cardDetails = {
            cardName,
            cvv,
            expDate,
            cardNumber
        }
    }

    let data = JSON.parse(localStorage.getItem("paymentData"));
    data.userDetails = payload;

    localStorage.setItem("finalData", JSON.stringify(data));
    // console.log(data);


    //creating payload

    //redirecting to OTP page
    window.location.href="otp.html";

}

const form=document.querySelector("#payment_form");
form.addEventListener("submit", handleSubmit);