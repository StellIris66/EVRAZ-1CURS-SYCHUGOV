function addOne() {
    let n = document.getElementById('listNames')
    let inp1 = document.getElementById('vvodone')
    let liElement = document.createElement('li')
    if (inp1.value === '') {
        alert('Добавь значение!')
    }
    else {
        liElement.innerText = inp1.value;
        n.append(liElement);
        inp1.value = '';
    }
}

function addTwo(){
    let sp = document.getElementById('liseSities');
    let inp2 = document.getElementById('vvodtwo');

}