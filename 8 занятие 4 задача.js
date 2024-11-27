
function kn1() {
    let span1 = document.getElementById('span1');
    let d1 = document.getElementById('d1');
    span1.innerText = span1.innerText + d1.value;
    console.log(d1.value);
    d1.value = "";
}

function kn2(){   let d3 = document.getElementById('d2');

    let span2 = document.getElementById('span2');
    let d2 = document.getElementById('d2');
    span2.innerText = span2.innerText + d2.value;
    console.log(d2.value);
    d2.value = "";
}

function kn3() {
    let span3 = document.getElementById('span3');
    let d3 = document.getElementById('d3');
    span3.innerText = span3.innerText + d3.value;
    console.log(d3.value);
    d3.value = "";
}

function clearVse() {
    span1.innerText = '';
    span2.innerText = '';
    span3.innerText = '';
}