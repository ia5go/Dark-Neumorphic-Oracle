const pastTitle = document.getElementById('pastTitle');
const pastDescription = document.getElementById('pastDescription');
const pastBox = document.getElementById('pastBox');
const pastReveal = document.getElementById('pastReveal');
const presentTitle = document.getElementById('presentTitle');
const presentDescription = document.getElementById('presentDescription');
const presentBox = document.getElementById('presentBox');
const presentReveal = document.getElementById('presentReveal');
const futureTitle = document.getElementById('futureTitle');
const futureDescription = document.getElementById('futureDescription');
const futureBox = document.getElementById('futureBox');
const futureReveal = document.getElementById('futureReveal');
//variáveis de controle de indice para escolher qual carta vai ser usada em cada tempo; NOTE: é necessário me preocupar com a possibilidade de repetição.

function drawCards(){
    let selected = [];

    do{
        for(let i=0; i<3; i++){
            selected[i] = Math.floor(Math.random() * 39);
        }
        console.log(selected);
    }while(selected[0] == selected[1] || selected[0] == selected[2] || selected[1] == selected[2]);

    return selected;
}

const draw = drawCards();

async function bringpast(){
    const response = await fetch('assets/deck.json');
    const data = await response.json();
    pastTitle.innerHTML = data[draw[0]].Card;
    pastDescription.innerHTML = data[draw[0]].Palavras;
    pastBox.style.backgroundImage = `URL(assets/img/${data[draw[0]].bg})`;
    pastDescription.classList.remove('hide');
    pastReveal.style.display='none';
}

async function bringpresent(){
    const response = await fetch('assets/deck.json');
    const data = await response.json();
    presentTitle.innerHTML = data[draw[1]].Card;
    presentDescription.innerHTML = data[draw[1]].Palavras;
    presentBox.style.backgroundImage = `URL(assets/img/${data[draw[1]].bg})`;
    presentDescription.classList.remove('hide');
    presentReveal.style.display='none';
}

async function bringfuture(){
    const response = await fetch('assets/deck.json');
    const data = await response.json();
    futureTitle.innerHTML = data[draw[2]].Card;
    futureDescription.innerHTML = data[draw[2]].Palavras;
    futureBox.style.backgroundImage = `URL(assets/img/${data[draw[2]].bg})`;
    futureDescription.classList.remove('hide');
    futureReveal.style.display='none';
}

pastReveal.addEventListener('click', bringpast);
presentReveal.addEventListener('click', bringpresent);
futureReveal.addEventListener('click', bringfuture);
