let icone = document.getElementById('icone-remboursement');
let messageRemboursement = document.getElementById('InfoRemboursement');
let titreTarif = document.getElementById('titre-tarif');
let prixTarif = document.getElementById('prix-tarif');
let divInfoCarte = document.getElementById('HoverRemboursement');
let containerTarif = document.getElementById('container-tarif');
let InfoCartes = document.getElementsByClassName('div-Infos-carte');
let divExplicationsCarte = document.getElementsByTagName('div-Explications-carte > p')
let divExplications = document.getElementById('div-Explications');
let iconePlus = document.getElementsByClassName('fa-solid fa-square-plus');
display = 0;


// icone.addEventListener('click', ()=> {
//   messageRemboursement.style.display = 'block';
//   divInfoCarte.style.backgroundColor = '#d7f3f51a'
//   divInfoCarte.style.border ='#d7f3f51a'



//   setTimeout(function(){
//     messageRemboursement.style.display = 'none'
//     divInfoCarte.style.backgroundColor = 'white'
//   },8000)
// }, false)

let modalitePaiement = document.getElementById('modalitePaiement');


//teste opacity
let divInfos = document.getElementById('div-Infos');

function Informations(){

  if (display == 0) {
    messageRemboursement.style.display ='block';
    
    
    // divInfoCarte.style.backgroundColor = '#d7f3f51a';
    // divInfoCarte.style.border ='#d7f3f51a';
    divExplications.style.opacity = '0.1';
    //test 
    for(let i = 0; i < 3; i++){
      InfoCartes[i].style.backgroundColor = '#d7f3f51a';
      InfoCartes[i].style.border ='#d7f3f51a';
    }
    
    display = 1;  
    if(window.matchMedia("(max-width: 950px)").matches){ //821
      modalitePaiement.style.opacity = '0';
    }
  } 
  else {
      
    messageRemboursement.style.display ='none';
          // divInfoCarte.style.backgroundColor = 'white';
          //   divInfoCarte.style.border ='white';
            modalitePaiement.style.opacity = '1';
            divExplications.style.opacity = '1'
            //test
            for(let i = 0; i < 3; i++){
              InfoCartes[i].style.backgroundColor = 'white';
              InfoCartes[i].style.border ='white';
            }
            display = 0;
  }
  // if(window.matchMedia("(max-width: 821px)").matches){
   
  //   if(display==0){
  //     modalitePaiement.style.opacity = '0';

  //   } else {
  //     modalitePaiement.style.opacity = '1';

  //   }
  // } 

  window.addEventListener('scroll', ()=>{
    messageRemboursement.style.display ='none';
      divInfoCarte.style.backgroundColor = 'white';
      divInfoCarte.style.border ='white';
      modalitePaiement.style.opacity = '1'
      divExplications.style.opacity = '1'
      //test
      for(let i = 0; i < 3; i++){
        InfoCartes[i].style.backgroundColor = 'white';
        InfoCartes[i].style.border ='white';
      }
      display = 0;
    if (window.matchMedia("(max-width: 950px)").matches) { //821
      messageRemboursement.style.display ='none';
      divInfoCarte.style.backgroundColor = 'white';
      divInfoCarte.style.border ='white';
      modalitePaiement.style.opacity = '1'
      display = 0;
    }
  });


  // SI en version mobile 

  // if ( window.matchMedia("(max-width: 821px)").matches && display == 0 ){
  //   messageRemboursement.style.display ='block';
  //   divInfoCarte.style.backgroundColor = '#d7f3f51a';
  //   divInfoCarte.style.border ='#d7f3f51a';
     

  //     display = 1;

  // }
  // else {
  //   messageRemboursement.style.display ='none';
  //   divInfoCarte.style.backgroundColor = 'white';
  //     divInfoCarte.style.border ='white';
  //           display = 0;
  // }

}



// JE PEUX METTRE TOUT DANS LA MÊME FONTION POUR EVITER BEAUCOUP DE CODE AVEC ADDEVENTLISTENER

let premierParagraphe = document.getElementById('premierParagraphe');
let premierP = document.getElementById('premierP');
let boutonPlusUn = document.getElementById('boutonPlusUn')



//  function MoreInformation(){

//   if (window.matchMedia("(max-width: 821px)").matches ){


