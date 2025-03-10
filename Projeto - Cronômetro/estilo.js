
let hora = 0;
let minutos = 0;
let segundos = 0;
let milissegundos = 0;

let cron;


function iniciar() {
    pausar();
    cron = setInterval(() => { tempo(); }, 10);
}

function pausar() {
    clearInterval(cron);

}

function resetar() {
    hora = 0;
    minutos = 0;
    segundos = 0;
    milissegundos = 0;



document.querySelector('.hora').innerText = '00';
document.querySelector('.minutos').innerText = '00';
document.querySelector('.segundos').innerText = '00';
document.querySelector('.milissegundos').innerText = '000';
}

function tempo() {
    if ((milissegundos += 10) == 1000) {
        milissegundos = 0;
        segundos++;
    }
    if (segundos == 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos == 60) {
        minutos = 0;
        hora++;
    }

document.querySelector('.hora').innerText = returnData(hora);
document.querySelector('.minutos').innerText = returnData(minutos);
document.querySelector('.segundos').innerText = returnData(segundos);
document.querySelector('.milissegundos').innerText = returnData(milissegundos);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}