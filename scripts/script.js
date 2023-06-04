var nome = prompt('Bem-vindo ao site! Qual é o seu nome?');
var res = document.getElementById('boas-vindas')
res.innerHTML = `<p id="inicio" >Bem-vindo, <strong>${nome}</strong>, este é um site destinado a te ajudar naquele momento em que você já não sabe mais o que fazer no Minecraft, por exemplo, ou então, quando não consegue ser criativo o suficiente para pensar em uma carreira no FIFA, dentre outros casos. Por isso, criei este site.</p>`; //Parágrafo de boas-vindas

var footer = document.getElementsByTagName('footer')[0];
var obs0 = document.getElementsByClassName('obs')[0];
var obs1 = document.getElementsByClassName('obs')[1];
var saida = document.getElementById('output');
var opc1 = document.getElementById('opc1');
var br_eu = document.getElementsByName('br_eu');

var times_europa = [

    'Bayern de Munchen', 'Leverkusen', 'Borussia Dortmound', 'RB Leipzg', 'Frankfurt', 'Borussia Mönchengladbach', 'Wolfsburg', 'Hertha Berlin', //Bundesliga

    'PSG', 'Lyon', 'Saint-Étienne', 'Olympique de Marseille', 'Lille', 'Mônaco', 'Nice', 'Stade Rennes', //Ligue One

    'Arsenal', 'Aston Villa', 'Brighton', 'Everton', 'Liverpool', 'Manchester City', 'Manchester United', 'Tottenham', 'Wolverhamptom', 'Chelsea', 'West Ham', 'Leicester', 'Newcastle', 'Notthingam Forest', 'Leeds', //Premier League

    'Benfica', 'Porto', 'Braga', 'Sporting', //Liga Portuguesa

    'Ajax', 'Feyenoord', 'PSV', //Eredivese

    'Juventus', 'Inter de Milão', 'Milan', 'Lazio', 'Roma', 'Napoli', 'Atalanta' /*Atalanta = [4] em ordem alfabética*/, 'Fiorentina', //Série A TIM

    'Atlético de Madrid', 'Barcelona', 'Real Madrid', 'Villareal', 'Valencia', 'Real Sociedad', 'Real Betis', 'Athletic Bilbao', 'Sevilla', //La liga

    'Al-Nassr'//posição [1] //Time extra kkk

]; //Array com times da europa

var times_mundo = [

    'Bayern de Munchen', 'Leverkusen', 'Borussia Dortmound', 'RB Leipzg', 'Frankfurt', 'Borussia Mönchengladbach', 'Wolfsburg', 'Hertha Berlin', //Bundesliga

    'PSG', 'Lyon', 'Saint-Étienne', 'Olympique de Marseille', 'Lille', 'Mônaco', 'Nice', 'Stade Rennes', //Ligue One

    'Arsenal', 'Aston Villa', 'Brighton', 'Everton', 'Liverpool', 'Manchester City', 'Manchester United', 'Tottenham', 'Wolverhamptom', 'Chelsea', 'West Ham', 'Leicester', 'Newcastle', 'Notthingam Forest', 'Leeds', //Premier League

    'Benfica', 'Porto', 'Braga', 'Sporting', //Liga Portuguesa

    'Ajax', 'Feyenoord', 'PSV', //Eredivese
    'Juventus', 'Inter de Milão', 'Milan', 'Lazio', 'Roma', 'Napoli', 'Atalanta' /*Atalanta = [4] em ordem alfabética*/, 'Fiorentina', //Série A TIM

    'Atlético de Madrid', 'Barcelona', 'Real Madrid', 'Villareal', 'Valencia', 'Real Sociedad', 'Real Betis', 'Athletic Bilbao', 'Sevilla', //La liga

    'Al-Nassr',//posição [1] //Time extra kkk

    'Athletico-PR', 'Atlético-MG', 'Corinthians', 'Cruzeiro', 'Flamengo', 'Fluminense', 'Fortaleza', 'Grêmio', 'Internacional', 'Palmeiras', 'Bragantino', 'Santos', 'São Paulo', 'Vasco da Gama' //Brasileirão Série A

]; //Array com times do mundo

times_mundo = times_mundo.sort()
times_europa = times_europa.sort()

function fifa() {
    saida.innerHTML = '';
    footer.style.display = 'block';
    obs1.style.display = 'none';
    obs0.style.display = 'none'; //tirando a observação e colocando o rodapé

    opc1.style.display = 'block';

    if (br_eu[0].checked) {
        var quantidade_times = times_europa.length - 1; //quantidade de times
        var num_ran = parseInt(Math.random() * quantidade_times);
        var time_aleatório = times_europa[num_ran];
        saida.innerHTML = `<p  class="time">${time_aleatório}</p>`;
    } else if (br_eu[1].checked) {
        var quantidade_times = times_mundo.length - 1; //quantidade de times
        var num_ran = parseInt(Math.random() * quantidade_times);
        var time_aleatório = times_mundo[num_ran];
        saida.innerHTML = `<p class="time">${time_aleatório}</p>`;
    };

}

function minecraft() {
    saida.innerHTML = '';
    opc1.style.display = 'none';
    footer.style.display = 'block';
    obs1.style.display = 'none';
    obs0.style.display = 'none'; //tirando a observação e colocando o rodapé
}
