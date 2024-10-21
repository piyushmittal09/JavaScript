let showColor = document.querySelector(".random-color-code");
let startBtn = document.querySelector(".startBtn");
let stopBtn = document.querySelector(".stopBtn");
let body = document.querySelector("body");
let intervalId;


const random = function(){

  let hex = "0123456789ABCDEF";
  let color = "#"

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
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