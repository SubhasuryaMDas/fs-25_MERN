function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  console.log(myFunc);
  
  myFunc();









// closures
// let h1=document.querySelector('h1');
// let btn = document.querySelector('#mybtn');
// function makeTextSizer(size){
//     function changeSize(){
//         h1.style.fontSize = `${size}px`;
//     }
//     return changeSize;
// }
// let siz100 = makeTextSizer(50);

// btn.addEventListener('click', siz100)

// function dollar(x){
//     return function(){
//         return x * 70.987;
//     }
// }
// let dollar70 = dollar(100);
// console.log(dollar70());




// function makeAdder(x){
//     return function(){
//         return x + 5;
//     }
// }

// let add5 = makeAdder(5);
// console.log(add5());



// console.log("Hello world!");
// function outer() {
//     let x = 10;
//     x++;
//     function inner() {
//         let y = 20;
//         --y;
//         ++x;
//         function innerMost() {
//             x++;
//             ++y;
//             let z = 30;
//             ++z;
//             console.log(x, y, z);
//         }
//         innerMost();
//     }
//     inner();
// }
// outer()
