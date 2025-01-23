// choosePizaa -> placeOrder -> recievePizza

function choosePizza(cb){
    setTimeout(()=>{
        let selectedPizaa = 'FarmHouse Pizza';
        console.log(`step 1: choose ${selectedPizaa} is done`);
        cb(selectedPizaa)
    },1000)
}
// step 2
function placeOrder(pizza, cb){
    setTimeout(()=>{
        let orderStatus = 'Order Placed'
        console.log(`step 2: ${orderStatus}`);
        cb(orderStatus, pizza)
    },1500)
}
// step 3
function recievePizza(pizza){
    setTimeout(()=>{
        // console.log(`Step3: 4 ${orderStatus}`);
        console.log(`Enjoy your ${pizza}`);
    },2000)
}
let orderButton = document.getElementById("orderBtn");
orderButton.addEventListener('click', ()=>{
    console.log('Start ordering the pizza please !!!!!!');

    choosePizza((selectedPizaa)=>{
        placeOrder(selectedPizaa, (orderStatus, pizza)=>{
            recievePizza(orderStatus, pizza)
        })
    })
    
})









// function takingJokeFromServer(cb){
//     // will fetch the joke from japan joke api server
//     // cb()
// }

// function translateJoke(joke){
//     // will translate the joke to hindi
// }

// function postJoke(translatedJoke){
//     // will post the joke to a joke sharing website
// }

// // takingJokeFromServer();

// takingJokeFromServer((joke)=>{
//     // console.log(joke);
//     translateJoke(joke, ()=>{
//         // console.log(translatedJoke);
//         postJoke(translatedJoke,()=>{
//             console.log('Joke Posted Successfully');
//         });
//     })
// });

// console.log("Script Started...");
// setTimeout(()=>{
//     console.log('SetTimeout 1 started');

//     setTimeout(()=>{
//         console.log('Nested Timeout inside timeout 1');
//     }, 0)
    
//     console.log('settimeout ended...');
    
// },100)

// console.log("Script Ended...");


// console.log("starting...");
// setTimeout(()=>{
//     console.log("timer 1");
// },0)
// setTimeout(()=>{
//     console.log("timer 2");
// },0)
// setTimeout(()=>{
//     console.log("timer 3");
// },0)
// function end(){
//     console.log('end from javascript');
// }
// end();
// console.log('ending...');
