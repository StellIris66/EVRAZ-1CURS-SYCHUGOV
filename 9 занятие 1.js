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
    a0.value = 0;

    let sdf = document.getElementById("sdf");
    sdf.style.backgroundColor = "black";
    sdf.style.color = "white";

}

function odin(){
    a0.value = 1;
    let sdf = document.getElementById("sdf");
    sdf.style.backgroundColor = "white";
    sdf.style.color = "black";

}




function dwa(){
    a0.value = 2;
    let sdf = document.getElementById("sdf");
    sdf.style.backgroundColor = "blue";
    sdf.style.color = "white";
}

function five(){
    a0.value = 5;
    let sdf = document.getElementById("sdf");
    sdf.style.backgroundColor = "green";
    sdf.style.color = "white";
}

function plus1(){
    a0.value = a0 + 1;
    let sdf = document.getElementById("sdf");
    if (a0 % 2){
        function color0(){
            let sdf = document.getElementById("sdf");
            sdf.style.backgroundColor = "red";
            sdf.style.color = "black";
        }
    }
    else{
        let sdf = document.getElementById("sdf");
        sdf.style.backgroundColor = "gold";
        sdf.style.color = "black";
    }

}
function minus1(){
    a0.value = a0-1;
    let sdf = document.getElementById("sdf");
    if (a0 % 2){
        function color0(){
            let sdf = document.getElementById("sdf");
            sdf.style.backgroundColor = "red";
            sdf.style.color = "black";
        }
    }
    else{
        let sdf = document.getElementById("sdf");
        sdf.style.backgroundColor = "gold";
        sdf.style.color ="black";

    }
    changeText.innerText = a0;

}

let changeText = document.getElementById("total");
changeText.innerText = a0;