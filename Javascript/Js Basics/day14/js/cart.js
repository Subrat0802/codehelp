//we need login check
import loginCheck from "../utils/loginCheck.js";

const loginStatus = loginCheck();
console.log(loginCheck);

if(!loginStatus){
    window.location.href="login.html";
}


import navbar from "../component/navbar.js";
const container = document.querySelector("#navbar");

container.innerHTML=navbar();







let data=JSON.parse(localStorage.getItem("cart"));



const handleQty = (type, singleData) =>{
    // alert(type)

    //validation 
    if(singleData.qty === 1 && type === "-"){
        alert("Not Possible");
        return;
    }

    if(type === "+"){
        data = data.map((el) => {
            if(el.id === singleData.id){
                return { ...el, qty: el.qty+1 }
            }
            else{
                return el;
            }
        })
        localStorage.setItem("cart", JSON.stringify(data));
        appendData(data);
        totalPrice(data);
    }
    else{
        data = data.map((el) => {
            if(el.id === singleData.id){
                return { ...el, qty: el.qty-1 }
            }
            else{
                return el;
            }
        })
        localStorage.setItem("cart", JSON.stringify(data));
        appendData(data);
        totalPrice(data);
        
    }
}





const handleRemove = (singleData) =>{
    data = data.filter((el) => el.id !== singleData.id)
    localStorage.setItem("cart", JSON.stringify(data));

    appendData(data);
    totalPrice(data);
}





const totalPrice = (data) => {
    let total = 0;
    data.map((el) => {
        total = total + el.price * el.qty;
    })
    const span = document.querySelector("#totalPrice_span");
    span.innerText = total;
}
totalPrice(data);




const appendData = (data) => {
    const container =  document.querySelector(".cart_div");
    container.innerHTML=null;
    data.map((el) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");
        const buttonPlus =document.createElement("button");
        const buttonRemove = document.createElement("button");
        const buttonMinus = document.createElement("button");
        
        
        img.src=el.images[1];
        h3.innerText=el.description;
        p1.innerText=`Price: ${el.price}`;
        p2.innerText=`Brand: ${el.brand}`;
        p3.innerText=`Category: ${el.category}`;
        p4.innerText=`Quantity: ${el.qty}`;
        buttonPlus.innerText="+";
        buttonRemove.innerText="remove";
        buttonMinus.innerText="-"
        

        buttonRemove.addEventListener('click', () => handleRemove(el))
        buttonMinus.addEventListener("click", () => handleQty("-", el))
        buttonPlus.addEventListener("click", () => handleQty("+", el))


        div.append(img,h3,p1,p2,p3,p4,buttonMinus,buttonRemove,buttonPlus);
        container.append(div);
    })
}
appendData(data);