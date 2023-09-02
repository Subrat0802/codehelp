// console.log("Chalo shuru kartein hain");


// object create 


// object orientd programing 
// const rect={
//     length:20,
//     width:25,

//     draw: function(){
//         console.log('draw');
//     }
// }
// console.log(rect.draw());








// object creation 1.factory function   2.constructor function 


// 1. factory function -> camelCase notation -> createRectangle

// function createRectangle(len,wid){
//     return rect={
//         length: len,
//         width: wid,
    
//         draw: function(){
//             console.log('draw');
//         }
//     }
// }

// let rectObj1 = createRectangle(1, 5)
// let rectObj2 = createRectangle(2, 6)
// let rectObj3 = createRectangle(3, 7)

// console.log(rectObj3.length);
// console.log(rectObj2.width);







// 2. constructor function  -> pascle notation -> Rectangle

// function Rectangle(l, w){
//     this.length = l;
//     this.width = w;
//     this.draw = function(){
//         console.log("draw");
//     }
// }

// object creation using constructor function 

// let rectangleObject0 = new Rectangle(1, 2);
// let rectangleObject1 = new Rectangle(2, 3);

// console.log(rectangleObject1);










// Dynamic nature of obj 

// function Rectangle(l, w){
//     this.length = l;
//     this.width = w;
//     this.draw = function(){
//         console.log("draw");
//     }
// }

// let rectangleObject0 = new Rectangle(1, 2);
// let rectangleObject1 = new Rectangle(2, 3);

// rectangleObject1.color = "yellow"; 

// delete rectangleObject0.width;

// console.log(rectangleObject1);
// console.log(rectangleObject0)






//constructor Property
// let Rectang1 = new Function(
//     'l', 'w',
//     `this.length = l;
//     this.width = w;
//     this.draw = function(){
//         console.log("draw");
//     }`);


// let rect = new Rectang1(1,2);
// console.log(rect); 











// primitive and referance 

// 1.primitive  
// let a=10;
// let b=a;
// a++;

// console.log(a);
// console.log(b); //10 11




// 2.referance 
// let a = {value: 10};
// let b= a;
// a.value++;

// console.log(a.value);
// console.log(b.value)

//11 11










// primitive ke case main 

// let a=10;
// function inc(a){ //primitive ke case main copy banti hai
//     a++;
// }
// inc(a);

// console.log(a);









// referance ke case mai 

// let a={value:10};

// function inc(a){ //ref ke case mai same name se point kar rahe hote hai
//     a.value++;
// }
// inc(a);

// console.log(a.value);









// iteration thriung object  
// 1. foor-in 
// 2. for-of 

// for-in 
let rectangle={
    length: 2,
    width: 3,
};

//for-in loop
// for(let key in rectangle){
    //keys are reflected through key variable
    //values are reflected through rectangle key
    //key, value, key-value pair
//     console.log(key, rectangle[key]);
// }



// for-of 
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }


//if-else keys are present or not
// if('color' in rectangle){
//     console.log("present");
// }
// else{
//     console.log("absent");
// }











//Object cloning 1.iteration   2.Assign   3.Spread

// /.................1 Iteration
let src={
    a:10,
    b:20,
    c:30
}
let dest={};

for(key in src){
    dest[key]=src[key];
}
console.log(dest);



//    /.......2 Assign 
let src1={
    a:11,
    b:22,
    c:33
}
let src2={value:2}
let dest1=Object.assign({}, src1,src2);
console.log(dest1);

dest1.a++;
console.log(dest1);




// /............3 Spread
let src3={
    a:50,
    b:62,
    c:73
}

let dest3 = {...src}
console.log(dest3)













// Garbage collection 
