function dobav1() {
    let names = document.getElementById('NameList')
    let ione = document.getElementById('inp1')
    let jone = document.getElementById('mnoj1')
    if (ione.value === '') {
        alert('Внесите данные!')
    }
    else if (jone.value === '') {
        alert('Внесите значение!')
    }
    else {
        for (let i = 0; i < jone.value; i++) {
            let liElement = document.createElement('li')
            liElement.innerText = ione.value;
            names.append(liElement)
        }
        jone.value = '';
        ione.value = '';
    }
}

function dobav2() {
    let names2 = document.getElementById('NameSities')
    let ione2 = document.getElementById('inp2')
    let jone2 = document.getElementById('mnoj2')
    let liElement = document.createElement('li')
    if (ione2.value === '') {
        alert('Внесите данные!')
    }
    else if (jone2.value === '') {
        alert('Внесите значение!')
    }
    else {
        for (let i = 0; i < jone2.value; i++) {
            let liElement = document.createElement('li')
            liElement.innerText = ione2.value;
            names2.append(liElement)
        }
        jone2.value = '';
        ione2.value = '';

    }
}
