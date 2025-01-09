let h1 = document.querySelector('#head1');
console.log(h1);
h1.addEventListener('click', ()=>{
    h1.style.color = "cyan";
    h1.style.backgroundColor = "red"
    h1.style.margin = "100px"
})

NodeList.forEach((ele)=>{
    ele.style.color = "cyan";
})







// console.log("DOM onready");
// let h1 = document.getElementById("head1");
// // let para = document.getElementsByClassName("para");
// let p = document.getElementsByTagName('p')
// let paragraph = document.querySelectorAll('p')
// let htmlCollectionToArray = Array.from(paragraph)
// console.log(paragraph);
// console.log(htmlCollectionToArray);

// let input = document.querySelector('input[type="color"]');
// console.log(input);


// console.log(p[9]);

// console.log(h1);


