buttons = document.querySelectorAll("button");
body = document.querySelector("body");

buttons.forEach(function(button) {
  button.addEventListener("click", function(e){
    const buttonColor = button.id;
    body.style.backgroundColor = buttonColor;
    console.log("button clicked");
    e.stopPropagation();
  })
});

body.addEventListener("click", function(e){
  body.style.backgroundColor = "white";
  console.log("body clicked");
  e.preventDefault()
})