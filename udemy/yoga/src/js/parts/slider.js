function slider() {
    //Делаем слайдер
    let slideIndex = 1;
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');

    //Убираем все слайды со страницы, кроме слайда с нужным индексом.
    //Также убираем с точек класс active
    //После чего добавляем нужный слайд(index - номер слайда) и точку на страницу. 
    const showSlides = index => {
        if(index > slides.length) {
            slideIndex = 1;
        }
        if(index < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => item.style.display = 'none');
        dots.forEach(item => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    };
    showSlides(1); 

    const plusSlides = (index) => {
        showSlides(slideIndex += index);
    };

    const curentSlide = (index) => {
        showSlides(slideIndex = index);
    };

    //Делаем переключалку на стрелочки.
    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    //Делаем переключалку на стрелочки.
    next.addEventListener('click', () => {
        plusSlides(1);
    });

    //Делаем переключалку на кнопки.
    dotsWrap.addEventListener('click', (event) => {
        for(let i = 0; i < dots.length + 1; i++) {
            if(event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                curentSlide(i);
            }
        }
    });
}

module.exports = slider;