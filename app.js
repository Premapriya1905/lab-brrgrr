// Write your code on this file. Please don't change the existing code
// unless absolutely needed.
let patty=document.getElementById("patty");
let cheese=document.getElementById("cheese");
let tomatoes=document.getElementById("tomato");
let onions=document.getElementById("onion");
let lettuce=document.getElementById("lettuce");

var pattybutton=document.querySelector(".btn-patty");
var cheesebutton=document.querySelector(".btn-cheese");
var tomatoesbutton=document.querySelector(".btn-tomatoes");
var onionsbutton=document.querySelector(".btn-onions");
var lettucebutton=document.querySelector(".btn-lettuce");
var items = document.getElementsByClassName("items");
var Prize = document.getElementsByClassName("price-details")[0]
var price=0


//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  // renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.getElementById("patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese=document.getElementById("cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  } 
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes=document.getElementById("tomato");
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  } 
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions=document.getElementById("onion");
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  } 
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce=document.getElementById("lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  } 
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};



// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};



// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
if(state.Patty){
  pattybutton.classList.add("active")
  items[0].textContent="Patty"
}else{
  pattybutton.classList.remove("active")
  items[0].textContent=""
}

if(state.Cheese){
  cheesebutton.classList.add("active")
  items[1].textContent="Cheese"
}else{
  cheesebutton.classList.remove("active")
  items[1].textContent=""
}

if(state.Tomatoes){
  tomatoesbutton.classList.add("active")
  items[2].textContent="Tomatoes"
}else{
  tomatoesbutton.classList.remove("active")
  items[2].textContent=""
}

if(state.Onions){
  onionsbutton.classList.add("active")
  items[3].textContent="Onions"
}else{
  onionsbutton.classList.remove("active")
  items[3].textContent=""
}

if(state.Lettuce){
  lettucebutton.classList.add("active")
  items[4].textContent="Lettuce"
}else{
  lettucebutton.classList.remove("active")
  items[4].textContent=""
}
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  price=0
  if (state.Patty) {
    price+=40
  }

  if (state.Cheese) {
    price+=90
  }

  if (state.Tomatoes) {
    price+=30
  }

  if (state.Onions) {
    price+=60
  }

  if (state.Lettuce) {
    price+=20
  }
  Prize.textContent=`INR ${price+20}`
  console.log(Prize)
}
