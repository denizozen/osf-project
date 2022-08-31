const storageType = localStorage;
const consentPropertyName = "osf_consent";

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  const consentPopup = document.getElementById('consent-popup');
  const acceptBtn = document.getElementById('accept');

  const acceptFn = event => {
    saveToStorage(storageType);
    consentPopup.classList.add('hidden');
  }
  acceptBtn.addEventListener('click', acceptFn);

  if (shouldShowPopup()) {
    setTimeout(() =>{
      consentPopup.classList.remove('hidden');
    }, 10000);
  }
}

var popup = document.getElementById('pop-up-sign-in');
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}

let servicesButton = document.getElementById('services-but');
let megaMenu = document.getElementById('mega-box');
servicesButton.addEventListener('click', () => {
  if(megaMenu.style.display == "none"){
    megaMenu.style.display = "block";
  }
  else{
    megaMenu.style.display = "none";
  }
});
let firstCol = document.getElementById('first-column-mega');
let productButton = document.getElementById('product-cat');
productButton.addEventListener('click', () => {
  if(firstCol.style.display == "none"){
    firstCol.style.display = "flex";
  }
  else{
    firstCol.style.display = "none";
  }
});

let sale = document.getElementById('sale');
let saleButton = document.getElementById('sale-but');
saleButton.addEventListener('click', () => {
  if(sale.style.display == "none"){
    sale.style.display = "flex";
  }
  else{
    sale.style.display = "none";
  }
});



function findYear(){
  document.getElementById("specific-year").innerHTML = new Date().getFullYear();
}

findYear();

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
})


$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    popup.style.display = "none";
  }
})


/* BUTTONS */
function myFunction() {
  let x = document.getElementById("contact-info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction2() {
  let x = document.getElementById("categories-info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function hideCookies() {
  let x = document.getElementById("consent-popup");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function myFunction3() {
  let x = document.getElementById("about-info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function loadButton(){
  let x = document.getElementById("button-more");
  let y = document.getElementById("button-less");
  let z = document.getElementById("load-more-content");
  if(x.style.display == "block"){
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "grid";
  }
  else{
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  }
}

function Hide(){
  let x = document.getElementById("filters");
  let y = document.getElementById("hidefilter");
  let z = document.getElementById("showfilter");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";

  } else {
    x.style.display = "flex";
    y.style.display = "block";
    z.style.display = "none";
  }
}

function signIn(){
  let a = document.getElementById('pop-up-sign-in')
  if(a.style.display == "block"){
    a.style.display = "none";
  }
  else{
    a.style.display = "block";
  }
}
const visibilityToggle = document.querySelector('.visibility');
const input = document.querySelector('.password-segment input');

var password = true;
visibilityToggle.addEventListener('click', function() {
  if(password){
    input.setAttribute('type', 'text');
    visibilityToggle.innerHTML = 'visibility';
  }
  else{
    input.setAttribute('type', 'password');
    visibilityToggle.innerHTML = 'visibility_off';
  }
  password = !password;
});
