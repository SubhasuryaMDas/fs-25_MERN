//5. IIFE -> Immediamtely invoked function expression
//   - It is a function that is invoked immediately after it is defined.
(()=>{
    console.log("hello world!!", 9+10);
})()



// 4. Arrow Functions -> ES6 -> EcmaScript 6th Version
// https://ecma-international.org/publications-and-standards/standards/ecma-262/

// let arrowFunc = (name)=>name;

// console.log(arrowFunc('Akhil Sharma'));






// 3. Higher Order Funtion (HOF)
// benefits of HOF
// signup -> login
// addtocart -> productDetails
// function calculate(oper, initValue, numbers){
//     let total = initValue;
//     for(let i=0;i<numbers.length;i++){
//         total = oper(total, numbers[i]);
//     }
//     return total;
// }

// function sum(n1,n2){
//     return n1+n2;
// }

// function multiply(n1, n2){
//     return n1 * n2;
// }

// console.log(calculate(multiply,1, [1,2,4,6]));
// console.log(calculate(sum,0, [1,2,4,6]));

// console.log(ans);







// 2. Returning a function from itself
// function returnFunc(){
//     return function(name){
//         return "My camera name is " + name;
//     }
// }
// let fn = returnFunc();
// console.log(fn("Sony"));

// console.log(fn);



// 1. pasing function as an argument
// function getCaputure(surya){
//     let cameraName = surya('Sony');
//     console.log(cameraName);
//     return 3+6;
// }
// function canon(name){
//     return name;
// }
// let ans = getCaputure(canon);
// console.log(ans);







// 2. Function expression -> Anonynous Function expresssion -> Anonynous functions
// let a = 10;  //variable xpression
// let Sum = function (x, y){  //FE
//     return x+y;
// }
// let ans = Sum(9,2);
// console.log(ans);




// 1. function declaration / Function Statement
// function sum(x, y){
//     return x+y;
//     console.log("Hello");
// }
// let ans = sum(9,2);
// console.log(ans);





// function buttonClicked(){
//     console.log('Button Clicked');
// }

// dispatchEvent.addeventListner('click', buttonClicked)