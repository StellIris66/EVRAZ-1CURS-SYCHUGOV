let input1 = document.getElementById('intp');
let vivo = document.getElementById('smartfonvivo');

let Ilya = 'Илья́ Вячесла́вович О́сипов (род. 1 мая 2005, Орехово-Зуево, Россия) — российский киберспортсмен в Counter-Strike 2 играющий под псевдонимом m0NESY.';
let ZywOo = 'Матье Эрбо (фр. Mathieu Herbaut; род. 9 ноября 2000 года; Ланс) — французский киберспортсмен по Counter-Strike: Global Offensive и Counter-Strike 2, более известный под псевдонимом ZywOo.'
let NiKOla = 'Никола Ковач (босн. Nikola Kovač, род. 16 февраля 1997, Брчко) — боснийский киберспортсмен по Counter-Strike 2, более известный под ником «NiKo».'
let AlexS1mple = 'Алекса́ндр Оле́гович Ко́стылев (укр. Олександр Олегович Костилєв; род. 2 октября 1997, Киев) — украинский киберспортсмен, более известный под ником s1mple. Лучший игрок в дисциплине Counter-Strike: Global Offensive по версии портала HLTV.org по итогам 2018, 2021 и 2022 годов. В 2021 году в составе Natus Vincere стал победителем и MVP PGL Major Stockholm 2021.\n' +
    '\n' +
    'В октябре 2023 года объявил о приостановке карьеры профессионального игрока.'
let DanyaK = 'Данил Крышковец (род. 25 января 2007, Томск), более известный под ником donk, — российский киберспортсмен по Counter-Strike: Global Offensive и Counter-Strike 2, чемпион мира по Counter-Strike 2, выступающий за команду Team Spirit. 2021 — н. в. 2023— н. в.'



function jmack() {

    if (input1.value === 'Илья Осипов') {
        vivo.innerText = Ilya
    }
    else if (input1.value === 'Матье Эрбо'){
        vivo.innerText = ZywOo
    }
    else if (input1.value === 'Данил Крышковец'){
        vivo.innerText = DanyaK
    }
    else if (input1.value === 'Никола Ковач'){
        vivo.innerText = NiKOla
    }
    else if (input1.value === 'Александр Костылев'){
     vivo.innerText = AlexS1mple
    }
    else if (input1.value === 'Никола Ковач'){
        vivo.innerText = NiKOla
    }
    else{
        vivo.innerText = 'Незнаю такого челубека🤔'
    }

}
