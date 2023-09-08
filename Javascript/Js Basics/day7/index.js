
//adding 100 para

// const t1 = performance.now();
// for(let i=1;i<=100;i++){
//     let newEle = document.createElement("p");
//     newEle.textContent = "this is para";

//     document.body.append(newEle);
// }
// const t2 = performance.now();
// console.log("this took "+ (t2-t1) + " ms");




//Optimising a bit

// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1;i<=100;i++){
//     let ele=document.createElement('p');
//     ele.textContent="this is para " + i;

//     myDiv.appendChild(ele);
// }
// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log("this took "+ (t4-t3) + " ms");









// let fregmant = document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let newEle = document.createElement("p");
//     newEle.textContent = "this is para" + i;

//     fregmant.body.appendChild(newEle);
// }
// document.body.appendChild(fregmant);









// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = "js is single";
//     document.body.appendChild(para);
// }


// function appendMessage(){
//     let para = document.createElement('p');
//     para.textContent='kya haal hai';
//     document.body.appendChild(para);
// }

  
// appendMessage();
// addPara();















setTimeout(function(){
    console.log("Hello Everyone");
},3000)
