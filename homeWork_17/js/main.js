var btn = document.getElementById("play");
let result = document.querySelector("#result")



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
    return tmpDate.getFullYear() + "/" +
           (tmpDate.getMonth() + 1) + "/" +
           tmpDate.getDate() + " " +
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
         </div>`
      )
   });
}

//Функция кнопки. Создаю элементы, потом убираю обработчик, затем блокирую кнопку.
function transform() {
   createElement(getNewArrayAfterFilter)
   btn.removeEventListener("click", transform);
   btn.classList.add('disabled')
}

//Обработчик клика.
btn.addEventListener("click", transform);

//Закончил первое задание по галерее на странице
//https://coursehunter-club.net/t/jsexpert-ponyatnyj-javascript-middle-part-2/810