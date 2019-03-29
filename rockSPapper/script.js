//Для начала найдем все нужные элементы
const button = document.querySelector('.button')
const firstPlayerResult = document.querySelector('#first')
const secondPlayerResult = document.querySelector('#second')
const result = document.querySelector('#result')

//Теперь сделаем функцию, которая будет выводить
//случайные числа от 1 до 3
//1 - камень, 2 - ножницы, 3 - бумага
const getRandNumber = (max, min) => parseInt(Math.random() * (max - min) + min)

//Теперь мы сделаем функцию, которая будет переводить
//1, 2, 3 в строковые значения "камень", "ножницы" и "бумага"
const fromNumberToText = () => {
    let text
    switch (getRandNumber(4, 1)) {
        case 1:
            text = 'Камень'
            break
        case 2:
            text = 'Ножницы'
            break
        case 3:
            text = 'Бумага'
            break
    }
    return text
}

//Напишем функцию, которая выводит текст под "именами" игроков.
const writeText = () => {
    firstPlayerResult.innerHTML = fromNumberToText()
    secondPlayerResult.innerHTML = fromNumberToText()
}

//Сейчас оживим кнопку. 
button.addEventListener('click', function() {
    writeText()
    getResult()
})

//Ну а теперь начинается магия - делаем логику игры.
//Нужно сделать функцию, которая бы считывала значения из полей span
//Затем их сравнивала и выводила результат на экран в поле "Результат".
const getResult = () => {
    let firstText = firstPlayerResult.textContent
    let secondText = secondPlayerResult.textContent

    if (firstText === secondText) {
        result.innerHTML = 'Нет победителя'
    } else if (firstText === 'Камень' && secondText === 'Ножницы') {
        result.innerHTML = 'Победил первый игрок'
    } else if (firstText === 'Ножницы' && secondText === 'Бумага') {
        result.innerHTML = 'Победил первый игрок'
    } else if (firstText === 'Бумага' && secondText === 'Камень') {
        result.innerHTML = 'Победил первый игрок'
    } else {
        result.innerHTML = 'Победил второй игрок'
    }
}
