let effect = document.getElementById('effect');
let container = document.querySelector('.container');
let like = document.querySelector('#effect-btn');

container.addEventListener("dblclick", function(){
    effect.style.transform = "translate(-50%, -50%) scale(2)";
    effect.style.opacity = 0.8
    like.classList.replace("ri-heart-line", "ri-heart-3-fill");
});

setTimeout(function(){
  effect.style.opacity = 0;
}, 2000);

setTimeout(function(){
  effect.style.transform = "translate(-50%, -50%) scale(0)";
}, 3000);