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




//where = > ? API

//3

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const handleAddToCart = (data) =>{
    // alert("I'm running");
    // console.log(data);
    let status = false;
    cart.map((el) => {
        if(el.id===data.id){
            status = true;
        }
    })
    if(status){
        alert("data already present");
        return;
    }
    //adding one key to data obj => qty
    data.qty = 1;
    cart.push(data);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Data is added");
}
 



//2


const appendData = (data) => {
    const container =  document.querySelector(".products_div");
    container.innerHTML=null;
    data.map((el) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const buttonAdd =document.createElement("button");
        const buttonBuy = document.createElement("button");
        
        
        img.src=el.images[1];
        h3.innerText=el.description;
        p1.innerText=`Price: ${el.price}`;
        p2.innerText=`Brand: ${el.brand}`;
        p3.innerText=`Category: ${el.category}`;
        buttonAdd.innerText="Add to cart";
        buttonBuy.innerText="Buy";


        buttonAdd.addEventListener("click", () => handleAddToCart(el));

        div.append(img,h3,p1,p2,p3,buttonAdd,buttonBuy);
        container.append(div);
    })
}







//1


const getData = async () => {
    try{
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        appendData(data.products);
        console.log(data.products);
    }
    catch(err){
        console.log(err);
    }
}
getData();