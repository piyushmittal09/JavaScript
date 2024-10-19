const inputEl = document.querySelector(".input");
const addBtn = document.querySelector(".Add");
const list = document.querySelector(".list");
const deleteBtn = document.querySelector(".Delete");

addBtn.addEventListener("click", ()=> {
  if(inputEl.value === ""){
    alert("give a value first.")
  } else{
    addItem();
  }
  
})

deleteBtn.addEventListener("click", ()=>{
  deleteItem();
})

function addItem() {
  var addLi = document.createElement("li");
  list.appendChild(addLi)
  addLi.textContent = inputEl.value;
}

function deleteItem() {
  list.removeChild(list.lastChild);
}