
// Trabalhando com Data 
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout('startTime()', 500);

}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


// PEGAR A URL

document.write(window.location.href);

// ENCONTRAR PALAVRA NA STIRNG

var str = 'Terminal Root';

if(str.match(/Root/)){
  console.log('Encontrou');
}else{
	console.log('Palavra Não Encontrada');
}



//Retirar os 5 ultimos caracteres e adicionar uma str 
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);


// Substituir palavra em uma string

var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);


// Redirecionamento, tem que usar o  http://
window.location = "http://www.terminalroot.com.br";