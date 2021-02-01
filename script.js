const pastTitle = document.getElementById('pastTitle');
const pastDescription = document.getElementById('pastDescription');
const pastBox = document.getElementById('pastBox');
const presentTitle = document.getElementById('presentTitle');
const presentDescription = document.getElementById('presentDescription');
const presentBox = document.getElementById('presentBox');
const futureTitle = document.getElementById('futureTitle');
const futureDescription = document.getElementById('futureDescription');
const futureBox = document.getElementById('futureBox');
//variáveis de controle de indice para escolher qual carta vai ser usada em cada tempo; NOTE: é necessário me preocupar com a possibilidade de repetição.
const pas = Math.floor(Math.random() * 39);
const pre = Math.floor(Math.random() * 39);
const fut = Math.floor(Math.random() * 39);

async function catchDeck(){
    const response = await fetch('assets/deck.json');
    const data = await response.json();
    //adicionando os valores do json as catas
    //passado
    const ajust = 1;
    pastTitle.innerHTML = data[pas].Card;
    pastDescription.innerHTML = data[pas].Palavras;
    pastBox.style.backgroundImage = `URL(assets/img/${data[pas].bg})`;

    //Presente
    presentTitle.innerHTML = data[pre].Card;
    presentDescription.innerHTML = data[pre].Palavras;
    presentBox.style.backgroundImage = `URL(assets/img/${data[pre].bg})`;

    //passado
    futureTitle.innerHTML = data[fut].Card;
    futureDescription.innerHTML = data[fut].Palavras;
    futureBox.style.backgroundImage = `URL(assets/img/${data[fut].bg})`;
}

catchDeck();
