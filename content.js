console.log('DaltonicGartic para GarticPhone || @bbbbeatriste')

//Busca ver se o jogo já iniciou


//Há algo para desenhar

let head = document.head
let link = document.createElement('link')
let link2 = document.createElement('link')
let reference = document.createElement('link')
link.setAttribute('rel', 'preconnect')
link.setAttribute('href', "fonts.googleapis.com")
link2.setAttribute('rel', 'preconnect')
link2.setAttribute('href', "https://fonts.gstatic.com")
link2.setAttribute('crossorigin', '');
reference.setAttribute('href', "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@900&display=swap")
reference.setAttribute('rel', 'stylesheet')
head.append(link)
head.append(reference)

setInterval(() => {
    
    var colors = document.getElementsByClassName('colors');
    var lobby = document.getElementsByClassName('lobby');
    var canvases = document.querySelectorAll('canvas');
    var scrapbook = document.getElementsByClassName('scrapbook');
    
    let body = document.getElementsByTagName('body')[0];
    //

    
    //Nomeia todas as cores da paleta
    
    if (colors.length > 0) {
        
        const paleta = document.querySelectorAll('.color');
        Array.from(paleta).forEach(element => {
            let color = element.style.backgroundColor;
            cores_base.forEach(e => {
                if (color == e[1]) {
                    element.setAttribute('title', e[0]);
                }
            })
            
        })
        
    } else if (lobby.length > 0) {

        if (document.getElementsByClassName('name').length > 0) {
            document.getElementsByClassName('name')[0].remove()
        }
        
    } else if (canvases.length > 0 && scrapbook.length == 0) {
        
        let canvas = document.getElementsByTagName('canvas')[1];
        let context = canvas.getContext('2d');
        let coords, pixelData, hex, name;
        
        ntc.init()
        
        let nameOfColor = document.createElement('p');
        nameOfColor.setAttribute("class", "name");
        nameOfColor.style.position = 'absolute';
        nameOfColor.style.top = '10px';
        nameOfColor.style.left = '10px';

        nameOfColor.style.fontSize = '1.2em';
        nameOfColor.style.fontFamily = 'M PLUS Rounded 1c, sans-serif';
        nameOfColor.style.backgroundColor = '#481d92';
        nameOfColor.style.color = 'white';
        nameOfColor.style.borderRadius = '0.25rem';
        nameOfColor.style.textAlign = 'center';
        nameOfColor.style.padding = '15px 15px';
        nameOfColor.style.width = '200px'
        nameOfColor.style.minHeight = '20px';

        
        if (document.getElementsByClassName('name')[0]) {
            nameOfColor.innerText = ' ';
        } else {
            body.appendChild(nameOfColor)
        }
        
        canvas.addEventListener('mousemove', e => {
            coords = getCanvasPosition(canvas, e);
            
            pixelData = context.getImageData(coords.x, coords.y, 1, 1).data;

            if ((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)) {
                name = '';
                if (document.getElementsByClassName('name')[0]) {
                    nameOfColor.innerText = `${name}`;
                } else {
                    //
                }
            } else {
                hex = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
                name = ntc.name(hex)[1];
                if (document.getElementsByClassName('name')[0]) {
                    nameOfColor.innerText = `${name}`;
                } else {
                    //
                }
            }


        })


    } else if (scrapbook.length > 0) {

        if (document.getElementsByClassName('name').length > 0) {
            document.getElementsByClassName('name')[0].remove()
        }

    }


}, 500);



function getCanvasPosition(element, event) {

    let distanceX = event.clientX - element.getBoundingClientRect().left;
    let distanceY = event.clientY - element.getBoundingClientRect().top;

    distanceX = (event.clientX - element.getBoundingClientRect().left) * 2;
    distanceY = (event.clientY - element.getBoundingClientRect().top) * 2;

    distanceX = Math.round(distanceX);
    distanceY = Math.round(distanceY);


    return {
        x: distanceX,
        y: distanceY
    }

}


function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function rgbToHex(r, g, b) {
    return "#" + ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
}


