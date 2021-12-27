let res = document.querySelector('#mostraRes')
let resRgb = document.querySelector('#rbga-res')
let mostraData = document.querySelector('.data p')

horarios();
setInterval(horarios, 6000)

function horarios(){
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    hora <= 9 && (hora = `0${hora}`);
    min <= 9 && (min = `0${min}`);

    mostraData.innerText = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} - ${hora}:${min}`;
}


function pegavalor() {
    let input1 = document.querySelector('#input-1').value;
    let input2 = document.querySelector('#input-2').value;
    let input3 = document.querySelector('#input-3').value;

    res.style.background = `rgb(${input1}, ${input2}, ${input3})`;
    resRgb.innerText = `rgb(${input1}, ${input2}, ${input3})`;
}