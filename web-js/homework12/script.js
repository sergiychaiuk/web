const images = document.querySelectorAll('.image-to-show');
let currentIndex = 0;
let intervalId;

const timerElement = document.getElementById('timer');
let timerValue = 10;

function showNextImage() {
    let previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % images.length;

    images[previousIndex].classList.toggle("active");
    images[currentIndex].classList.toggle("active");

    timerValue = 10;
    updateTimer();
}

function updateTimer() {
    timerElement.textContent = timerValue.toFixed(1);

    if (timerValue <= 0) {
        showNextImage();
    }
}

function startSlideshow() {
    intervalId = setInterval(function() {
        timerValue -= 0.1;
        updateTimer();
    }, 100);
}

function stopSlideshow() {
    clearInterval(intervalId);
}

function resumeSlideshow() {
    startSlideshow();
}

document.getElementById('stopButton').addEventListener('click', stopSlideshow);
document.getElementById('resumeButton').addEventListener('click', resumeSlideshow);

startSlideshow();