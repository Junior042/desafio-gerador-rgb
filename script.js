const Display_RESULTADO = document.querySelector('#mostraRes')
const Resultado_RGB = document.querySelector('#rbga-res')
const Mostra_DATA = document.querySelector('.data p')

Data_Hora();
setInterval(Data_Hora, 6000)

function Data_Hora(){
    const Nova_Data = new Date();
    let HORA = Nova_Data.getHours();
    let MINUTOS = Nova_Data.getMinutes();
    HORA <= 9 && (HORA = `0${HORA}`);
    MINUTOS <= 9 && (MINUTOS = `0${MINUTOS}`);

    Mostra_DATA.innerText = `${Nova_Data.getDate()}/${Nova_Data.getMonth() + 1}/${Nova_Data.getFullYear()} - ${HORA}:${MINUTOS}`;
}


function pegavalor() {
    const INPUT_1 = document.querySelector('#input-1').value;
    const INPUT_2 = document.querySelector('#input-2').value;
    const INPUT_3 = document.querySelector('#input-3').value;

    Display_RESULTADO.style.background = `rgb(${INPUT_1}, ${INPUT_2}, ${INPUT_3})`;
    Resultado_RGB.innerText = `rgb(${INPUT_1}, ${INPUT_2}, ${INPUT_3})`;
}