let teste = document.getElementById('oui');
let teste1 = document.getElementById('essaye');
let a = document.querySelectorAll('#barreInfo > a > li');
let accueil = document.getElementById('accueil')
let barreInfo = document.getElementById('barreInfoEspace')
let croix = document.getElementById('non')
let VousRencontrez = document.getElementById('VousRencontrez')
let body = document.querySelector('body')
let display = false;
var ticking = false;


teste.addEventListener('click',() => {
 if(!display){
  teste1.style.display = 'flex';
  teste1.style.flexDirection = 'column';
  teste1.style.justifyContent = "space-around";
  croix.style.display='flex';
  display = true;
 }else {
  teste1.style.display = 'none';
  croix.style.display = 'none';
  display = false;
 }

});

// CREER DES VARIABLE CAR TROP DE CODE DOUBLON !!!!!!!

non.addEventListener('click',() => {
  teste1.style.display = 'none';
  display = false;
  non.style.display = 'none';
});

accueil.addEventListener('click', ()=>{
  if (window.matchMedia("(max-width: 768px)").matches){
    teste1.style.display = 'none';
    display = false;
    non.style.display = 'none';
  }


});

barreInfo.addEventListener('click', ()=>{
  if (window.matchMedia("(max-width: 768px)").matches) {
    teste1.style.display = 'none';
    display = false;
    non.style.display = 'none';
  } else {
    teste1.style.display = 'flex'
  }
});

window.addEventListener('scroll', ()=>{
  if (window.matchMedia("(max-width: 768px)").matches) {
    teste1.style.display = 'none';
    display = false;
    non.style.display = 'none';
  }
});

window.addEventListener('resize', (e)=>{
  if (window.matchMedia("(min-width: 768px)").matches){
    location.reload()
  }
    })


 









