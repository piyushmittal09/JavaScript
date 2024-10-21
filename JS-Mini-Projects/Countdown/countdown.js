let counter = document.querySelector(".count");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");


// var startTimer = setInterval(myTimer, 1000);

// function myTimer(){
//   counter.innerHTML++;
// }

let startTimer;


// startBtn.addEventListener("click", function(){
//    startTimer = setInterval(function(){
//     counter.innerHTML++;
//   }, 1000)
// })


startBtn.addEventListener("click", function(){
   startTimer = setInterval(add, 1000);

  function add(){
    counter.innerHTML++;
  };
});


stopBtn.addEventListener("click", function(){
  clearInterval(startTimer);
})