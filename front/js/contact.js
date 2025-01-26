// création variables
let formulaire = document.getElementById("form");
let parent = document.body; 
let messageEmit = document.getElementById('message_post');
let titreContact = document.getElementById('titre_contact');
let bouton = document.getElementById('button');
let spinner = document.getElementById('spinner');
let valEmail = document.getElementById('email');
let email = document.getElementById('email');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let nom = document.getElementById('name');
let mail = document.getElementById('email');
let message = document.getElementById('message');
let input = document.getElementsByClassName('input-color');
let champName = document.getElementById('champ_Name');
let champ_Email = document.getElementById('champ_Email');
let champ_Message = document.getElementById('champ_Message');
const serviceID = "service_9nox97p";
const templateID = "template_jgme03a";



// suppression éléments html quand pas besoin avant appel de la fontion 
champName.style.display ='none';
champ_Email.style.display ='none';
champ_Message.style.display ='none'
messageEmit.style.display = 'none';
spinner.style.display ='none';


// Ecoute click bouton 
bouton.addEventListener('click', () => {
    
    if((document.getElementById("name").value != "") 
    && (document.getElementById("message").value != "") && pattern.test(valEmail.value)
){
    
    bouton.style.display = "none";
    titreContact.style.display = 'none';
    formulaire.style.display = 'none'
    spinner.style.display ='';
}
})

// Ecoute champ formulaire :
nom.addEventListener('input',()=> {
    let value = nom.value
    if(value != ''){
        nom.style.backgroundColor = 'white'
        champName.style.display = 'none';
    }
});

email.addEventListener('input',()=> {
    let value = email.value
    if(value != '' && pattern.test(valEmail.value)){
        email.style.backgroundColor = 'white';
        email.style.color = ('green');
        champ_Email.style.display = 'none';
    } else {
        email.style.color = ('red') ;
        email.style.backgroundColor = 'white';

    }
});

message.addEventListener('input',()=> {
    let value = message.value
    if(value != ''){
        message.style.backgroundColor = 'white';
        champ_Message.style.display = 'none';
    }
});
// Fonctions : 
function valideChamps () {
    
     if(document.getElementById("name").value === ""){
        nom.style.backgroundColor = 'rgb(220, 73, 73)'
        champName.style.display = ''
        champName.style.color = 'red';

    } else {
        champName.style.display = 'none';
        nom.style.backgroundColor = 'white';
        nom.style.color = 'green'
    }
    // if (document.getElementById("email").value === '' || document.getElementById("email").value != pattern ){
    //     champ_Email.style.display = '';
    //     champ_Email.style.color = 'red';
    //     mail.style.backgroundColor = 'red';
    // }else {
    //     champ_Email.style.display = 'none';
    //     mail.style.backgroundColor = 'white';
    //     mail.style.color = 'green';
    // }
    if(pattern.test(valEmail.value)){
        champ_Email.style.display = 'none';
        mail.style.backgroundColor = 'white';
        // mail.style.color = 'green';
    }else {
        champ_Email.style.display = '';
        champ_Email.style.color = 'red';
        mail.style.backgroundColor = 'rgb(220, 73, 73)';
        mail.style.color = 'black';

    }

      if (document.getElementById("message").value === ""){
        champ_Message.style.display = '';
        champ_Message.style.color = 'red';
        message.style.backgroundColor = 'rgb(220, 73, 73)';

    } else {
        champ_Message.style.display = 'none';
        message.style.backgroundColor = 'white';
        message.style.color = 'green';
    }
}

function sendMail(){

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,     
    };
   
valideChamps();
 if ( pattern.test(valEmail.value)&& document.getElementById("name").value != "" && document.getElementById("email").value != "" && document.getElementById("message").value != ""){

    emailjs.send(serviceID,templateID,params).then( 
       
    res => {
        titreContact.style.display = 'none';
        formulaire.style.display = "none";
        messageEmit.style.display = "initial"
        spinner.style.display ='none';
      }
      
).catch((err) => console.log(err));

} else {

}
    // spinner.style.display ='none';
    
    }












