function kn1(){
    let span1one = document.getElementById("span1");
    let d1one = document.getElementById("d1");
    span1one.innerText = span1one.innerText + d1one.value;
    console.log(d1one.value);
    d1one.value = "";

}
function kn2() {
    let span2one = document.getElementById("span2");
    let d2one = document.getElementById('d2')
    span2one.innerText = span2one.innerText + d2one.value;
    console.log(d2one.value);
    d2one.value = "";

}
function kn3(){
    let span3one = document.getElementById("span3");
    let d3one = document.getElementById("d3");
    span3one.innerText = span3one.innerText + d3one.value;
    console.log(d3one.value);
    d3one.value = "";
}

function clearButton(){
    span1.innerText = '';
    span2.innerText = '';
    span3.innerText = '';
}