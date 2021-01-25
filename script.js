//constantes com elementos html
const pastTitle = document.getElementById('pastTitle');
const pastDescription = document.getElementById('pastDescription');
const presentTitle = document.getElementById('presentTitle');
const presentDescription = document.getElementById('presentDescription');
const futureTitle = document.getElementById('futureTitle');
const futureDescription = document.getElementById('futureDescription');
//variáveis de controle de indice para escolher qual carta vai ser usada em cada tempo; NOTE: é necessário me preocupar com a possibilidade de repetição.
const pas = Math.floor(Math.random() * 39);
const pre = Math.floor(Math.random() * 39);
const fut = Math.floor(Math.random() * 39);

async function catchDeck(){
    const response = await fetch('assets/deck.json');
    const data = await response.json();
    console.log(data[pre]);
    //adicionando os valores das do json as catas
    //passado
    pastTitle.innerHTML = data[pas].Card;
    pastDescription.innerHTML = data[pas].Passado;

    //Presente
    presentTitle.innerHTML = data[pre].Card;
    presentDescription.innerHTML = data[pre].Presente;

    //passado
    futureTitle.innerHTML = data[fut].Card;
    futureDescription.innerHTML = data[fut].Futuro;
}

catchDeck();
/* 
pastTitle.innerHTML = ' Passado';
pastDescription.innerHTML = 'Essa é a carta do Passado'; */
