function tabs() {
    //=======Делаем рабочими табы на странице=======
    let infoHeader = document.querySelector('.info-header');
    let tabs = document.querySelectorAll('.info-header-tab');
    let tabInfo = document.querySelectorAll('.info-tabcontent');

    const hideContent = contentNumber => {
        for (let i = contentNumber; i < tabInfo.length; i++) {
            tabInfo[i].classList.remove('show');
            tabInfo[i].classList.add('hide');
        }
    }

    hideContent(1);

    const showContent = contentNumber => {
        if (tabInfo[contentNumber].classList.contains('hide')) {
            tabInfo[contentNumber].classList.remove('hide');
            tabInfo[contentNumber].classList.add('show');
        }
    }

    infoHeader.addEventListener('click', event => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;