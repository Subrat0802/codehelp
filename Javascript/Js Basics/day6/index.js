


// document.addEventListener("click",function(){
//     console.log("clicked on document");
// }) 







// function clicked(){
//     console.log("Clicked");
// }

// document.addEventListener("click", clicked);
// document.removeEventListener("click",clicked)







// const content=document.querySelector("#wrapper");

// content.addEventListener("click", function(event){
//     console.log(event);
// })







// let links = document.querySelectorAll('a');
// let thirdlink = links[2];

// thirdlink.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log("maza aaya");
// })









// let myDiv = document.createElement("div");

// let paraFun = function(event) {
//     console.log("para" + event.target.textContent)
// }

// myDiv.addEventListener('click', paraFun)

// for(let i=0;i<=100;i++){
//     let newEle = document.createElement('p');
//     newEle.textContent = "This is para" + i;

//     myDiv.appendChild(newEle);
// }
// document.body.append(myDiv);









let elementss = document.querySelector("#wrapper");

elementss.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log("span pr click kia hai " + event.target.textContent);
    }
   
})