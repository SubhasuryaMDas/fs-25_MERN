// Event Deligation
let div = document.querySelector('div');
div.addEventListener('click', function(e){
    // e.preventDefault();
    // storeDetailsinDb()
    // console.log(e);
    if(e.target.tagName === 'A'){
        if(e.target.outerText === 'Button 5'){
            console.log('Button 5 is clicked');
            window.location = e.target.href;
            return;
        }
        if(e.target.outerText === 'Button 4'){
            console.log('Button 5 is clicked');
            window.location = e.target.href;
            return;
        }
        console.log(e);
    }
    
    // if(e.target.tagName === 'DIV'){
    //     console.log(e.target.innerText);
    // }
})





// Normal method
// let buttons =  document.querySelectorAll("button");
// buttons.forEach((button)=>{
//     button.addEventListener('click', function(){
//         console.log(button.innerText);
//     })
// })





// let div1 = document.querySelector("#div1");
// let div2 = document.querySelector("#div2");
// let div3 = document.querySelector("#div3");

// div1.addEventListener('click', function(e){
//     console.log('Component 1 is clicked');
//     // e.stopPropagation();
// },true)

// div2.addEventListener('click', function(e){
//     console.log('Component 2 is clicked');
//     e.stopPropagation();
// },false)
// div3.addEventListener('click', function(e){
//     console.log('Component 3 is clicked');
//     // e.stopPropagation();
// },true)