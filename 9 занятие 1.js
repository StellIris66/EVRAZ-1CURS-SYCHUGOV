//let a = 10;
//let b = 15;
//if (a>b) {
//    console.log('а больше b');
//}
//else {
//    console.log('а равна или   меньше b')
//}
//
//console.log('лог больше if')
//
//let a1 = 9;
//if (a1 % 2 ==

let a0 = 0;

function nolick(){
    a0 = 0;
    changeText.innerText = a0;
    let sdf = document.getElementById("sdf");
    sdf.style.backgroundColor = "black";
    sdf.style.color = "white";
}

function odin(){
    a0 = 1;
    let sdf = document.getElementById("sdf");
    sdf.style.backgroundColor = "white";
    sdf.style.color = "black";
    changeText.innerText = a0;
    console.log(a0)
}




function dwa(){
    a0 = 2;
    let sdf = document.getElementById("sdf");
    sdf.style.backgroundColor = "blue";
    sdf.style.color = "white";
    changeText.innerText = a0;
    console.log(a0)

}

function five(){
    a0 = 5;
    let sdf = document.getElementById("sdf");
    sdf.style.backgroundColor = "green";
    sdf.style.color = "white";
    changeText.innerText = a0;

}

function plus1(){
    a0 = a0 + 1;
    changeText.innerText = a0;
    if (a0 === 5){
        let sdf = document.getElementById("sdf");
        sdf.style.backgroundColor = 'green';
        sdf.style.color = 'white';}
    else if (a0 === 2){
        let sdf = document.getElementById("sdf");
        sdf.style.backgroundColor = 'blue';
        sdf.style.color = 'white';}

else if (a0 === 1){
    let sdf = document.getElementById("sdf");
    sdf.style.backgroundColor = 'white';
    sdf.style.color = 'black';}

else if (a0 === 0){
    let sdf = document.getElementById("sdf");
    sdf.style.backgroundColor = nolick.name;
    sdf.style.color = nolick.name;}

    else if (a0 % 2){
            let sdf = document.getElementById("sdf");
            sdf.style.backgroundColor = "gold";
            sdf.style.color = "black";
    }
    else{
        let sdf = document.getElementById("sdf");
        sdf.style.backgroundColor = "red";
        sdf.style.color = "black";
    }

}
function minus1(){
    a0 = a0-1;
    changeText.innerText = a0;
    if (a0 === 5){
        let sdf = document.getElementById("sdf");
        sdf.style.backgroundColor = 'green';
        sdf.style.color = 'white';}
    else if (a0 === 2){
        let sdf = document.getElementById("sdf");
        sdf.style.backgroundColor = 'blue';
        sdf.style.color = 'white';}

    else if (a0 === 1){
        let sdf = document.getElementById("sdf");
        sdf.style.backgroundColor = 'white';
        sdf.style.color = 'black';}

    else if (a0 === 0){
        let sdf = document.getElementById("sdf");
        sdf.style.backgroundColor = nolick.name;
        sdf.style.color = nolick.name;}

    else if (a0 % 2){
        let sdf = document.getElementById("sdf");
        sdf.style.backgroundColor = "gold";
        sdf.style.color = "black";
    }
    else{
        let sdf = document.getElementById("sdf");
        sdf.style.backgroundColor = "red";
        sdf.style.color ="black";
    }

}
let changeText = document.getElementById("total");
console.log(a0)
changeText.innerText = a0;
