let Da = document.getElementById("S1");
let ine1 = document.getElementById("Darth");

function proverka() {
    console.log(Da.value % 2)
    if (Da.value % 2) {
        ine1.innerText = "Нечeт";
    }
    else {
        ine1.innerText = "Чет";
    }
}