//Делаем удобочитаемую дату.
const newDate = date => {
    var tmpDate = new Date(date);
     return tmpDate.getFullYear() + "/" +
            (tmpDate.getMonth() + 1) + "/" +
            tmpDate.getDate() + " " +
            tmpDate.getHours() + ":" +
            tmpDate.getMinutes();
 }
let day = document.querySelectorAll('.today-date')[0]
let daysToNewYear = document.querySelectorAll('.today-date')[1]
let hour = document.querySelector('.hours')
let minute = document.querySelector('.minutes')
let second = document.querySelector('.seconds')

//Выбор дня в зависимости от выдачи new Date().getDay()
const currentDay = () => {
     let dateDay = new Date().getDay()
     let day
    switch(dateDay) {
        case 0 :
            day = 'воскресенье'
            break
        case 1 : 
            day = 'понедельник'
            break
        case 2 : 
            day = 'вторник'
            break
        case 3 : 
            day = 'среда'
            break
        case 4 : 
            day = 'четверг'
            break
        case 5 : 
            day = 'пятница'
            break
        case 6 :
            day = 'cуббота'
            break
    }
    return day
}

const currentMonth = () => {
    let month 
    let dateMonth = new Date().getMonth()
    let monthArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    
    for (let i = 0; i != monthArray.length; i++) {
        if (i === dateMonth) {
            month = monthArray[i]
        }
    }
    return month
}

//Делаем отсчет до 2020 года.
const goToNewYear = () => {
    let newYear = new Date(new Date().getFullYear() + 1, 00, 01, 0, 0, 0);
    let now = new Date()
    let oneDay=1000*60*60*24
    console.log(newYear)
    console.log(now)
    let howMuch = (newYear - now) / oneDay
    return Math.ceil(howMuch)
    
}

 //Функция, которая выводит время и дату
const startTime = () => {
    let date = new Date()
    day.innerHTML = `Сегодня ${currentDay()}, ${date.getDate()} ${currentMonth()}`
    let hourWithZero = hour.innerHTML = date.getHours()
    if (hour.textContent < 10) {
        hour.innerHTML = '0' + hourWithZero
    }
    let minuteWithZero = minute.innerHTML = date.getMinutes()
    if (minute.textContent < 10) {
        minute.innerHTML = '0' + minuteWithZero
    }
    let secondsWithoutZero = second.innerHTML = date.getSeconds()
    if (second.textContent < 10) {
        second.innerHTML = '0' + secondsWithoutZero
    }
    daysToNewYear.innerHTML = `До ${date.getFullYear() + 1} 
        года осталось ${goToNewYear()} дней(я)`
}

setInterval(startTime, 1000)
