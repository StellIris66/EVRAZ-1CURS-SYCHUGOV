Jame()

function Jame() {
    let xentrioN = prompt('1-red,2-green, 3-blue, 4-stop');
    // let li =document.createElement('li');
    let io = document.getElementById('spisk');
    console.log(xentrioN)
    while (xentrioN >= 4) {
        let div = document.createElement('div');
        if (xentrioN === 1) {
            div.classList.add('blockred')
            io.append(div)
        }
        else if (xentrioN === 2) {
            div.classList.add('blockgreen')
            io.append(div)
        }
        else {
            div.classList.add('blockblue')
            io.append(div)
        }

    }
}