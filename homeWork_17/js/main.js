var btn = document.getElementById("play");

function transform() {
        
}

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
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
}

//Корректируем вывод элементов.
const newArrayAfterMap = newArray.map (item => {
   return {url : `http://${item.url}`,
         name : `${item.name.charAt(0)}${item.name.slice(1).toLowerCase()}`,
         description : `${item.description.slice(0,15)}...`,
         date: newDate(item.date),
         }
})

//Закончил на 9-ом задании на странице 
//https://coursehunter-club.net/t/jsexpert-ponyatnyj-javascript-middle-part-1/809
console.log(newArrayAfterMap)

btn.addEventListener("click", transform);