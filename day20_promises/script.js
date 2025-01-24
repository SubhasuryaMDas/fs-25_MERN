



// chooseMovie((movie) => {
//     selectSeats(movie, (movie, seats) => {
//         makePayment(movie, seats, (movie, seats, paymentStatus) => {
//             receiveTicketConfirmation(movie, seats, paymentStatus, (movie, seats, ticketID) => {
//                 showTicketAtEntry(movie, seats, ticketID);
//             });
//         });
//     });
// });






// // Async await 
// async function postingJokeOnWeb(){
//     let takingJoke = await takingJokeFromServer();
//     let translatedJoke = await translatedJoke(takingJoke);
//     let postJoke = await postJoke(translatedJoke);
// }



// choosePizza((selectedPizaa)=>{
//     placeOrder(selectedPizaa, (orderStatus, pizza)=>{
//         recievePizza(orderStatus, pizza)
//     })
// })

choosePizza()
.then((selectedPizaa)=>{
    return placeOrder(selectedPizaa)
})
.then((orderStatus)=>{
    return recievePizza(orderStatus, selectedPizaa)
})
.then(()=>{
    console.log('Enjoy your pizza');
})
.catch((err)=>{
    console.log(err);
})

takingJokeFromServer()
.then((joke)=>{
    return translateJoke(joke);
}).then((translatedJoke)=>{
    return postJoke(translatedJoke);
}).then(()=>{
    console.log('Joke Posted Successfully');
}).catch(()=>{
    console.log('Error');
});



takingJokeFromServer((joke)=>{
    translateJoke(joke, ()=>{
        postJoke(translatedJoke,()=>{
            console.log('Joke Posted Successfully');
        });
    })
});






// console.log("Promises");
// Promises
// let p2 = new Promise((res, rej)=>{})
// p2.then()

// function makingPromise() {
//   let loggedIn = true;
//   let p1 = new Promise((res, rej) => {
//     if (loggedIn) {
//       setTimeout(() => {
//         res("Promise Fulfilled");
//       }, 2000);
//     } else {
//       rej("Promise Rejected");
//     }
//     // setTimeout(()=>{
//     //     res('success')
//     // }, 2000)
//   });
//   return p1;
// }
// console.log(makingPromise());


// let loggedIn = false;
// let p1 = new Promise((res, rej) => {
//   if (loggedIn) {
//     setTimeout(() => {
//       res("Promise Fulfilled");
//     }, 2000);
//   }else{
//     rej('Promise Rejected');
//   }
//   // setTimeout(()=>{
//   //     res('success')
//   // }, 2000)
// });
makingPromise().then((data) => {
  console.log(data);
}).catch((data) => {
  console.log(data);
});
