function createStudnetObject(name, age, marks){
    // console.log(this);
    this.name = name;
    this.age = age;
    this.marks = marks;
    createStudnetObject.prototype.printName = function(){
        return this.name;
    }
    createStudnetObject.prototype.color = "black"
    // this.subject = subject;
    // let obj = {};
    // obj.name = name;
    // obj.age = age;
    // obj.marks = marks;
    // return obj;
}

let s1 = new createStudnetObject("John", 25, 80);
console.log(s1.color);
let s2 = new createStudnetObject("abc", 26, 60);
console.log(s2);








// function createStudnetObject(name, age, marks){
//     // console.log(this);
//     let obj = {};
//     obj.name = name;
//     obj.age = age;
//     obj.marks = marks;
//     return obj;
// }

// let s1 = createStudnetObject("John", 25, 80);
// console.log(s1);








// let student1 = {
//     name: "John",
//     age: 25,
//     gender: "male",
//     printDetails:function (city, state){
//         console.log(this.name, this.age, city , state); 
//     }
// }

// let student2 = {
//     name: "smith",
//     age: 22,
//     gender: "female",
// }

// student1.printDetails.call(student2, "Banglore", "Karnataka")


// function printDetails(city, state){
//     console.log(this.name, this.age, city , state); 
// }

// student1.printDetails();

// printDetails.call(student1, "Banglore", "Karnataka");
// printDetails.apply(student2, ["Ooty", "TamilNadu"]);
// console.log(student1);




// "use strict";
// function heloo() {
//   console.log(this);
// }
// // console.log(this);
// window.heloo();

// a = 10;
// console.log(a);

// console.log("hello world!");
// this keyword
// function heloo(){
//     console.log(this);
// }
// // console.log(this);
// heloo();

// let student = {
//     name: "John",
//     age: 25,
//     greet: function(){
//         console.log(this);
//     },
//     address:{
//         city: "Bangalore",
//         state: "Karnataka",
//         greet: function(){
//             console.log(this);
//         }
//     }
// }
// student.greet()
// student.address.greet()