const cores_base = [
    ["Preto", "rgb(0, 0, 0)"],
    ["Cinza Escuro", "rgb(102, 102, 102)"],
    ["Azul Escuro", "rgb(0, 80, 205)"],
    ["Branco", "rgb(255, 255, 255)"],
    ["Cinza Claro", "rgb(170, 170, 170)"],
    ["Ciano/Azul Claro", "rgb(38, 201, 255)"],
    ["Verde Escuro", "rgb(1, 116, 32)"],
    ["Vermelho Escuro", "rgb(153, 0, 0)"],
    ["Marrom", "rgb(150, 65, 18)"],
    ["Verde", "rgb(17, 176, 60)"],
    ["Vermelho", "rgb(255, 0, 19)"],
    ["Laranja", "rgb(255, 120, 41)"],
    ["Marrom Claro", "rgb(176, 112, 28)"],
    ["Roxo Vinho", "rgb(153, 0, 78)"],
    ["Rosa Escuro", "rgb(203, 90, 87)"],
    ["Amarelo", "rgb(255, 193, 38)"],
    ["Rosa", "rgb(255, 0, 143)"],
    ["Rosa Claro", "rgb(254, 175, 168)"]

]


/*
Biblioteca NameToColor de Chirag Mehta

+-----------------------------------------------------------------+
|     Created by Chirag Mehta - http://chir.ag/projects/ntc       |
|-----------------------------------------------------------------|
|               ntc js (Name that Color JavaScript)               |
+-----------------------------------------------------------------+

All the functions, code, lists etc. have been written specifically
for the Name that Color JavaScript by Chirag Mehta unless otherwise
specified.

This script is released under the: Creative Commons License:
Attribution 2.5 http://creativecommons.org/licenses/by/2.5/
*/

