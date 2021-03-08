var parolaUtente = prompt("Inserisci una parola, il programma verificherà se è palindroma:");
var flag = false;
var pariDispari = prompt("Inserisci pari o dispari:");
var numUtente = prompt("Scegli un numero tra 1-5:");

var somma=0;


// Funzione Palindroma
function palindromaCheck(){
    if (parolaUtente == parolaUtente.split('').reverse().join('')) {
        console.log(parolaUtente + ' è palindroma.');
    }
    else {
        console.log(parolaUtente + ' non è palindroma.');
    }
}

function pariDispariCheck() {
    if (pariDispari == 'pari' || pariDispari == 'dispari'){
        var genRan = randNumber(1,5);
        console.log('hai scelto ' + pariDispari);
        somma = parseInt(numUtente)+ parseInt(genRan);
        
        if (somma%2 == 0 ) {
            console.log("la somma dei due vaolri è pari ed è = " + somma);
            if(pariDispari == 'pari'){
                console.log("Hai indovinato");
            }
        }else{
            console.log("la somma dei due valori è dispari ed è = " + somma);
            if(pariDispari == 'dispari'){
                console.log("Hai perso");
            }
        }
    } else{
        console.log("la selezione non è valida");
    }
}

function randNumber(min, max){
   var randomCPU= Math.floor(Math.random() * (max - min + 1)) + min;
   return randomCPU;
}


palindromaCheck();
pariDispariCheck();
