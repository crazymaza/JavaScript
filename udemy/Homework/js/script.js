// Написать обработчик события, не позволяющий скриптам выполняться до загрузки страницы

// Написать функцию, что при клике на “Выбрать тур” , “Получить консультацию” 
// или “Расписание туров” (все 3 элемента)  подложка (класс overlay)
//  медленно появлялась на странице (через прозрачность), а само модальное 
// окно (класс modal) плавно выезжало сверху

// Написать функцию, что при клике на крестик всё происходило бы наоборот: 
// подложка исчезала, модальное окно уезжало вверх

$(document).ready(function () {
    function allInOne () {
        $('.overlay').animate({
            opacity: "toggle"
        }, 1000);
        $('.modal').offset({top:0})
                   .animate({
                       top : "toggle"
                   }, 3000);

    }

    $('.main_btna').on('click', allInOne);
});