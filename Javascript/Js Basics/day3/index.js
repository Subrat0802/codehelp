// console.log("Hello World");

// let lastName = "babbar";


// let firstName = new String("love");


// let message = "this is my forst message";








// let message1 = `this 
// is my
//  forst
//   message
//   ${lastName}`;

//   console.log(message1);







// //   Date 

//   let date=new Date();
//   console.log(date);









  //Arrays


  //insert

//   let Number=[1,4,2,9];

//   console.log(Number);

//   Number.push(2)

//   console.log(Number);

//   //searching

//searching primitive arrays

//   console.log(Number.indexOf(4));

//   console.log(Number.includes(9));

//   Number.indexOf(4, 2);

  



//searching array of object index 

// let courses=[
//     {no:1, name:"rahul"},
//     {no:2, name:"aman"}
// ];

// console.log(courses);

// // let course = courses.find(function(course){
// //     return course.name == 'aman';
// // })

// // console.log(course); 

// // Arrow Function 
// let course = courses.find(course => course.name == 'aman');

// console.log(course); 













// Removing Element 


// let Number=[1,2,3,5,4];

// Number.pop(); //end
// Number.shift(); //begain
// Number.splice(2,1) //middil

// console.log(Number)









//empting array 

// let numbers=[1,2,3,4,5];
// let numbers2=numbers;
// // numbers=[];
// // numbers.length=0;
// numbers.splice(0, numbers.length);

// console.log(numbers);
// console.log(numbers2)











// Combining and slicing arrays: 

// let first=[1,2,3];
// let second=[4,5,6];

// let conbined = first.concat(second);
// console.log(conbined);
// let sliced = conbined.slice(2,5);
// console.log(sliced);










//Iterating an array

// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }


// arr.forEach(el=> console.log(el));











//Joining array

// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');
// console.log(joined);


// let message = "this is my first message";
// const parts = message.split(' ');
// console.log(parts);












// Filtering array 

// let numbers =[1,2,3,4,5,-1.-2];

// let num=numbers.filter((value) => value>=0 );

// console.log(num);






//Mapping arrays

let number = [7,8,9,5];

let item = number.map(value => 'student no' + value)
console.log(item);
