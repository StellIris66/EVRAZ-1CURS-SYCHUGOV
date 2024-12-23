let a = document.getElementById('res');
a = 0;
b = 10;
console.log(a);
let bober =document.getElementById('bober');

function makeWhite(){
    bober.style.backgroundColor = 'white';
    bober.style.color = 'black';
}
function makeBlack(){
    bober.style.backgroundColor = 'black';
    bober.style.color = 'white';
}
function makeGoldenrod(){
    bober.style.backgroundColor = 'darkblue';
    bober.style.color = 'greenyellow';
}
function makeDarkblue(){
    bober.style.backgroundColor = 'goldenrod';
    bober.style.color = 'black'
}
function makeGray() {
    bober.style.backgroundColor = 'gray';
    bober.style.color = 'black';
}
 function minus10(){
    a = a - b
    console.log(a)

 }