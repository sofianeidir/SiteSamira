let teste = document.getElementById('oui');
let teste1 = document.getElementById('essaye');
let a = document.querySelectorAll('#barreInfo > a > li');
let e = document.querySelector('a')
 console.log(a);


teste.addEventListener('click',() => {
  teste1.style.display = 'flex';
  teste1.style.flexDirection = 'column'
  teste1.style.justifyContent = "space-around"
  console.log("gg")
});




