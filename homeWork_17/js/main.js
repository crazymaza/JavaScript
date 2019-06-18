let btn = document.getElementById("play");
let newArr = []

//Удаляем шестой элемент из массива
const spliseFunc = () => {
   data.splice(6, 1)
}

//Используйте функцию forEach.
// Внутри цикла создайте новый массив объектов.
// В процессе создания нового массива объектов, избавьтесь от ключа id.
// То есть в вашем новом массиве не должно быть id в каждом конкретном объекте.
const createNewArrWithoutId = () => {
   spliseFunc()
   data.forEach(function(item) {
      newArr.push({
         url: item.url,
	      name: item.name,
	      params: item.params
      })
   })
   return newArr
}

//По новому массиву объектов, полученному с помощью функции forEach пройдитесь методом map()
// На каждой итерации цикла мы получаем один объект из массива объектов. 
// Берем этот объект и преобразоваем его поля по следующим правилам.
// Вам пригодится документация по дате и по строкам.
// Для поля Name: с помощью функций работы со стрингами делаете первую букву большой, 
// остальные маленькие (ДЖИП -> Джип)
// Для поля url: добавить перед ним «http://»
// Для поля Description: с помощью функций работы со стрингами делаете обрезание до 15 символов.
//  После добавляем многоточие (…) Остальное отбрасываете.
// Для поля date: создать объект даты из заданных миллисекунд и потом отобразить в виде «2015/07/02 14:15»
createNewArrWithoutId(data)
let remakeNewArr = newArr.map(item => {
      return {
            name: `${item.name.charAt(0)}${item.name.slice(1).toLowerCase()}`,
            url: `http://${item.url}`
         }
      })


function transform() {
   console.log(remakeNewArr)
}



btn.addEventListener("click", transform);