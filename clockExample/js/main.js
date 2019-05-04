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
 let hour = document.querySelector('.hours')
 let minute = document.querySelector('.minutes')
 let second = document.querySelector('.seconds')

 const currentDay = () => {
     let date = new Date().getDay()
     let day
    switch(date) {
        case 0 :
          day = 'воскресенье'
            break
        case 6 :
           day = 'cуббота'
            break
    }
    return day
 }

const startTimerMinutes = () => {
    let date = new Date()
    day.innerHTML = `Сегодня ${currentDay()}, `
    hour.innerHTML = date.getHours()
    minute.innerHTML = date.getMinutes()
    let secondsWithoutZero = second.innerHTML = date.getSeconds()
    if (second.textContent < 10) {
        second.innerHTML = '0' + secondsWithoutZero
    }
}
console.log(day);

setInterval(startTimerMinutes, 1000)

 