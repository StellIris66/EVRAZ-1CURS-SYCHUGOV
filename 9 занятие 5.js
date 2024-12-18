
let a = document.getElementById('One');
let b = document.getElementById('Two');
let c = document.getElementById('Oper');
let d = document.getElementById('podval');




function kislomolochnie(){
    a = +a.value;
    b = +b.value;

    if (c.innerText === "/"){
        d.innerText = a / b;
    }
    else if (c.innerText === "*"){
        d.innerText = a * b;
    }
    else if  (c.innerText === "+"){
        d.innerText = a + b;
    }
    else if (c.innerText === "-"){
        d.innerText = a - b;
    }
    else{
        d.innerText = 'я хз как это считать, напиши по номальна🤞'
        console.log(c.value)
        console.log(a)
        console.log(b)
    }

}