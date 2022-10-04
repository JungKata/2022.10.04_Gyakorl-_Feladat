

let taplalek = [
    'whiskas alutasakos',
    'whiskas macskatej',
    'prevital alutasakos',
];

function Kaloria(nev){
let label = document.createElement('label');
label.textContent = nev + ':';
let kaloria  = document.createElement('input');
kaloria.type ='number';
kaloria.max = 5000;
label.appendChild(kaloria);
return label;
}

function EtelekItalok()
{
    let szulo = document.getElementById('lista');
    szulo.textContent = '';
    for( let elem of taplalek)
    {   
        let listaElem = document.createElement('li');
        listaElem.textContent = elem;

        listaElem.appendChild(Kaloria(elem));
    }
    elem.appendChild(szulo);
    szulo.appendChild(listaElem);
    console.log(listaElem);
    
}


function init()
{
    document.getElementById('kep1').addEventListener('click',EtelekItalok);
}

document.addEventListener('DOMContentLoaded', init);