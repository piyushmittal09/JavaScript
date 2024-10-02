let questionEL = document.querySelector(".question");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
let answerEL = document.querySelector(".answer");
let skipEL = document.querySelector(".skip");

let render = [{
  question: "Which is the smallest value ?",
  option1: 9,
  option2: 5,
  option3: 4,
  option4: 2,
  answer: 2 
}, 
{
  question: "which is the sweetest fruit ?",
  option1: "Apple",
  option2: "Mango",
  option3: "Pineapple",
  option4: "Grape",
  answer: "Mango" 
}, 
{
  question: "which is the tallest building in india ?",
  option1: "Palaise Royale",
  option2: "The park, Lodha parkside",
  option3: "Trump Tower, Mumbai",
  option4: "Lodha Marquise",
  answer: "Palaise Royale" 
},
{
  question: "what is the average male height ?",
  option1: "5 feet 7.5 inches",
  option2: "5 feet 2.5 inches",
  option3: "4 feet 7.5 inches",
  option4: "4 feet 2.5 inches",
  answer: "5 feet 7.5 inches" 
},
{
  question: "which is the most popular city in india ?",
  option1: "Mumbai",
  option2: "Kolkata",
  option3: "Pune",
  option4: "Bengaluru",
  answer: "Mumbai"
}]

// let keys = Object.keys(render);
// let logic = Math.floor(Math.random() * keys.length);
// let randomKey = keys[logic];
// let randomValue = render[randomKey];
// console.log(randomValue); 


// questionEL.innerHTML = `${randomValue.question}`

function getRandomQuestion(render) {
  const randomIndex = Math.floor(Math.random() * render.length);
  return render[randomIndex];
}

const randomQuestion = getRandomQuestion(render);
console.log(randomQuestion);

questionEL.innerHTML = `${randomQuestion.question}`;
option1.innerHTML = `${randomQuestion.option1}`;
option2.innerHTML = `${randomQuestion.option2}`;
option3.innerHTML = `${randomQuestion.option3}`;
option4.innerHTML = `${randomQuestion.option4}`;

option1.addEventListener("click", function(){
  if(option1.innerHTML == randomQuestion.answer){
    answerEL.innerHTML = `You Are Correct! The Answer is ${randomQuestion.answer}`;
  } else{
    answerEL.innerHTML = `Sorry, The Correct Answer is ${randomQuestion.answer}`
  }
});

option2.addEventListener("click", function(){
  if(option2.innerHTML == randomQuestion.answer){
    answerEL.innerHTML = `You Are Correct! The Answer is ${randomQuestion.answer}`;
  } else{
    answerEL.innerHTML = `Sorry, The Correct Answer is ${randomQuestion.answer}`
  }
});

option3.addEventListener("click", function(){
  if(option3.innerHTML == randomQuestion.answer){
    answerEL.innerHTML = `You Are Correct! The Answer is ${randomQuestion.answer}`;
  } else{
    answerEL.innerHTML = `Sorry, The Correct Answer is ${randomQuestion.answer}`
  }
});

option4.addEventListener("click", function(){
  if(option4.innerHTML == randomQuestion.answer){
    answerEL.innerHTML = `You Are Correct! The Answer is ${randomQuestion.answer}`;
  } else{
    answerEL.innerHTML = `Sorry, The Correct Answer is ${randomQuestion.answer}`
  }
});


skipEL.addEventListener("click", function(){
  location.reload();
})