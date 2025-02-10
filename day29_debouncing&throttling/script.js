let input = document.getElementById("movie_search");

let timer;

input.addEventListener("keydown", () => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(async () => {
    let data = await fetch(`https://www.omdbapi.com/?apikey=87267107&s=${input.value}&page=10`);
    let results = await data.json();
    
    console.log("Total Movies:", results); // Debugging step

    // Ensure results.Search exists
    if (results.Search) {
      document.getElementById("movie_results").innerHTML = 
        results.Search.map((movie) => 
          `<div>
            <div>${movie.Title}</div> 
            <img src="${movie.Poster}" alt="${movie.Title}" />
          </div>`).join('');
    }
  }, 2000);
});

// async function fetchData(){
//     let data = await fetch("https://www.omdbapi.com/?apikey=87267107&s=dil");
//     let results = await data.json();
//     console.log(results);
// }
// fetchData()

// thorttling
// function myThrottle(func, delay){
//     return function(){
//         document.getElementById("my_btn").disabled = true;
//         setTimeout(()=>{
//             func(3,45)
//         }, delay)
//     }
// }

// let newFun = myThrottle((a,b)=>{
//     document.getElementById("my_btn").disabled = false;
//     console.log(a,b)
// },3000)
// console.log(newFun);

// debouncing
// let counter = 0;
// function count(){
//     console.log("encountered " , counter++);
// }

// function myDebounceFunction(func, timeDelay){
//     let timer;
//     return function(){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             func();
//         },timeDelay)
//     }
// }

// let betterFunction = myDebounceFunction(count,1000);
// console.log(betterFunction);
