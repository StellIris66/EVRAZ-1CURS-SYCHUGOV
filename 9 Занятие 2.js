function proverka() {
    let Da = document.getElementById("S1mple");
    let ine1 = document.getElementById("DarthSidius");
    if (Da % 2) {
        ine1.innerText = "Чет";}
    else {
        ine1.innerText = "Нечeт";
    }
    console.log(ine1)
}