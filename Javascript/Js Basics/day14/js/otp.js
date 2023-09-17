import navbar from "../component/navbar.js";
const container = document.querySelector("#navbar");

container.innerHTML=navbar();


//1. lets catch all the input together
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const submit = document.querySelector("#submit");

//

const oneFun = () =>{
    const oneValue = one.value;
    if(oneValue.length === 1){
        two.focus();
    }

}

const twoFun = () =>{

    //validation
    if(one.value.length === 0){

        one.focus();
        two.value = "";
        return;
    }

    const twoValue = two.value;
    if(twoValue.length === 1){
        three.focus();
    }
    if(twoValue.length === 0){
        one.focus();
    }
}

const threeFun = () =>{


    if(one.value.length === 0 || two.value.length === 0){

        one.focus();
        three.value = "";
        return;
    }

    const threeValue = three.value;
    if(threeValue.length === 1){
        four.focus();
    }
    if(threeValue.length === 0){
        two.focus();
    }
}

const fourFun = () =>{


    if(one.value.length === 0 || two.value.length === 0 || three.value.length === 0){

        one.focus();
        four.value = "";
        return;
    }

    const fourValue = four.value;
    if(fourValue.length === 0){
         three.focus();
    }

    if(four.value.length === 1){
        //catch the button
        document.querySelector("#submit").disabled = false;
    }

    if(fourValue.length > 1){
        four.value = four.value[0];

    }
    
}


const submitValue = () => {
    
    const otp = one.value + two.value + three.value + four.value;

    if(otp !== "1234"){
        alert(`Incorrect OTP ${otp}`);
        return;
    }
    // else{
    //     window.location.href = "orderPlaced.html";
    // }
    else{
        const otp_div =document.querySelector(".otp_div");
        otp_div.innerHTML = null;
    
        let h1 = document.createElement("h1");
        h1.innerText="Thank you! For Shopping Your Order is Placed.";
        h1.style.color = "white";
        otp_div.append(h1);

        let tID = setTimeout(function () {
            window.location.href = "product.html";    
            localStorage.removeItem("cart");
            localStorage.removeItem("finalData");
            localStorage.removeItem("paymentData");
            localStorage.removeItem("totalPrice");  
        }, 3000);
    }

    
}

one.addEventListener("input", oneFun);
two.addEventListener("input", twoFun);
three.addEventListener("input", threeFun);
four.addEventListener("input", fourFun);
submit.addEventListener("click", submitValue);