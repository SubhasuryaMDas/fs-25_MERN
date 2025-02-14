class Person{
    #age; // private field
    constructor(name, age){
        this.name = name;
        this.#age = age;
    }

    getAge(){
        
        return this.#age;
    }
}

let person1 = new Person("John", 25);
console.log(person1.getAge());










// Abstraction
// class Car{
//     constructor(make, model, year){
//         this.brand = make;
//         this.model = model;
//         this.year = year;
//     }
//     start(){
//         console.log("car start");
//     }
//     stop(){
//         console.log("car stop");
//     }
// }
// class ElectricCar extends Car{
//     charge(){
//         console.log("charging");
//     }
// }

// let ecar1 = new ElectricCar('tesla', "model", 3)
// ecar1.start();
// ecar1.charge();



// Polymorphism
// class Shape {
//     area(){
//         return 0;
//     }
// }

// class Rectangle extends Shape {
//     constructor(length, width){
//         this.length = length;
//         this.width = width;
//     }
//     area(){
//         return this.length * this.width;   
//     }
// }

// class Circle extends Shape {
//     constructor(radius){
//         this.radius = radius;
//     }
//     area(){
//         return Math.PI * Math.pow(this.radius, 2) 
//     }
// }



// inheritance

// class GrandParent{
//     greet(){
//         console.log("hello");
//     }
// }
// class Parent extends GrandParent{};
// class Child extends Parent{};
// let c1  = new Child();
// c1.greet();
// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     makeSound(){
//         return `${this.name} makes a sound`;
//     }
// }

// class Dog extends Animal{
//     makeSound(){
//         return `${this.name} barks`;
//     }
// }

// class Cat extends Animal{
//     makeSound(){
//         return `${this.name} meows`;
//     }
// }

// let myDog = new Dog("pug");
// let myCat = new Cat("Oia")
// console.log(myDog.makeSound());
// console.log(myCat.makeSound());










// Ecapsulation
// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     //public method
//     displayInfo(){
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }

//     // private Methods
//     _checkAge(){
//         if(this.age >= 18){
//             return true;
//         }
//         return false;
//     }

//     displayStatus(){
//         return `${this.name} ${this._checkAge()}`;
//     }
// }

// let u1 = new User("john", 23);
// console.log(u1.displayStatus());
// console.log(u1.displayInfo());




// classes
// class Student{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     printName(){
//         return this.name;
//     }
// }

// let s1 = new Student("john", 23)
// console.log(s1);



// // console.log("heello World!!!");
// function createStudnetObject(name, age){
//     this.name = name;
//     this.age = age;
//     // this.printName = function(){
//     //     return this.name;
//     // }
//     createStudnetObject.prototype.printName = function(){
//         return this.name;
//     }
// }

// let s1 = new createStudnetObject("john", 23)
// console.log(s1.printName());

// let s2 = new createStudnetObject("smith", 25)
// console.log(s2);
