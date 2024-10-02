let togglediv = document.querySelector(".toggle");
let togglebtn = document.querySelector(".togglebtn");
let root_theme = document.querySelector(':root');
let card = document.querySelector(".card");
let count = 0;

togglediv.addEventListener("click", function(){
  if (count == 0) {
    root_theme.style.setProperty('--dark-primary-color', '#ffffff');
    root_theme.style.setProperty('--secondary-color', '#222222');
    togglebtn.style.left = "30px";
    togglebtn.style.transition = "all .5s ease-in-out";
    card.style.boxShadow = "0px 0px 10px black";
    count = 1;
  } else {
    root_theme.style.setProperty('--dark-primary-color', '#000000');
    root_theme.style.setProperty('--secondary-color', '#f5f5f5');
    togglebtn.style.left = "3px";
    togglebtn.style.transition = "all .5s ease-in-out";
    count = 0;
  }
})

