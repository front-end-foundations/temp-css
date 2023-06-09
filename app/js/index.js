var API = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

fetch(API)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.querySelector(".quote").innerText = data[0];
  });

//  ====

const el = document.querySelector("h2");

const basilChefs = ["mama", "papa", "baby"];
const basilTexture = ["greasy", "frozen", "spicy"];

function random(array) {
  const max = array.length;
  const randomIndex = Math.floor(Math.random() * max);
  return array[randomIndex];
}

var recipeName = `${random(basilChefs)}'s ${random(basilTexture)} pesto`;

el.innerHTML = recipeName;

// ===

var modal = document.querySelector(".modal");
// var betaButton = document.querySelector('.beta');

function showPopover(event) {
  console.log(event.target);
  if (!event.target.matches(".beta")) return;
  modal.classList.toggle("open");
  event.preventDefault();
}

// betaButton.addEventListener('click', showPopover);
document.addEventListener("click", showPopover);
