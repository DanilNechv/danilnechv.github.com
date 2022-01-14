document.addEventListener('DOMContentLoaded', function () {
    new SimpleAdaptiveSlider('.range__slider', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    let range_slider = new SimpleAdaptiveSlider('.range__slider');
    document.querySelector('.range__slider-arrow--prev').onclick = function () {
    range_slider.prev();
    }
    document.querySelector('.range__slider-arrow--next').onclick = function () {
    range_slider.next();
    }
});

document.querySelector('.range__slider-counter .number-slides').textContent = document.getElementsByClassName('range__slide').length;

document.querySelectorAll('.dots-navigation a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1),
            scrollTarget = document.getElementById(href),
            topOffset = 0,
            elementPosition = scrollTarget.getBoundingClientRect().top,
            offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function(e) {
    document.querySelectorAll('.nav-block').forEach(function(element, index, array){

        let currentElem = document.querySelector('.nav-block:nth-child('+ (index + 1) +')'),
            items = document.querySelectorAll('.dots-navigation__item'); 

        if(window.pageYOffset >= window.pageYOffset + currentElem.getBoundingClientRect().top || window.pageYOffset >= window.pageYOffset + currentElem.getBoundingClientRect().bottom){
            Array.from(items).forEach(item => {
                item.classList.remove('dots-navigation__item--active');
            })
            document.querySelector('.dots-navigation a:nth-child('+ (index + 1) +') .dots-navigation__item').classList.add('dots-navigation__item--active');
        }
    });
});

// document.querySelector(".range__slider-counter .current-slide").textContent=String(s+1)