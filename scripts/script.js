var nome = prompt('Bem-vindo ao site! Qual é o seu nome?');
var res = document.getElementById('boas-vindas')
res.innerHTML = `<p id="inicio" >Bem-vindo, <strong>${nome}</strong>, este é um site destinado a te ajudar naquele momento em que você já não sabe mais o que fazer no Minecraft, por exemplo, ou então, quando não consegue ser criativo o suficiente para pensar em uma carreira no FIFA, dentre outros casos. Por isso, criei este site.</p>`;
var footer = document.getElementsByTagName('footer')[0];

function minecraft() {
    footer.style.display = 'block';
}

function fifa() {
    footer.style.display = 'block';
}