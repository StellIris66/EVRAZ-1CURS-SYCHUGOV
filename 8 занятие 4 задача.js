function clearVse() {
    console.log('очистка всего');
    let Vse = document.getElementById('clearVse');
    Vse.innerText = '';
}
function kn1() {
    let span1 = document.getElementById('span1');
    let d1 = document.getElementById('d1');
    span1.innerText = span1.innerText + d1.value;

}

function kn2() {
    let span2 = document.getElementById('span2');
    let d2 = document.getElementById('d2');
    d2.innerText = span2;
}

function kn3() {
    let span3 = document.getElementById('span3');
    let d3 = document.getElementById('d3');
    d3.innerText = span3;
}