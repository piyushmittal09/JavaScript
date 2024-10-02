let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let carousel = document.querySelector(".carousel");
let slides = document.querySelectorAll(".slide");
let counter = 0;


const slideImage = () => {
  slides.forEach(
    (slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`
      slide.style.transition = "all 0.7s ease-in-out";
    }
  )
}

nextBtn.addEventListener("click", function(){
  counter++;
  slideImage();
})

prevBtn.addEventListener("click", function(){
  counter--;
  slideImage();
})