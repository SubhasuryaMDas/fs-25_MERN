// // JSON:- Javascript object notation
// let obj = `
// {
//     "name": "XYZ",
//     "score":60,
//     "isSelected":false,
//     "license": null,
//     "shopItem":["food", "clothes"],
//     "myObj":{
//         "name": "Akhil",
//         "age": 25
//     }
// }
// `;
let JsObj = {
  name: "XYZ",
  score: 60,
  isSelected: false,
  license: null,
  shopItem: ["food", "clothes"],
  myObj: { name: "Akhil", age: 25 },
};
console.log(JSON.stringify(JsObj));

const product = {
    name: 'Vivo V40pro',
    "priceOfPhone": 79999,
    brand: 'Vivo',
    color: ["Black", "White","Red"],
    quantity: 10,
    description: 'A powerful smartphone with 6GB RAM and 128GB storage.',
    reviews:[
        {rating: 4, comment: 'Good phone'},
        {rating: 5, comment: 'Excellent phone'},
        {rating: 3, comment: 'Average phone'},
        {rating: 4, comment: 'Great phone'}
    ],
    availiability:true,
}

for(let key in product.reviews[3]){
    console.log(product.reviews[3][key]);
}
// let keyss = Object.values(product);
// console.log(keyss);

// for(let key in product.brand) {
//     console.log(key , product.brand[key]);
// }

// console.log(product.reviews[1].comment);

// let obj = {};

// let propertyName = 'name';

// let person = {
//     'name': 'John',
// }
// console.log(person[propertyName]); // console.log(person['name']);
// console.log(person.propertyName);

// let userDetails = {
//     name:"Sam",
//     id:20,
//     salary:30,
//     age:40
// }

// let akhil = ["Akhil", 10, 20, 40];

// let name = "Akhil";
// let id = 10000;
// let salary = 20000;
