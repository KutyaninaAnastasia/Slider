const slidesData = [
    {
        city: 'Rostov-on-Don, LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon Request',
        image: 'img/admiral.png',
        alt: 'Rostov-on-Don, Admiral'
    },
    {
        city: 'Sochi, Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon Request',
        image: 'img/thieves.png',
        alt: 'Sochi, Thieves'
    },
    {
        city: 'Rostov-on-Don, Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon Request',
        image: 'img/patriotic.png',
        alt: 'Rostov-on-Don, Patriotic'
    }
];

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const dots = document.querySelectorAll('.slider-buttons__dot');
const navItems = document.querySelectorAll('.slider-nav__item')

let currentSlideIndex = 0;
updateSlide(currentSlideIndex);


function updateSlide(index) {
    const slide = slidesData[index];
    const cityText = slide.city.split(', ').join('<br>');
    document.querySelector('.city').innerHTML = cityText;
    document.querySelector('.area').textContent = slide.area;
    document.querySelector('.time').textContent = slide.time;
    document.querySelector('.cost').textContent = slide.cost;
    document.querySelector('.slider-img img').src = slide.image;
    document.querySelector('.slider-img img').alt = slide.alt;
}

leftArrow.addEventListener('click', function() {
    currentSlideIndex = (currentSlideIndex - 1 + slidesData.length) % slidesData.length;
    updateNavigation(currentSlideIndex);
});

rightArrow.addEventListener('click', function() {
    currentSlideIndex = (currentSlideIndex + 1) % slidesData.length;
    updateNavigation(currentSlideIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateNavigation(index);
    });
});

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        updateNavigation(index);
    });
});

function updateNavigation(index) {
    dots.forEach((dot) => {
        dot.classList.remove('active-dot');
    });
    dots[index].classList.add('active-dot');

    navItems.forEach((item) => {
        item.classList.remove('active-nav-item');
    });
    navItems[index].classList.add('active-nav-item');

    updateSlide(index);
}