async function fetchingData() {
  try {
    let fetchData = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.406498&lng=78.47724389999999&str=Biryani&trackingId=42af3667-261d-b2b8-281a-1f7118963449&submitAction=ENTER&queryUniqueId=44b45b67-3f6b-ee6a-3664-8c66df7c5a04");
    let data = await fetchData.json();
    console.log(data);
  } catch(error) {
    console.log("Error", error);
  }
}
fetchingData();

// fetch('https://dog.ceo/api/breeds/image/random')
// .then((data)=>{ // to convert our data into json format
//     // console.log(data.json());
//     return data.json();
// })
// .then((result)=>{ // handlining the data
//     console.log(result);
// })
// .catch((error)=>{ // handling errors
//     console.log(error);
// });

// takingJokeFromServer((joke)=>{
//     translateJoke(joke, ()=>{
//         postJoke(translatedJoke,()=>{
//             console.log('Joke Posted Successfully');
//         });
//     })
// });

// async function postigaJoke(){
//     let joke = await takingJokeFromServer();
//     let translatedJoke = await translateJoke(joke);
//     let postingJoke = await postJoke(translatedJoke);
// }

// choosePizza((selectedPizaa)=>{
//     placeOrder(selectedPizaa, (orderStatus, pizza)=>{
//         recievePizza(orderStatus, pizza)
//     })
// })

// Async await
function makingPizza() {
  let pizza = choosePizza();
  let orderStatus = placeOrder(Pizza);
  let pizzaRecieved = recievePizza(pizza);
}

// promises
// function promiseFunc() {
//   let loggedIn = true;
//   let p1 = new Promise((res, rej) => {
//     if (loggedIn) {
//       setTimeout(() => {
//         res("Promise 1 resolved");
//       }, 2000);
//     } else {
//       rej("Promise 1 rejected");
//     }
//   });
//   return p1;
// }

// console.log(promiseFunc());

// promiseFunc()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
