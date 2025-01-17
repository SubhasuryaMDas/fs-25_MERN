
let emoji_container = document.querySelector('#emoji_container');
let search_field = document.querySelector('#search_field');

function showEmojees(searchQuery){
// console.log(searchQuery);

    let filteredEmoji = emojiList.filter((emoji)=>{
        if(searchQuery === null){
            return true;
        }
        if(emoji.tags.includes(searchQuery) === true){
            return true;
        }
        if(emoji.aliases.includes(searchQuery) === true){
            return true;
        }
        if(emoji.description.indexOf(searchQuery)!== -1){
            return true;
        }
    })

    emoji_container.innerHTML = ""; // clear previous table rows
    // console.log(filteredEmoji);
    
    // console.log("heelo World!!");
    filteredEmoji.forEach(function(emoji){
        // console.log(emoji);
        let new_row = document.createElement("tr");
        let new_emojii = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_description = document.createElement("td");

        new_emojii.innerText = emoji.emoji;
        new_aliases.innerText = emoji.aliases;
        new_description.innerText = emoji.description;

        new_row.appendChild(new_emojii);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_description);

        // console.log(new_row);
        emoji_container.appendChild(new_row);
        
    })
}



window.addEventListener('load', showEmojees(null));
search_field.addEventListener('keyup', (e)=>{
    console.log(e);
    
    let value = search_field.value.toLowerCase();
    // console.log(value);
    showEmojees(value);
})

// let emoji_container = document.querySelector('#emoji_container');

// function showEmojees() {
//     let rows = emojiList.map(emoji => `
//         <tr>
//             <td>${emoji.emoji}</td>
//             <td>${emoji.aliases}</td>
//             <td>${emoji.description}</td>
//         </tr>
//     `).join('');
    
//     emoji_container.innerHTML = rows;
// }

// window.addEventListener('load', showEmojees);
