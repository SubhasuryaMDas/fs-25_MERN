fetch('https://nekos.best/api/v2/neko')
.then(response => response.json())
.then((data)=>{
    console.log(data.results["0"]);
    showDataonUI(data.results["0"].url)
})





let img = document.querySelector("img");
function showDataonUI(data){
    img.src = data;
}



// // fetching data from an API
// fetch('https://dog.ceo/api/breeds/image/random')
// .then((response)=>{  //converting reponse to JSOn
//     // console.log(response.json());
//     return response.json();
// })
// .then((data)=>{  // handling our data 
//     console.log(data.message);
//     showDataonUI(data.message);
// })
// .catch((err)=>{
//     console.log(err);
// });





// // Inbuilt functions in promises
// // 1. Promise.all()
// let p1 = new Promise((res)=>{
//     setTimeout(()=>{
//         res("Promise 1 resolved");
//     }, 10)
// })

// let p2 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         rej("Promise 2 rejected");
//     }, 5)
// })

// let p3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("Promise 3 resolved");
//     }, 1)
// })

// let promisesArray = [p1, p2, p3]
// Promise.any(promisesArray)
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })


// console.log("Starting server");
// let loggedIn = 0;
// let p1 = new Promise((res, rej) => {
//   if (loggedIn) {
//     setTimeout(() => {
//       res("Promise 1 resolved");
//     }, 2000);
//   }else{
//     setTimeout((error)=>{
//             rej("Promise is rejected");
//         },2000)
//   }
//   // setTimeout(()=>{
//   //     res("Promise 1 resolved");
//   // },2000)
// });
// p1.then((data) => {
//   console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// console.log(p1);