//   if(display == 0 || display == 1 || display == 2){
//     premierP.style.display = 'block';
//     premierParagraphe.style.height = '70vh';
//     containerTarif.style.height = '90em'
//     boutonPlusUn.style.display = 'none'
//     display = 1;
//   } else {
//     premierP.style.display = 'none';
//     premierParagraphe.style.height = '23%'
//     // premierParagraphe.style.height = '0';
//     containerTarif.style.height = '360em'
//     boutonPlusUn.style.display = 'block'
//     display = 0

//   }
  
//   }

// };

let deuxiemeParagraphe = document.getElementById('deuxiemeParagraphe');
let deuxiemeP = document.getElementById('deuxiemeP');
let boutonPlusDeux = document.getElementById('boutonPlusDeux');

// function MoreInformationSecond(){

//   if (window.matchMedia("(max-width: 821px)").matches ){

//   if(display == 0 || display == 1 || display == 2){
//     deuxiemeP.style.display = 'block';
//     deuxiemeParagraphe.style.height = '70vh';
//     containerTarif.style.height = '90em' 
//     boutonPlusDeux.style.display = 'none';
//     display = 1;
//   } else {
//     deuxiemeP.style.display = 'none';
//     deuxiemeParagraphe.style.height = '23%'
//     // premierParagraphe.style.height = '0';
//     containerTarif.style.height = '360em';
//     boutonPlusDeux.style.display = 'block';
//     display =0
//   }
//   }
// }

let troisiemeParagraphe = document.getElementById('troisiemeParagraphe');
let troisiemeP = document.getElementById('troisiemeP');
let boutonPlusTrois = document.getElementById('boutonPlusTrois');
let boutonMoinsUn = document.getElementById('boutonMoinsUn');
let boutonMoinsDeux = document.getElementById('boutonMoinsDeux');
let boutonMoinsTrois = document.getElementById('boutonMoinsTrois');

// function MoreInformationTroisieme(){

//   if (window.matchMedia("(max-width: 821px)").matches ){

//   if(display == 0 || display == 1 || display == 2){
//     troisiemeP.style.display = 'block';
//     troisiemeParagraphe.style.height = '70vh';
//     containerTarif.style.height = '90em' 
//     boutonPlusTrois.style.display = 'none';
//     display = 1;
//   } else {
//     troisiemeP.style.display = 'none';
//     troisiemeParagraphe.style.height = '23%'
//     // premierParagraphe.style.height = '0';
//     containerTarif.style.height = '360em';
//     boutonPlusTrois.style.display = 'contents';
//     display = 0
//   }
//   }
// }

 
// avec addevent listener


