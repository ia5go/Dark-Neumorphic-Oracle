fetch('assets/deck.json').then(function (response){
    return response.json();
}).then(function (obj){
    console.log("data do fetch" +obj);
}).catch(function (error){
    console.error("algo deu errado");
    console.error(error);
});
const pastTitle = document.getElementById('pastTitle');
const pastDescription = document.getElementById('pastDescription');

pastTitle.innerHTML = ' Passado';
pastDescription.innerHTML = 'Essa é a carta do Passado';