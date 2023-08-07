const carouselItems = document.querySelectorAll(".carousel-item");
const carousel = document.querySelector(".carousel");
let currentIndex = 0;
let interval;

function showItem(index) {
    const itemWidth = carouselItems[0].offsetWidth;
    carousel.style.transform = `translateX(-${index * itemWidth}px)`;
}

function nextItem() {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }
    showItem(currentIndex);
}

function prevItem() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    }
    showItem(currentIndex);
}

function startCarousel() {
    interval = setInterval(nextItem, 5000);
}

function stopCarousel() {
    clearInterval(interval);
}

showItem(currentIndex);
startCarousel();



