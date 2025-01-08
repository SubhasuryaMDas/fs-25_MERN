// Q7.
let ans = {}
let input = [45,34,64];
input.sort((a,b) => a-b);
let median;
if(input.length % 2 == 0){
    median = Math.floor(((input[input.length/2 - 1] + input[input.length/2])/ 2)) 
}else{
    median = input[Math.floor(input.length/2)];
}

ans.median = median;

console.log(ans);




// Q6 -> factorial of the number of elements



// Q5.
// let str = "Every developer likes to mix nodejs and reactjs";
// // function abbrevation(word){
// //     return word[0] + (word.length - 2) + word[word.length - 1]
// // }

// let strArr = str.split(" ");
// let mappedArr = strArr.map(function(word){
//     if(word.length > 3){
//         // console.log(abbrevation(word));
//         return word[0] + (word.length - 2) + word[word.length - 1]
//     }
//     return word;
// })

// let result = mappedArr.join(" ");
// console.log(result);





// Q4.
// function sum(a,b, ...args){

//     // console.log(a,b,args);   
// }
// sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);

// let input = [
//     {name: 'test1', age: 13},
//     {name: 'test2', age: 14},
//     {name: 'test3', age: 15},
//     {name: 'test4', age: 16},
//     {name: 'test5', age: 17},
//     {name: 'test7', age: 19}
// ];
// let ages = input.map((person)=> person.age);
// let result = [ Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
// console.log(ages);
// console.log(result);








// Q3.
// let str = "Geekster web development sessiosn are going online";
// let stringArr = str.split(" ");
// let ansArr = stringArr.map(function(word){
//     return word[0];
// })
// let ansStrig = ansArr.join("");
// console.log(ansArr);
// console.log(ansStrig);


// console.log(stringArr);







// Q2.
// let arr = [1,-4,12,-40,-50,30];
// let filteredArr = arr.filter((ele)=>ele > 0);
// let ans = filteredArr.reduce((acc,CV)=>{
//     return acc + CV;
// }, 0)
// console.log(filteredArr);
// console.log(ans);




// Q1.
// let arr = [1,2,3,4,5];
// let squaredArray = arr.map((element)=>element*element);
// console.log(squaredArray);
