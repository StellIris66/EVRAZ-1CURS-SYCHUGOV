
// let a = 1;
// let b = "sadasdfs";
// let c = true;
// let d = null;
// let t = a;
// let r = a + t;
// console.log('Здесь я проверяю значения в своих данных');
// console.log(r);
// console.log(r, a, t, d);
// let hello = 'Привет, ';
// let name = 'JJjppd';
// let st = hello + name;
// console.log(st);
// console.log(hello + name);
//
// console.log(a);
// a = a + a;
// a = a + a;
// console.log(a);
// let span = document.getElementById('answer');
// span.innerText = 5;

    //выводит сообщение на экране
    // alert('hello world')

    //prompt - окно для ввода данных
    // let name= prompt('Укажите ваше имя')
    // console.log(name);

    // //окно для вывода ответа
    // let result = confirm('Мы изучаем JS?')
    // console.log(result)

    //преобразовать строку в число (написать)



    let a = prompt('Укажите первое слагаемое')
    a = +a;
    let b = prompt('Укажите второе слагаемое')
    b = +b;
    console.log(a+b);

    let span = document.getElementById('answer');
    span.innerText = a+b;
