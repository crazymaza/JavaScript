// Создайте функцию, возвращающую слово «ворона» в правильной форме в зависимости от переданого числа n. 
//Например: На ветке сидит 1 ворона; На ветке сидит 4 вороны; На ветке сидит 26 ворон.
const howManyCrow = num => {
    let lastNum = +num % 10
    if (lastNum === 1) {
        console.log(`На ветке сидит ${ num } ворона`);
    } else if (lastNum >= 2 && lastNum <= 4) {
        console.log(`На ветке сидит ${ num } вороны`);
    } else if (lastNum >= 5 && lastNum <= 9 || lastNum === 0) {
        console.log(`На ветке сидит ${ num } ворон`);
    } else {
        console.log(`У вас указано не число - ${ num }`)
    }
}

// Напишите функцию, которая принимает строку и выполняет следующее преобразование:
// если принимаемая строка больше или равна 15 символов, 
// то остаток строки обрезается и вставляется символ … (троеточие). 
// Для решения этой задачи используйте строковый метод String.substring().
const makeStringLimit = string => {
    let stringLnength = string.length
    if (stringLnength > 15) {
       console.log(`${ string.substring(0, 15) }...`)
    }
}

