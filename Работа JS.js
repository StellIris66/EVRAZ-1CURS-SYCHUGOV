let name = prompt('Укажите имя')
console.log(name)

let lastname = prompt('Укажите фамилию')
console.log(lastname)

let middlename = prompt('Укажите отчество')
console.log(middlename)

let age = prompt('Возраст')
console.log(age)

let school = prompt('Школа')
console.log(school)

let clas = prompt('Класс')
console.log(clas)

let sport = prompt('Любимый спорт')
console.log(sport)

let subject = prompt('Любимый subject')
console.log(subject)

let color = prompt('Любимый color')
console.log(color)

let nameDOM = document.getElementById('name');
nameDOM.innerText = name;

let lastnameDOM = document.getElementById('lastname');
lastnameDOM.innerText = lastname;

let midlenameDOM = document.getElementById('middlename');
midlenameDOM.innerText = middlename;

let sportDOM = document.getElementById('sport');
sportDOM.innerText = sport;

let colorDOM = document.getElementById('color');
colorDOM.innerText = color;

let clasDOM = document.getElementById('class');
clasDOM.innerText = clas;

let choolDOM = document.getElementById('school');
choolDOM.innerText = school;

let subjectDOM = document.getElementById('subject');
subjectDOM.innerText = subject;

let ageDOM = document.getElementById('age');
ageDOM.innerText = age;

let form = document.getElementById('form');
let button = document.getElementById('button');
button.addEventListener('reset', () => form.reset())