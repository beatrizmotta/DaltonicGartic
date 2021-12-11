console.log('Working')
let int = setInterval(function () {
    let source = document.getElementById('cores')
    let pallete = source.children
    if (source == undefined || source == null) {
        console.log('0')
    } else {
        clearInterval(int)
        for (let color in pallete) {
            console.log(pallete[color], color)
            switch (pallete[color].getAttribute('style')) {
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[0]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[0])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[1]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[1])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[2]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[2])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[3]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[3])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[4]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[4])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[5]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[5])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[6]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[6])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[7]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[7])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[8]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[8])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[9]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[9])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[10]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[10])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[11]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[11])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[12]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[12])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[13]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[13])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[14]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[14])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[15]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[15])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[16]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[16])
                    break;
                case (biblioteca_gnormal[Object.keys(biblioteca_gnormal)[17]]):
                    pallete[color].setAttribute('title', Object.keys(biblioteca_gnormal)[17])
                    break;
                default:
                    console.log('Could not find.')
            }
        }
    }
}, 2000)

var biblioteca_gnormal = {
    "Preto": "background-color: #000",
    "Cinza Escuro": "background-color: #666",
    "Azul": "background-color: #00F",
    "Branco": "background-color: #FFF",
    "Cinza Claro": "background-color: #AAA",
    "Ciano": "background-color: #0FF",
    "Vermelho": "background-color: #FF0000",
    "Amarelo": "background-color: #FFFF00",
    "Verde Escuro": "background-color: #008C00",
    "Marrom Escuro": "background-color: #8C0000",
    "Marrom": "background-color: #8C4500",
    "Verde Claro": "background-color: #00FF00",
    "Laranja": "background-color: #FF7F00",
    "Marrom Claro": "background-color: #8C6900",
    "Roxo Escuro": "background-color: #8D0250",
    "Roxo Claro": "background-color: #8D6967",
    "Rosa": "background-color: #FF0093",
    "Rosa Claro": "background-color: #FFC1BF"
}

