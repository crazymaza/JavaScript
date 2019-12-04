function modal() {
    //=====Делаем модальное окно=======
    let modalOverlay = document.querySelector('.overlay');
    let modalClose = document.querySelector('.popup-close');
    let moreButton = document.querySelector('.more');
    let tabWrapper = document.querySelector('.info');
    let tabMoreButton = document.querySelectorAll('.description-btn');

    moreButton.addEventListener('click', () => {
        modalOverlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    modalClose.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        moreButton.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    //Делегируем событие на обёртку
    tabWrapper.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains('description-btn')) {
            for (let i = 0; i < tabMoreButton.length; i++) {
                if (target === tabMoreButton[i]) {
                    modalOverlay.style.display = 'block';
                    tabMoreButton[i].classList.add('more-splash');
                    document.body.style.overflow = 'hidden';
                }
            }
        }
    });
}

module.exports = modal;