var ntc = {

    init: function () {
        var color, rgb, hsl;
        for (var i = 0; i < ntc.names.length; i++) {
            color = "#" + ntc.names[i][0];
            rgb = ntc.rgb(color);
            hsl = ntc.hsl(color);
            ntc.names[i].push(rgb[0], rgb[1], rgb[2], hsl[0], hsl[1], hsl[2]);
        }
    },

    name: function (color) {

        color = color.toUpperCase();
        if (color.length < 3 || color.length > 7)
            return ["#000000", "Invalid Color: " + color, false];
        if (color.length % 3 == 0)
            color = "#" + color;
        if (color.length == 4)
            color = "#" + color.substr(1, 1) + color.substr(1, 1) + color.substr(2, 1) + color.substr(2, 1) + color.substr(3, 1) + color.substr(3, 1);

        var rgb = ntc.rgb(color);
        var r = rgb[0], g = rgb[1], b = rgb[2];
        var hsl = ntc.hsl(color);
        var h = hsl[0], s = hsl[1], l = hsl[2];
        var ndf1 = 0; ndf2 = 0; ndf = 0;
        var cl = -1, df = -1;

        for (var i = 0; i < ntc.names.length; i++) {
            if (color == "#" + ntc.names[i][0])
                return ["#" + ntc.names[i][0], ntc.names[i][1], true];

            ndf1 = Math.pow(r - ntc.names[i][2], 2) + Math.pow(g - ntc.names[i][3], 2) + Math.pow(b - ntc.names[i][4], 2);
            ndf2 = Math.pow(h - ntc.names[i][5], 2) + Math.pow(s - ntc.names[i][6], 2) + Math.pow(l - ntc.names[i][7], 2);
            ndf = ndf1 + ndf2 * 2;
            if (df < 0 || df > ndf) {
                df = ndf;
                cl = i;
            }
        }

        return (cl < 0 ? ["#000000", "Invalid Color: " + color, false] : ["#" + ntc.names[cl][0], ntc.names[cl][1], false]);
    },

    // adopted from: Farbtastic 1.2
    // http://acko.net/dev/farbtastic
    hsl: function (color) {

        var rgb = [parseInt('0x' + color.substring(1, 3)) / 255, parseInt('0x' + color.substring(3, 5)) / 255, parseInt('0x' + color.substring(5, 7)) / 255];
        var min, max, delta, h, s, l;
        var r = rgb[0], g = rgb[1], b = rgb[2];

        min = Math.min(r, Math.min(g, b));
        max = Math.max(r, Math.max(g, b));
        delta = max - min;
        l = (min + max) / 2;

        s = 0;
        if (l > 0 && l < 1)
            s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l));

        h = 0;
        if (delta > 0) {
            if (max == r && max != g) h += (g - b) / delta;
            if (max == g && max != b) h += (2 + (b - r) / delta);
            if (max == b && max != r) h += (4 + (r - g) / delta);
            h /= 6;
        }
        return [parseInt(h * 255), parseInt(s * 255), parseInt(l * 255)];
    },

    // adopted from: Farbtastic 1.2
    // http://acko.net/dev/farbtastic
    rgb: function (color) {
        return [parseInt('0x' + color.substring(1, 3)), parseInt('0x' + color.substring(3, 5)), parseInt('0x' + color.substring(5, 7))];
    },

    //Nome das Cores traduzidos para o português
    names: [
        ["000000", "Preto"],
        ["666666", "Rosa Escuro"],
        ["0050CD", "Azul"],
        ["FFFFFF", "Branco"],
        ["aaaaaa", "Cinza"],
        ["26c9ff", "Ciano"],
        ["017420", "Verde Escuro"],
        ["990000", "Vermelho Escuro"],
        ["964112", "Marrom"],
        ["11b03c", "Verde"],
        ["ff0013", "Vermelho"],
        ["ff7829", "Laranja"],
        ["b0701c", "Marrom Claro"],
        ["99004e", "Violeta"],
        ["cb5a57", "Rosa Escuro"],
        ["ffc226", "Amarelo"],
        ["ff008f", "Rosa"],
        ["feafa8", "Rosa Claro"],
        ["120A8F", "Azul Escuro"],
        ["123447", "Azul Marinho Escuro"],
        ["126B40", "Esmeralda"],
        ["130000", "Marrom Escuro"],
        ["130A06", "Marro Escuro"],
        ["13264D", "Azul Marinho"],
        ["134F19", "Verde Escuro"],
        ["140600", "Marrom Escuro"],
        ["1450AA", "Azul"],
        ["151F4C", "Azul Escuro"],
        ["1560BD", "Azul"],
        ["15736B", "Turquesa"],
        ["161928", "Azul Muito Escuro"],
        ["161D10", "Verde Musgo Muito Escuro"],
        ["162A40", "Azul Marinho"],
        ["163222", "Verde Musgo"],
        ["16322C", "Verde Musgo"],
        ["163531", "Verde Musgo"],
        ["171F04", "Verde Musgo Escuro"],
        ["175579", "Azul Marinho Claro"],
        ["182D09", "Verde Musgo"],
        ["18587A", "Azul Marinho Claro"],
        ["19330E", "Verde Musgo"],
        ["193751", "Azul Marinho"],
        ["1959A8", "Azul"],
        ["1A1A68", "Azul Escuro"],
        ["1AB385", "Esmeralda Claro"],
        ["1B0245", "Azul Escuro"],
        ["1B1035", "Azul Marinho Escuro"],
        ["1B127B", "Azul Escuro"],
        ["1B1404", "Verde Musgo Escuro"],
        ["1B2F11", "Verde Musgo"],
        ["1B3162", "Azul Marinho"],
        ["1B659D", "Azul Pastel"],
        ["1C1208", "Preto com tom verde"],
        ["1C1E13", "Preto com tom verde"],
        ["1C39BB", "Azul"],
        ["1C402E", "Verde Musgo"],
        ["1C7C7D", "Turquesa"],
        ["1D6142", "Verde Musgo Claro"],
        ["1E0F04", "Marrom"],
        ["1E1609", "Marrom"],
        ["1E1708", "Marrom"],
        ["1E385B", "Azul Marinho"],
        ["1E433C", "Marrom"],
        ["1E90FF", "Azul Claro"],
        ["1E9AB0", "Turquesa Claro"],
        ["1F120F", "Preto Amarronzado"],
        ["1FC2C2", "Turquesa"],
        ["20208D", "Azul Escuro"],
        ["202E54", "Azul Marinho"],
        ["204852", "Turquesa Escuro"],
        ["211A0E", "Preto Amarronzado"],
        ["220878", "Azul Escuro"],
        ["228B22", "Verde Escuro"],
        ["233418", "Verde Musgo"],
        ["240A40", "Violeta"],
        ["240C02", "Marrom"],
        ["242A1D", "Verde Musgo"],
        ["242E16", "Verde Musgo"],
        ["24500F", "Verde Musgo"],
        ["251607", "Marrom"],
        ["251706", "Marrom"],
        ["251F4F", "Azul Marinho"],
        ["25272C", "Azul Marinho Escuro"],
        ["25311C", "Verde Musgo"],
        ["2596D1", "Azul Bebê"],
        ["260368", "Azul Escuro"],
        ["26056A", "Azul Escuro"],
        ["261105", "Marrom"],
        ["261414", "Marrom"],
        ["262335", "Azul Marinho Escuro"],
        ["26283B", "Azul Marinho Escuro"],
        ["273A81", "Azul Marinho"],
        ["27504B", "Verde Musgo"],
        ["278A5B", "Verde Pastel"],
        ["281E15", "Marrom"],
        ["283A77", "Azul Marinho"],
        ["286ACD", "Azul"],
        ["290C5E", "Violeta Escuro"],
        ["292130", "Violeta Acinzentado"],
        ["292319", "Preto"],
        ["292937", "Azul Marinho Escuro"],
        ["297B9A", "Azul Pastel"],
        ["29AB87", "Turquesa"],
        ["2A0359", "Violeta"],
        ["2A140E", "Marrom"],
        ["2A2630", "Azul Marinho Acinzentado"],
        ["2A380B", "Verde Musgo"],
        ["2A52BE", "Azul"],
        ["2B0202", "Marrom"],
        ["2B194F", "Azul Marinho"],
        ["2B3228", "Cinza Escuro"],
        ["2C0E8C", "Azul Escuro"],
        ["2C1632", "Roxo Escuro"],
        ["2C2133", "Roxo Escuro Acinzentado"],
        ["2C8C84", "Turquesa"],
        ["2D2510", "Marrom"],
        ["2D383A", "Cinza Escuro"],
        ["2D569B", "Azul Marinho"],
        ["2E0329", "Roxo Escuro"],
        ["2E1905", "Marrom"],
        ["2E3222", "Verde Musgo"],
        ["2E3F62", "Azul Marinho"],
        ["2E8B57", "Verde Pastel"],
        ["2EBFD4", "Turquesa"],
        ["2F270E", "Marrom"],
        ["2F3CB3", "Azul"],
        ["2F519E", "Azul Marinho"],
        ["2F5A57", "Verde Escuro Pastel"],
        ["2F6168", "Verde Escuro Pastel"],
        ["300529", "Roxo Muito Escuro"],
        ["301F1E", "Marrom Acinzentado"],
        ["302A0F", "Marrom"],
        ["304B6A", "Azul Marinho"],
        ["30D5C8", "Turquesa"],
        ["311C17", "Vermelho Vinho"],
        ["314459", "Azul Marinho"],
        ["315BA1", "Azul Marinho Claro"],
        ["31728D", "Turquesa Escuro"],
        ["317D82", "Turquesa Escuro Pastel"],
        ["32127A", "Roxo"],
        ["32293A", "Preto com tom de roxo"],
        ["323232", "Cinza Escuro"],
        ["325D52", "Verde Musgo Pastel"],
        ["327C14", "Verde Escuro"],
        ["327DA0", "Azul Pastel"],
        ["33036B", "Azul Marinho"],
        ["33292F", "Cinza Escuro"],
        ["33CC99", "Verde Pastel"],
        ["341515", "Marrom"],
        ["350036", "Vermelho Vinho"],
        ["350E42", "Violeta Pastel"],
        ["350E57", "Violeta"],
        ["353542", "Cinza Escuro"],
        ["354E8C", "Azul Marinho"],
        ["363050", "Azul Marinho"],
        ["363534", "Cinza Escuro"],
        ["363C0D", "Verde Musgo Escuro"],
        ["36747D", "Turquesa Escuro"],
        ["368716", "Verde Escuro"],
        ["370202", "Marrom"],
        ["371D09", "Marrom"],
        ["37290E", "Marrom"],
        ["373021", "Marrom"],
        ["377475", "Turquesa Pastel"],
        ["380474", "Violeta"],
        ["381A51", "Violeta"],
        ["383533", "Cinza Escuro"],
        ["384555", "Cinza Escuro Azulado"],
        ["384910", "Verde Musgo"],
        ["394851", "Cinza Escuro Azulado"],
        ["396413", "Verde Musgo"],
        ["3A0020", "Vinho"],
        ["3A2010", "Marrom"],
        ["3A2A6A", "Roxo"],
        ["3A686C", "Turquesa Escuro"],
        ["3A6A47", "Verde Musgo Pastel"],
        ["3AB09E", "Turquesa"],
        ["3B000B", "Vinho"],
        ["3B0910", "Vinho"],
        ["3B1F1F", "Marrom"],
        ["3B2820", "Marrom Acinzentado"],
        ["3B7A57", "Verde Musgo Claro"],
        ["3B91B4", "Azul Pastel"],
        ["3C0878", "Violeta"],
        ["3C1206", "Marrom"],
        ["3C1F76", "Violeta"],
        ["3C2005", "Marrom"],
        ["3C3910", "Marrom"],
        ["3C4151", "Cinza Escuro Azulado"],
        ["3C4443", "Cinza Escuro"],
        ["3C493A", "Cinza Escuro Esverdeado"],
        ["3D0C02", "Marrom"],
        ["3D2B1F", "Marrom Pastel"],
        ["3D7D52", "Verde Musgo"],
        ["3E0480", "Violeta"],
        ["3E1C14", "Marrom"],
        ["3E2B23", "Marrom"],
        ["3E2C1C", "Marrom"],
        ["3E3A44", "Cinza Escuro Azulado"],
        ["3EABBF", "Azul Pastel"],
        ["3F2109", "Marrom"],
        ["3F2500", "Marrom"],
        ["3F3002", "Marrom"],
        ["3F307F", "Violeta"],
        ["3F4C3A", "Verde Musgo"],
        ["3F583B", "Verde Musgo"],
        ["3F5D53", "Verde Musgo"],
        ["3FC1AA", "Turquesa"],
        ["3FFF00", "Verde Limão"],
        ["401801", "Marrom"],
        ["40291D", "Marrom"],
        ["403B38", "Cinza"],
        ["403D19", "Marrom"],
        ["405169", "Azul Marinho"],
        ["40826D", "Esmeralda Pastel"],
        ["40A860", "Verde Pastel"],
        ["410056", "Violeta"],
        ["411F10", "Marrom"],
        ["412010", "Marrom"],
        ["413C37", "Cinza Escuro"],
        ["414257", "Azul Marinho"],
        ["414C7D", "Azul Marinho"],
        ["4169E1", "Azul"],
        ["41AA78", "Verde Pastel"],
        ["420303", "Marrom"],
        ["423921", "Marrom Pastel"],
        ["427977", "Turquesa Escuro"],
        ["431560", "Violeta"],
        ["433120", "Marrom"],
        ["433E37", "Cinza Amarronzado"],
        ["434C59", "Cinza Azulado"],
        ["436A0D", "Verde Musgo"],
        ["44012D", "Vinho"],
        ["C71785", "Roxo"],
        ["FF1493", "Rosa"],
        ["DB7093", "Roxo Acinzentado"],
        ["C71785", "Rosa Pastel"],
        ["FFB6C1", "Rosa Claro"],
        ["CD5C5C", "Rosa Acinzentado"],
        ["F08080", "Rosa Pastel"],
        ["FA8072", "Rosa Salmão"],
        ["FFA07A", "Rosa Salmão Claro"],
        ["DC143C", "Vinho"],
        ["FF0000", "Vermelho"],
        ["B22222", "Vermelho Escuro Pastel"],
        ["8B0000", "Vermelho Escuro"],
        ["FFA07A", "Salmão Claro"],
        ["FF7F50", "Salmão"],
        ["FF6347", "Tomate"],
        ["FF4500", "Laranja Vibrante"],
        ["FF8C00", "Laranja"],
        ["FFA500", "Laranja"],
        ["FFD700", "Dourado"],
        ["FFFF00", "Amarelo"],
        ["FFDAB9", "Rosa Bebê"],
        ["EEE8AA", "Amarelo Ovo"],
        ["F0E68C", "Amarelo Pálido"],
        ["BDB76B", "Verde Musgo Claro"],
        ["E6E6FA", "Cinza Claro"],
        ["D8BFD8", "Lilás"],
        ["DDA0DD", "Lilás"],
        ["EE82EE", "Lilás"],
        ["DA70D6", "Roxo"],
        ["FF00FF", "Rosa"],
        ["FF00FF", "Rosa"],
        ["BA55D3", "Violeta"],
        ["9370DB", "Violeta"],
        ["663399", "Violeta"],
        ["8A2BE2", "Violeta"],
        ["9400D3", "Violeta"],
        ["9932CC", "Violeta"],
        ["8B008B", "Violeta"],
        ["800080", "Violeta"],
        ["4B0082", "Violeta"],
        ["6A5ACD", "Lilás Azulado"],
        ["ADFF2F", "Verde Limão"],
        ["7FFF00", "Verde Limão"],
        ["7CFC00", "Verde Limão"],
        ["00FF00", "Verde Limão"],
        ["32CD32", "Verde Limão"],
        ["98FB98", "Verde Pastel"],
        ["90EE90", "Verde Pastel"],
        ["00FA9A", "Verde Pastel"],
        ["00FF7F", "Verde Pastel"],
        ["3CB371", "Verde Escuro"],
        ["2E8B57", "Verde Escuro"],
        ["228B22", "Verde Escuro"],
        ["008000", "Verde Escuro"],
        ["006400", "Verde Escuro"],
        ["9ACD32", "Verde Pastel"],
        ["6B8E23", "Verde Musgo"],
        ["808000", "Verde Musgo"],
        ["556B2F", "Verde Musgo"],
        ["66CDAA", "Turquesa"],
        ["8FBC8B", "Turquesa"],
        ["20B2AA", "Turquesa"],
        ["008B8B", "Turquesa"],
        ["008080", "Turquesa"],
        ["00FFFF", "Ciano"],
        ["E0FFFF", "Ciano Claro"],
        ["AFEEEE", "Ciano Claro"],
        ["7FFFD4", "Turquesa"],
        ["40E0D0", "Turquesa"],
        ["48D1CC", "Turquesa"],
        ["00CED1", "Turquesa"],
        ["5F9EA0", "Azul Marinho"],
        ["4682B4", "Azul Marinho"],
        ["B0C4DE", "Azul Marinho Claro"],
        ["B0E0E6", "Azul Marinho Claro"],
        ["ADD8E6", "Azul Marinho Claro"],
        ["87CEEB", "Azul Marinho Claro"],
        ["87CEFA", "Azul Marinho Claro"],
        ["00BFFF", "Azul Marinho Claro"],
        ["1E90FF", "Azul"],
        ["6495ED", "Azul Pastel"],
        ["7B68EE", "Violeta"],
        ["0000FF", "Azul"],
        ["0000CD", "Azul Escuro"],
        ["00008B", "Azul Escuro"],
        ["000080", "Azul Marinho"],
        ["191970", "Azul Marinho"],
        ["FFF8DC", "Rosa Claro"],
        ["FFEBCD", "Rosa Claro"],
        ["FFE4C4", "Rosa Claro"],
        ["FFDEAD", "Bege"],
        ["F5DEB3", "Bege"],
        ["DEB887", "Bege Escuro"],
        ["D2B48C", "Bege Escuro"],
        ["BC8F8F", "Roxo Pastel"],
        ["F4A460", "Salmão"],
        ["DAA520", "Amarelo Ovo"],
        ["B8860B", "Amarelo Escuro"],
        ["CD853F", "Marrom Claro"],
        ["D2691E", "Marrom Claro"],
        ["8B4513", "Marrom"],
        ["A0522D", "Marrom"],
        ["A52A2A", "Vinho"],
        ["800000", "Vinho"],
        ["FFFFFF", "Branco"],
        ["FFFAFA", "Branco Rosa"],
        ["F0FFF0", "Branco Azul"],
        ["F5FFFA", "Branco Azul"],
        ["F0FFFF", "Branco Verde"],
        ["F0F8FF", "Branco Verde"],
        ["F8F8FF", "Cinza"],
        ["F5F5F5", "Cinza"],
        ["FDF5E6", "Rosa Claro"],
        ["FAF0E6", "Cinza"],
        ["FAEBD7", "Rosa Claro"],
        ["DCDCDC", "Cinza Claro"],
        ["D3D3D3", "Cinza Claro"],
        ["C0C0C0", "Cinza"],
        ["A9A9A9", "Cinza"],
        ["808080", "Cinza"],
        ["696969", "Cinza Escuro"],
        ["778899", "Cinza Azulado"],
        ["708090", "Cinza Azulado"],
        ["2F4F4F", "Azul Marinho"]
    ]
}

