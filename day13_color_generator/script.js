let categoryFilter = document.getElementById("category-filter");
let productList = document.getElementById("product_list");

categoryFilter.addEventListener('change', function(){
    let selectedcategory = categoryFilter.value;
    console.log(selectedcategory);

    let productCategory = document.querySelectorAll(".product");
    console.log(productCategory);

    productCategory.forEach((product)=>{
        let phoneName = product.getAttribute('data-category');
        console.log(phoneName);
        
        if(selectedcategory === 'all' ||selectedcategory === phoneName){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }
    })
    
})






// let main = document.getElementById("mainContainer");

// for(let i=0;i<300;i++){
//     let singleDiv = document.createElement("div");
//     singleDiv.classList.add("color-container");
//     let Rcolor = randomColor();
//     singleDiv.innerText = Rcolor;
//     // singleDiv.style.height = "100px";
//     // singleDiv.style.width = "100px";
//     // singleDiv.style.margin = "10px";
//     // singleDiv.style.display = "inline-block";
//     singleDiv.style.backgroundColor = Rcolor;
//     main.appendChild(singleDiv);
//     // console.log(singleDiv);
// }
// console.log(main);


// function randomColor(){
//     let chars = "0123456789abcdef";
//     let hexColorLength = 6;
//     let color = "#";
//     for(let i=0;i<hexColorLength;i++){
//         let randomIndex = Math.floor(Math.random() * chars.length); 
//         color = color + chars[randomIndex];
//         console.log(color);    
//     }
//     return color;
// }
