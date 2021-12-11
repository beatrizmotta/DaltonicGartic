console.log('DaltonicGartic || @bbbbeatriste')

//busca ver se o jogo já iniciou
let isStarted = setInterval(() => {
    let paleta_cores;
    paleta_cores = document.querySelector('.colors');
    if (paleta_cores.length > 0) {
        clearInterval(isStarted);
    }
}, 500)

let paleta_cores;

if (isStarted) {
    paleta_cores = document.querySelector('.colors');
    
}



// class="rmOne rmTwo"

//resgatando o nome de todas as cores






// window.addEventListener('mousemove', (e) => {
//     console.log(e.clientX)
//     console.log(e.clientY)
//     console.log('--------------')
// })

// var biblioteca_gio = {
//     'Amarelo Claro': 'background-color: rgb(255, 247, 63);',
//     'Lilás': 'background-color: rgb(185, 115, 255);',
//     'Azul Escuro': 'background-color: rgb(5, 44, 108);',
//     'Violeta': 'background-color: rgb(128, 0, 255);',
//     'Verde': 'background-color: rgb(133, 178, 0);',
//     'Ciano': 'background-color: rgb(0, 217, 163);',
//     'Amarelo': 'background-color: rgb(255, 201, 38);',
//     'Verde Claro': 'background-color: rgb(0, 255, 77);',
//     'Vermelho Escuro': 'background-color: rgb(169, 35, 12);',
//     'Verde Escuro': 'background-color: rgb(0, 141, 38);',
//     'Azul': 'background-color: rgb(0, 23, 246);',
//     'Lilás Acinzentado': 'background-color: rgb(147, 104, 103);'
// }