if(window.matchMedia("(max-width: 950px)").matches){   /// cetait 821

    boutonPlusUn.addEventListener('click', () =>{
      premierP.style.display = 'block';
      premierParagraphe.style.height = '100%'; // voir si ici sa marche en mobile .... 70vh 
      containerTarif.style.height = 'auto' //87em
      boutonPlusUn.style.display = 'none'
   // pour que sa ferme automatiquement les autres :
      deuxiemeP.style.display = 'none';
      troisiemeP.style.display = 'none';
      boutonPlusDeux.style.display = 'contents';
      boutonPlusTrois.style.display = 'contents';

      //teste 
      deuxiemeParagraphe.style.height = '21%';
      troisiemeParagraphe.style.height = '21%';

  
    });
    
    boutonMoinsUn.addEventListener('click', ()=> {
      premierP.style.display = 'none';
      premierParagraphe.style.height = '21%'
      containerTarif.style.height = '1000px' // 60em
      boutonPlusUn.style.display = 'contents'
    
    })
    
    boutonPlusDeux.addEventListener('click', ()=> {
      deuxiemeP.style.display = 'block';
      deuxiemeParagraphe.style.height = '100%';
      containerTarif.style.height = 'auto'  // 82em
      boutonPlusDeux.style.display = 'none';
      // pour que sa ferme automatiquement les autres :
      premierP.style.display = 'none';
      troisiemeP.style.display = 'none';
      boutonPlusUn.style.display = 'contents'
      boutonPlusTrois.style.display = 'contents';

      //teste 
      premierParagraphe.style.height = '21%';
       troisiemeParagraphe.style.height = '21%';

     
      
    });
    
    boutonMoinsDeux.addEventListener('click', () => {
    
      deuxiemeP.style.display = 'none';
      deuxiemeParagraphe.style.height = '21%'
      containerTarif.style.height = '1000px';
      boutonPlusDeux.style.display = 'contents';
    });
    
    boutonPlusTrois.addEventListener('click', () => {
      troisiemeP.style.display = 'block';   // c'était block pour les 3333333
      troisiemeParagraphe.style.height = '100%';
      containerTarif.style.height = 'auto' // 82em
      boutonPlusTrois.style.display = 'none';

      // pour que sa ferme automatiquement les autres :
      premierP.style.display = 'none';
      deuxiemeP.style.display = 'none';
      boutonPlusDeux.style.display = 'contents';
      boutonPlusUn.style.display = 'contents'

      //teste 
      premierParagraphe.style.height = '21%';
       deuxiemeParagraphe.style.height = '21%'
    
    });
    
    boutonMoinsTrois.addEventListener('click', () => {
      troisiemeP.style.display = 'none';
      troisiemeParagraphe.style.height = '21%'
      containerTarif.style.height = '1000px';
      boutonPlusTrois.style.display = 'contents';
    
    })
  }
















  /////////////////////////////ECRAN MOINS GRAND EN HAUTEUR
  // if (window.matchMedia("(max-height: 800px)").matches ){

  //   boutonPlusUn.addEventListener('click', () =>{
  //     premierP.style.display = 'block';
  //     premierParagraphe.style.height = '100%'; //90vh
  //     containerTarif.style.height = '1300px' //83em
  //     boutonPlusUn.style.display = 'none'
  //  // pour que sa ferme automatiquement les autres :
  //     deuxiemeP.style.display = 'none';
  //     troisiemeP.style.display = 'none';
  //     boutonPlusDeux.style.display = 'contents';
  //     boutonPlusTrois.style.display = 'contents';

  //     //teste
  //     troisiemeParagraphe.style.height = '20%' ;
  //     deuxiemeParagraphe.style.height = '20%';
  
  //   });
    
  //   boutonMoinsUn.addEventListener('click', ()=> {
  //     premierP.style.display = 'none';
  //     premierParagraphe.style.height = '20%'
  //     containerTarif.style.height = '950px'
  //     boutonPlusUn.style.display = 'contents'
    
  //   })
    
  //   boutonPlusDeux.addEventListener('click', ()=> {
  //     deuxiemeP.style.display = 'block';
  //     deuxiemeParagraphe.style.height = '100%'; //90vh
  //     containerTarif.style.height = '1250px' //80em
  //     boutonPlusDeux.style.display = 'none';
  //     // pour que sa ferme automatiquement les autres :
  //     premierP.style.display = 'none';
  //     troisiemeP.style.display = 'none';
  //     boutonPlusUn.style.display = 'contents'
  //     boutonPlusTrois.style.display = 'contents';

  //     //teste
  //     premierParagraphe.style.height = '20%'; 
  //      troisiemeParagraphe.style.height = '20%' ;
     
      
  //   });
    
  //   boutonMoinsDeux.addEventListener('click', () => {
    
  //     deuxiemeP.style.display = 'none';
  //     deuxiemeParagraphe.style.height = '20%'
  //     containerTarif.style.height = '950px';
  //     boutonPlusDeux.style.display = 'contents';
  //   });
    
  //   boutonPlusTrois.addEventListener('click', () => {
  //     troisiemeP.style.display = 'block';
  //     troisiemeParagraphe.style.height = '100%'; //90vh
  //     containerTarif.style.height = '1300px' //83em
  //     boutonPlusTrois.style.display = 'none';

  //     // pour que sa ferme automatiquement les autres :
  //     premierP.style.display = 'none';
  //     deuxiemeP.style.display = 'none';
  //     boutonPlusDeux.style.display = 'contents';
  //     boutonPlusUn.style.display = 'contents'

  //     //teste

  //       deuxiemeParagraphe.style.height = '20%';
  //     premierParagraphe.style.height = '20%'
    
  //   });
    
  //   boutonMoinsTrois.addEventListener('click', () => {
  //     troisiemeP.style.display = 'none';
  //     troisiemeParagraphe.style.height = '20%'
  //     containerTarif.style.height = '950px';
  //     boutonPlusTrois.style.display = 'contents';
    
  //   })
    
  // }




