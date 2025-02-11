// Destructing:- Object

// let person = {
//     name:"John",
//     age:25,
//     city:"Bangalore"
// }
// let {city:cityName, age:personAge} = person;
// console.log(cityName, personAge);

// console.log(person.age)
// console.log(person.city);





let obj = {
    name:"John",
    age:25,
    city:"Bangalore",
    address:{
         street: '123 Main St',
         city: 'New York',
         state: 'NY',
         zip: '10001',
         personalInformation:{
                hobbies:['reading', 'painting'],
                isMarried:false,
                isEmployed:true
         }
     }
}
let {hobbies} = obj.address.personalInformation;
console.log(hobbies[0])
// console.log(xyz)




// Destructing:- Array
// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr[7]);

// let [first , second] = arr;
// console.log(first, second);







// Map
// let myMap = new Map();
// myMap.set(1, "One");
// myMap.set(2, "Two");
// console.log(myMap.get(1));



// set 
// let arr = [1,2,23,21,3,23,52,523,5,234,24,11,1,1,2,2,3,34,4,4,4,5,4,2,21,2,3,44]
// let uniqueArr = new Set(arr);
// console.log(uniqueArr);





// default parametre and Steing literals and Arrow Funtions
// const greet  = (name = "Guest")=>{
//     console.log(`Hello ${name}`);
// }
// greet();





// let employee = {
//     eid:212,
//     ename:"John",
//     esal:50000,
//     edept:"IT",
// }

// let newEmployee = {...employee};
// newEmployee.esal = 55000;
// console.log(employee.esal);





// spread and rest operator
// function sum(a,b ,...args){
//     console.log(a,b,args);
    
// }
// sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17)

// let arr = [1,2,3,4,5];
// let arr2 = [7,8,90,10];
// let newArr = [...arr, ...arr2]
// console.log(newArr);









// let and const
// console.log(a);
// let a=10;
// const b = 20;