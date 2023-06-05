var nome = prompt('Bem-vindo ao site! Qual é o seu nome?');
var res = document.getElementById('boas-vindas')
res.innerHTML = `<p id="inicio" >Bem-vindo, <strong>${nome}</strong>, este é um site destinado a te ajudar naquele momento em que você já não sabe mais o que fazer no Minecraft, por exemplo, ou então, quando não consegue ser criativo o suficiente para pensar em uma carreira no FIFA, dentre outros casos. Por isso, criei este site.</p>`; //Parágrafo de boas-vindas

var footer = document.getElementsByTagName('footer')[0];
var obs0 = document.getElementsByClassName('obs')[0];
var obs1 = document.getElementsByClassName('obs')[1];
var saida = document.getElementById('output');
var opc11 = document.getElementsByClassName('opc1')[0];
var opc12 = document.getElementsByClassName('opc1')[1];
var br_eu = document.getElementsByName('br_eu');
var obj = document.getElementById('obj');

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

    'Você escolhe',

    'Athletico-PR', 'Atlético-MG', 'Corinthians', 'Cruzeiro', 'Flamengo', 'Fluminense', 'Fortaleza', 'Grêmio', 'Internacional', 'Palmeiras', 'Bragantino', 'Santos', 'São Paulo', 'Vasco da Gama' //Brasileirão Série A

]; //Array com times do mundo

var objetivos = ['Você deverá ganhar a liga de forma invicta;', 

'Você deverá fazer um jogador do seu time ter mais de 40 gols ao final da temporada;',

'Suponha que o seu time tenha virado SAF, você deverá fazer uma incorporação financeira de seu agrado, porém, terá de ganhar a triplice coroa em no máximo 2 temporadas;',

'Você deverá fazer um jogador do seu time ter mais de 20 assistencias ao final da temporada;',

'Você deverá virar o mestre de seleções, ou seja, deverá comandar uma seleção por ano, tentando ser o mais vitorioso possivel;'];

times_mundo = times_mundo.sort()
times_europa = times_europa.sort()

function fifa() {
    saida.innerHTML = '';
    obj.innerHTML = '';
    footer.style.display = 'block';
    obs1.style.display = 'none';
    obs0.style.display = 'none'; //tirando a observação e colocando o rodapé

    opc12.style.display = 'block';
    opc11.style.display = 'block';

    if (br_eu[0].checked) {
        var quantidade_times = times_europa.length; //quantidade de times
        var num_ran = parseInt(Math.random() * quantidade_times);
        var time_aleatório = times_europa[num_ran];
        saida.innerHTML = `<p  class="time">${time_aleatório}</p>`;

        var quantidade_obj = objetivos.length;
        var obj_ran = parseInt(Math.random() * quantidade_obj);
        obj.innerHTML += `<p class="time">Seu contexto: ${objetivos[obj_ran]}</p>`;
    } else if (br_eu[1].checked) {
        var quantidade_times = times_mundo.length; //quantidade de times
        var num_ran = parseInt(Math.random() * quantidade_times);
        var time_aleatório = times_mundo[num_ran];
        saida.innerHTML = `<p class="time">Seu time: ${time_aleatório}</p>`;

        var quantidade_obj = objetivos.length;
        var obj_ran = parseInt(Math.random() * quantidade_obj);
        obj.innerHTML += `<p class="time">Seu contexto: ${objetivos[obj_ran]}</p>`;
    };
    
}

function minecraft() {
    saida.innerHTML = '';
    obj.innerHTML = '';
    opc11.style.display = 'none';
    opc12.style.display = 'none';
    footer.style.display = 'block';
    obs1.style.display = 'none';
    obs0.style.display = 'none'; //tirando a observação e colocando o rodapé
}
