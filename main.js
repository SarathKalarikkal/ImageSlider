let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let carousel = document.querySelector(".carousel");
let listItem = document.querySelector(".carousel .list");
let thumbnail = document.querySelector(".carousel .thumbnail");
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeout;
let autoRunTimeout;

nextBtn.onclick = () => {
    showSlider('next');
    setupAutoRun();
};

prevBtn.onclick = () => {
    showSlider('prev');
    setupAutoRun();
};

function setupAutoRun() {
    clearTimeout(autoRunTimeout);
    autoRunTimeout = setTimeout(() => {
        nextBtn.onclick();
        setupAutoRun();
    }, timeAutoNext);
}

setupAutoRun(); // Start automatic slide change initially

const showSlider = (type) => {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let thumbnailItem = document.querySelectorAll(".carousel .thumbnail .item");

    if (type === 'next') {
        listItem.appendChild(itemSlider[0]);
        thumbnail.appendChild(thumbnailItem[0]);
        carousel.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItem.prepend(itemSlider[positionLastItem]);
        thumbnail.prepend(thumbnailItem[positionLastItem]);
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeRunning);
};

