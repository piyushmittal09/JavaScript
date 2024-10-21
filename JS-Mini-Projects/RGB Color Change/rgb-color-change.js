let showColor = document.querySelector(".random-color-code");
let startBtn = document.querySelector(".startBtn");
let stopBtn = document.querySelector(".stopBtn");
let body = document.querySelector("body");
let intervalId;


// background: rgb(red, green, blue);

let random = function(){

  let red = Math.floor(Math.random() * 255)
console.log(red);

let green = Math.floor(Math.random() * 255)
console.log(green);

let blue = Math.floor(Math.random() * 255)
console.log(blue);

let transparancy =  Math.round((Math.random() * 0.9 + 0.1) * 100) / 100;
console.log(transparancy);

let rgb = `rgb(${red}, ${green}, ${blue}, ${transparancy})`;
console.log(rgb);

return rgb;
}

showColor.innerHTML = random()
console.log(random());

 const startChangingColor = function(){
  
  let changeBgColor = function(){
    body.style.backgroundColor = random();
    showColor.innerHTML = random()
  }
  intervalId = setInterval(changeBgColor, 1000);
 
 }


 const stopChangingColor = function(){
  clearInterval(intervalId);
 }

 startBtn.addEventListener("click", function(){
  startChangingColor()
  showColor.innerHTML = random()
})

stopBtn.addEventListener("click", function(){
  stopChangingColor();
})

body.style.backgroundColor = random();