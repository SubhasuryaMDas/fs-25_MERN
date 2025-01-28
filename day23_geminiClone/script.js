let div = document.querySelector("div");
function showData(data) {
  let img = document.createElement("img");
  let p = document.createElement("p");
  let h1 = document.createElement("h1");
  h1.innerText = data.title;
  p.innerHTML = data.explanation;
  img.src = data.hdurl;
  img.height = "200";
  img.width = "200";
  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(p);
}

async function fetchData() {
  try {
    let data = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=muCZ2pBPyBL90cgeHzrdS0uDKsHe4bTRCZjyY08m&date=2025-01-03"
    );
    let result = await data.json();
    console.log(result);
    showData(result);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

// async function complexExample() {
//     console.log('A');

//     setTimeout(()=> console.log('B'), 1000);

//     let p1 = new Promise((resolve)=> setTimeout(()=> resolve('C'), 500));
//     console.log(await p1);

//     let p2 = Promise.resolve('D');
//     p2.then((res)=> console.log(res))

//     console.log('E');

//     await new Promise(resolve => setTimeout(resolve, 100));
//     console.log('F');

// }

// complexExample();
// console.log('G');

// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//   myPromise().then(res => console.log(res));
//   console.log('second');
// }

// async function secondFunction() {
//   console.log(await myPromise());
//   console.log('second');
// }

// firstFunction();
// secondFunction();

// const myPromise = Promise.resolve(Promise.resolve('Promise'));
// function funcOne() {
//   setTimeout(() => console.log('Timeout 1!'), 0);
//   myPromise.then(res => res).then(res => console.log(`${res} 1!`));
//   console.log('Last line 1!');
// }

// async function funcTwo() {
//   const res = await myPromise;
//   console.log(`${res} 2!`)
//   setTimeout(() => console.log('Timeout 2!'), 0);
//   console.log('Last line 2!');
// }

// funcOne();
// funcTwo();

//              Last line 1!
// script.js:52 Promise 2!
// script.js:54 Last line 2!
// script.js:46 Promise 1!
// script.js:45 Timeout 1!
// script.js:53 Timeout 2!

// async function fetchData(){
//     console.log('fethcing data !!!');

//     let stop1 = await new Promise(resolve => setTimeout(()=> resolve('step 1 completed'), 1000));
//     console.log(stop1);

//     let stop2 = await new Promise(resolve => setTimeout(()=> resolve('step 2 completed'), 1000));
//     console.log(stop2);

//     let stop3 = await new Promise(resolve => setTimeout(()=> resolve('step 3 completed'), 1000));
//     console.log(stop3);

//     console.log('All steps completed');
// }

// function sum(){
//     console.log(3+5);
// }

// fetchData();
// console.log("async sequence");
// sum();

// async function example() {
//     console.log('1');
//     setTimeout(()=> console.log('2'), 0);
//     let result = await Promise.resolve('3');
//     console.log(result);
//     console.log('4');
// }
// example();
// setTimeout(()=> console.log('6'), 0);
// console.log('5');

// let p1 = new Promise((resolve, reject) => {
//     console.log('p1 executor');
//     setTimeout(() => {
//         resolve('p1 resolved');
//     }, 2000);
//     console.log('p1 executor end');
// });
// console.log("end");
// p1.then((value) => {
//     console.log(value);
// })

// async function example() {
//     console.log('start');
//     const result = await Promise.resolve("Resolved!!!");
//     console.log(result);
//     console.log('End');
// }

// example();
// console.log('outside the async function');
