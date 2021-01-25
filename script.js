//variáveis de controle de indice para escolher qual carta vai ser usada em cada tempo; NOTE: é necessário me preocupar com a possibilidade de repetição.
const pas = Math.floor(Math.random() * 39);
const pre = Math.floor(Math.random() * 39);
const fut = Math.floor(Math.random() * 39);

console.log(pre);
async function catchDeck(){
    const response = await fetch('assets/deck.json');
    const data = await response.json();
    console.log(data[pre]);
}

catchDeck();

const pastTitle = document.getElementById('pastTitle');
const pastDescription = document.getElementById('pastDescription');

pastTitle.innerHTML = ' Passado';
pastDescription.innerHTML = 'Essa é a carta do Passado';
