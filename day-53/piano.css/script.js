const pianoKeys = document.querySelectorAll('.keys')

pianoKeys.forEach(addEventListener('click', add)) 

function add()
{
    console.log ("click works!");
}