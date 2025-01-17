// console.log("hello world!");
let btn = document.querySelector("button");
console.log(btn);
let textArea = document.getElementById("text_area");
// console.log(textArea.value);
let notes_container = document.getElementById("notes_container");
let color = document.getElementById("color");
let deleteAll = document.getElementById("delete_all");
let para = document.querySelector("#para");
// console.log(color.value);

function createNote() {
  if (textArea.value == "") {
    alert("Please enter some text");
    return;
  }

  let div = document.createElement("div");
  let p = document.createElement("p");
  let cross_btn = document.createElement("button");

  div.appendChild(p);
  div.appendChild(cross_btn);

  console.log(div);

  cross_btn.innerText = "X";
  div.style.backgroundColor = color.value;
  p.innerText = textArea.value;

  console.log(textArea.value);

  notes_container.appendChild(div);
  textArea.value = "";
  console.log(notes_container.childElementCount);

  cross_btn.addEventListener("click", function () {
    console.log(cross_btn);
    // div.style.display = "none";
    div.remove();
    if (notes_container.childElementCount === 0) {
      para.style.display = "block";
    }
    // console.log(notes_container.childElementCount);
  });

   para.style.display = "none";


}

btn.addEventListener("click", createNote);

deleteAll.addEventListener("click", () => {
  notes_container.innerHTML = "";
  para.style.display = "block";
  // window.location.reload();
});
