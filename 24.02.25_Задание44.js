Jame()

function Jame() {

    // let li =document.createElement('li');
    let io = document.getElementById('spisk');
    while (true) {
        let xentrioN = prompt('1-red,2-green, 3-blue, 4-stop');
        let div = document.createElement('div');
        if (xentrioN == 1) {
            div.classList.add('blockred')
            io.append(div)
        }
        else if (xentrioN == 2) {
            div.classList.add('blockgreen')
            io.append(div)
        }
        else if (xentrioN == 3){
            div.classList.add('blockblue')
            io.append(div)
        }
        else{
            break;
        }
    }
}