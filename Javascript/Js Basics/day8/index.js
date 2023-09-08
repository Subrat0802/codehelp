
// console.log("Babbar here");



// setTimeout(function(){
//     console.log("third")
// },1000)

// function sync(){
//     console.log("first");
// }
// sync();
// console.log("second");








//Promises

// let meraPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside promise");
//     },3000);
//     resolve(6552)
//     // reject(new error);
// })

// console.log("Pehla");








// let meraPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside promise");
//     },3000);
//     // resolve(2233);
//     reject(error,"error")
// })

// meraPromise.then((value) => {console.log(value)});

// meraPromise.catch((error) => {console.log("recieved an error")})










// let wada1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("SetTimeout started");
//     },2000);
//     resolve(true);
// })

// let output1 = wada1.then(() => {
//     let wada2 = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log("setTimeout2 started");
//         },3000)
//         resolve("wada2 resolve");
//     })
//     return wada2;
// })
// output1.then((value) => console.log(value));







//Async await
// async function abcd(){
//     return 7;
// }
// let x = abcd();
// console.log(x);






async function utilit(){

    let maharastraMausam = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("maharastra mai boht garmi hai");
        },4000);
    })

    let hydMausam = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Hydrabad mai thandi hai");
        },3000);
    });

    let mM = maharastraMausam;
    let hM = hydMausam;
    return[mM,hM];

}










