//NEXT: fazer o gerador de valores aleatórios antes de buscar o array
async function catchDeck(){
    const response = await fetch('assets/deck.json');
    const data = await response.json();
    console.log(data[0]);
}

catchDeck();

const pastTitle = document.getElementById('pastTitle');
const pastDescription = document.getElementById('pastDescription');

pastTitle.innerHTML = ' Passado';
pastDescription.innerHTML = 'Essa é a carta do Passado';
