function dobav1() {
    let names = document.getElementById('NameList')
    let ione = document.getElementById('inp1')
    let jone = document.getElementById('mnoj1')
    let liElement = document.createElement('li')
    if (ione.value === '') {
        alert('Внесите данные!')
    }
    else if (jone.value === '') {
        alert('Внесите значение!')
    }
    else {
        for(let i = 0; i<jone.value; i++);
        i.value = ione.value;
        liElement.innerText = ione.value;


    }
}

//for(let i = 0; i<5; i++) <----- подсказка

//        liElement.innerText = inp2.value;
//         sp.append(liElement);
//         inp2.value = '';