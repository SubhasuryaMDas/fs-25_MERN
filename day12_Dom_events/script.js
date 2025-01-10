//  counter project
let increment = document.querySelector('#increment')

let decrement = document.querySelector('#decrement')

let display = document.querySelector('#data');

console.log(increment, decrement,display);

let quantity = 1;

increment.addEventListener('click', ()=>{
    quantity++;
    // console.log(quantity);
    display.innerText = quantity;
})

decrement.addEventListener('click', ()=>{
    if(quantity > 1){
        quantity--;
        // console.log(quantity);
        display.innerText = quantity;
    }
})





// Events
// keyboard events:- keypress, keydown, keyup
// ÷



// let div = document.querySelector('#div1');
// console.log(div);

// mouse events
// div.addEventListener('contextmenu', function(){
//     console.log('Mouse leave Event is triggered');
// })


// let btn = document.querySelector("#btn1");
// btn.addEventListener("click", function(){
//     alert("btn is clicked");
// })

// btn.addEventListener("mouseover",function(){
//     console.log("btn is clicked");
// })

// console.log(btn);










// let naElement = document.querySelector('nav');
// console.log(naElement.innerHTML);

// let str = "bsdvjsvjgsjf sjfg jasgfjsagfjsdgfjsadgfjfsagfjs"

// let div = document.querySelector('#div1');
// // // console.log(div);

// div.innerHTML = `<p>${str}</p>`;

// console.log(div);


// console.log("Hello world!");

// let threePara = document.querySelectorAll(".para");
// threePara[1].innerText = "Hello world!";
// console.log(threePara);


// threePara[1].style.color = "green";
// threePara[1].style.fontSize = "50px";
// threePara[1].style.backgroundColor = "black";
