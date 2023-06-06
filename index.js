let teste = document.getElementById('oui');
let teste1 = document.getElementById('essaye');
let a = document.querySelectorAll('#barreInfo > a > li');
let e = document.querySelector('a')
let croix = document.getElementById('non')
let display = false;

teste.addEventListener('click',() => {
 if(!display){
  teste1.style.display = 'flex';
  teste1.style.flexDirection = 'column';
  teste1.style.justifyContent = "space-around";
  croix.style.display='flex';
  display = true;
 }else{
  teste1.style.display = 'none';
  croix.style.display = 'none';
  display = false;
 }
});

non.addEventListener('click',() => {
  teste1.style.display = 'none';
  non.style.display = 'none';
})




