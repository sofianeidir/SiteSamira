let icone = document.getElementById('icone-remboursement');
let messageRemboursement = document.getElementById('InfoRemboursement');
let titreTarif = document.getElementById('titre-tarif');
let prixTarif = document.getElementById('prix-tarif');




icone.addEventListener('mouseover', (e)=> {
  titreTarif.style.display = 'none';
  prixTarif.style.display = 'none'
  messageRemboursement.style.display = 'block'

  setTimeout(function(){
    titreTarif.style.display = 'block';
    prixTarif.style.display = 'block'
    messageRemboursement.style.display = 'none'
  },6000)
}, false)
