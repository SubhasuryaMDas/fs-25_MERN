// console.log("Hello world!");
let fname = document.querySelector('.fname')
let lname = document.querySelector('.lname')
let pCountry = document.querySelector('.country')
let pScore = document.querySelector('.number')
let button = document.querySelector('button');
let section2 = document.querySelector('.section2');
let data = [];
// console.log(fname, lname, pCountry, pScore, button);

function editUser(idx){
    // data[idx];
    console.log(data[idx]);
    
    

}
function activateButtons(){
    let buttons = document.querySelectorAll(".cards");
    buttons.forEach((button, index)=>{
        console.log(button);
        
        button.addEventListener('click', function(e){
            console.log(e);
            
            if(e.target.className === 'del'){
                data.splice(index, 1);
                updateDataonUI();
            }
            if(e.target.className === 'but1'){
                data[index].score += 5;
                updateDataonUI();
            }
            if(e.target.className === 'but2'){
                data[index].score -= 5;
                updateDataonUI();
            }
            if(e.target.className === 'edit'){
                editUser(index);
            }

        })
    })
}

function getDate(){
    let date = new Date();
    let month = date.toLocaleString("deafult", {month:"short"});
    let day = date.getDate()
    let year = date.getFullYear();;
    let time = date.toLocaleTimeString();

    let finaldate = `${month} ${year}: ${time}`
    return finaldate.toUpperCase();
}
function updateDataonUI(){
    data.sort((p1,p2)=>{
        return p2.score - p1.score;
    });
    console.log(data);

let showData = "";
data.forEach((player)=>{
    showData += `
     <div class="cards">
    <span>${player.fname}</span>
    <span>${player.lname}</span>
    <span>${getDate()}</span>
    <span>${player.country}</span>
    <span>${player.score}</span>
    <button class="del">🗑</button>
    <button class="but1">+5</button>
    <button class="but2">-5</button>
    <button class="edit">Edit</button>
    </div>
    `;


    // section2.innerHTML = showData
})
section2.innerHTML = showData;
activateButtons();
    
}

button.addEventListener('click', (e)=>{
    e.preventDefault();
    if(fname.value==="" || lname.value==="" || pCountry.value=="" || pScore.value===""){
        alert("Please fill all fields");
        return;
    }else{
        let playerObj = {
            id:Date.now(),
            fname: fname.value,
            lname: lname.value,
            country: pCountry.value,
            score: parseInt(pScore.value)
        }

        data.push(playerObj);
        updateDataonUI();
        fname.value = "";
        lname.value = "";
        pCountry.value = "";
        pScore.value = "";
    }
    console.log(data);
})

