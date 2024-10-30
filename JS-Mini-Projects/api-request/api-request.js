
const buttonEL = document.querySelector(".button");
const card = document.querySelector(".card");
const imageEL = document.querySelector(".image");
const name = document.querySelector(".name");
const githubLink = document.querySelector(".github-link");



buttonEL.addEventListener("click", function(){
  card.classList.remove("hidden");
  getData();
})

const Url = "https://api.github.com/users/piyushmittal09";


const getData = async()=>{
  console.log("Getting Data...");
  let response = await fetch(Url);
  let data = await response.json();
  console.log(data);
  let idName = data.name;
  name.innerHTML = `${idName}`;
  let githubUrl = data.html_url;
  githubLink.innerHTML = `${githubUrl}`;
  let imageAddress = data.avatar_url;
  imageEL.src = `${imageAddress}`;
}

// fetch(Url).then((response)=>{
//   return response.json()
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((error)=>{
//   console.log("Error");
// })