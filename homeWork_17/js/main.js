let btn = document.getElementById('play');
let result = document.querySelector("#result")
let sortABC = document.querySelector('#sortABC')
let sortNewToOld = document.querySelector('#sortNewToOld')



//Убираем элемент из массива.
data.splice(5,1)

//Делаю новый массив из старого с отсутствием поля id
let newArray = []
data.forEach(item => {
   newArray.push ({
      name : item.name,
      url : item.url,
      params : item.params,
      description : item.description,
      date : item.date,
   })
})

//Делаем удобочитаемую дату.
const newDate = date => {
   var tmpDate = new Date(date);
   return tmpDate.getDate() + "/" +
         (tmpDate.getMonth() + 1) + "/" +
         tmpDate.getFullYear() + " " +
         tmpDate.getHours() + ":" +
         tmpDate.getMinutes();
}

//Корректируем вывод элементов.
let getNewArrayAfterMap = newArray.map (item => {
   return {url : `http://${item.url}`,
         name : `${item.name.charAt(0)}${item.name.slice(1).toLowerCase()}`,
         description : `${item.description.slice(0,15)}...`,
         date: newDate(item.date),
         params: `${item.params.status} => ${item.params.progress}`,
         isVisible: item.params.status,
         }
})

//Фильтруем массив по значению статуса
let getNewArrayAfterFilter = getNewArrayAfterMap.filter(item => 
   item.isVisible === true)

//Вывод на экран элементов массива. Создание элементом с помощью шаблонных строк.
const createElement = array => { array.forEach(element => {
      result.insertAdjacentHTML('beforeend',  
         `<div class = 'wrapper col-lg-4'>
            <img src = '${element.url}'></img>
            <h3>${element.name}</h3>
            <p>${element.description}</p>
            <p>${element.date}</p>
         </div>`
      )
   });
}

//Функция кнопки. Создаю элементы, потом убираю обработчик, затем блокирую кнопку.
function transform() {
   createElement(getNewArrayAfterFilter)
   sortAtoZ(getNewArrayAfterFilter)
   btn.removeEventListener("click", transform)
   btn.classList.add('disabled')
}
//Функция сортировки по алфавиту.
const sortAtoZ = array => { 
   let byName = array.slice(0)
   byName.sort(function(a,b) {
      let x = a.name.toLowerCase()
      let y = b.name.toLowerCase()
      return x < y ? -1 : x > y ? 1 : 0
   })
   result.innerHTML = ''
   createElement(byName)
}
const sortFunc = () => {sortAtoZ(getNewArrayAfterFilter)}

//Функция сортировки по дате от нового к старому.
const sortNToO = array => {
   let byDate = array.slice(0)
   byDate.sort(function(a,b) {
      let x = a.date
      let y = b.date
      return x < y ? 1 : x > y ? -1 : 0
   })
   result.innerHTML = ''
   createElement(byDate)
}

const sortNewToOldFunc = () => {sortNToO(getNewArrayAfterFilter)}

//Обработчик клика.
btn.addEventListener('click', transform)
sortABC.addEventListener('click', sortFunc)
sortNewToOld.addEventListener('click', sortNewToOldFunc)
console.log(getNewArrayAfterFilter)
//Закончил сортировку галереи
//https://coursehunter-club.net/t/jsexpert-ponyatnyj-javascript-middle-part-2/810