function butt1() {
    let spn1 = document.getElementById('sp1')
    for (let i = 0; i < 5; i++) {
        spn1.innerText = spn1.innerText + ' ' + i;

    }
}

function butt2() {
    let spn2 = document.getElementById('sp2')
    for (let i = 1; i <= 5; i++) {
        spn2.innerText = spn2.innerText + ' ' + i;
    }
}

function butt3() {
    let spn3 = document.getElementById('sp3')
    for (let i = 0; i < 10; i++) {
        spn3.innerText = spn3.innerText + ' ' + i;
    }
}

function butt4() {
    let spn4 = document.getElementById('sp4')
    for (let i = 1; i <= 10; i++) {
        spn4.innerText = spn4.innerText + ' ' + i;
    }
}

function butt5() {
    let spn5 = document.getElementById('sp5')
    for (let i = 0; i <= 18; i+=2) {
        spn5.innerText = spn5.innerText + ' ' + i;
    }
}

function butt6() {
    let spn6 = document.getElementById('sp6')
    for (let i = 1; i <= 19; i+=2) {
        spn6.innerText = spn6.innerText + ' ' + i;
    }
}

function butt7() {
    let spn7 = document.getElementById('sp7')

    for (let i = 1; i <= 20; i++) {
        let span = document.createElement('span')
        span.innerText = i + ' ';

        if (i % 2 === 0) {
            span.style.color = 'red';
        }

        spn7.append(span)
    }

}