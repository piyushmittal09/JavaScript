let add = document.getElementById('add');
let status = document.getElementById('status');
let count = 0;

add.addEventListener("click", function(){
  if (count == 0) {
    add.innerHTML = "Remove Friend"
    add.style.backgroundColor = "green"
    status.innerHTML = "Friends"
    status.style.color = "green"
    count = 1
    
  }
  else {
    add.innerHTML = "Add Friend"
    status.innerHTML = "Stranger"
    count = 0
    add.style = ""
    status.style = ""
  }
})
