let res = document.querySelector('#mostraRes')
let resRgb = document.querySelector('#rbga-res')
let mostraData = document.querySelector('.data p')

let data = new Date();
let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();
let hora = data.getHours();
let min = data.getMinutes();
if(hora <= 9)
{
    hora = `0${hora}`
}

mostraData.innerText = `${dia}/${mes}/${ano} - ${hora}:${min}`;

function pegavalor() {
    let input1 = document.querySelector('#input-1').value;
    let input2 = document.querySelector('#input-2').value;
    let input3 = document.querySelector('#input-3').value;

    res.style.background = `rgb(${input1}, ${input2}, ${input3})`;
    resRgb.innerText = `rgb(${input1}, ${input2}, ${input3})`;
}