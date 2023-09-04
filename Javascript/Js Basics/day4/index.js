// console.log("hello");




//function declaration.................
// function run(){
//     console.log("Running");
// }

// run();  //invok karna ..top bottom anywhere you can assign





//Named function assignment..............

// let stand = function walk(){
//     console.log("walking");
// }


//anonymous function assignment.................

// let stand2 = function(){
//     console.log("walking");
// }
// stand2();



// stand();
// walk() //do not //only in he bottom you can assign 



// let jump = stand;
// jump();













//Javascript is dynamic language................

// let x=1;
// x="a";
// console.log(x);


// function sum(a,b){
//     return a*b;
// }
// console.log(sum(2,6));















//Arguments................

// function sum(a,b){

//     let total=0;
//     for(let value of arguments){
//         total+=value;
//     }
//     console.log(total);
//     return a+b;
// }
// let ans = sum(1,2,3,4,5,6);
// console.log(ans);











//RestOperator............

// function sum(a,b,...args){
//     console.log(args);
// }
// sum(1,2,3,4,5);












// default parameter ....................

// function interest(p,r=12,y=2){
//     return p*r/100*y;
// }

// let ans=interest(1000);
// console.log(ans);









//GETTER SETTER.................
// getter - access properties
// setter - change or mutate properties

// let person = {
//     fName : "love",
//     LName : "babbar",

//     get fullName(){
//     return `${person.fName} ${person.LName}`;
//     },

//     set fullName(value){
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.LName = parts[1];
//     }


// };


// console.log(person.fullName);

// person.fullName = 'Rahul Kumar';
// console.log(person.fullName);















//try and catch block (error handling)'






//scope............
// {
//     var a=5;
// }
// console.log(a);












// Reducing an array 
let arr=[1,2,3,4];

// let total=0;

// for(let value of arr){
//     total+=value;
// }
// console.log(total);



let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 1);

console.log(totalSum)