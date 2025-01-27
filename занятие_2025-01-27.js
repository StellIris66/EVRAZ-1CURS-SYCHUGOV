
function addLi(){
    let addElement = document.getElementById("add");
    let input = document.getElementById("name");
    let liElement = document.createElement("li");

    liElement.innerText = input.value;
    addElement.append(liElement);
    i =i+1

}