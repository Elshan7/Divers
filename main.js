window.addEventListener('scroll', () => {
    let header = document.querySelector('.menu-down');
    if (window.scrollY > 150) {
        header.classList.add('headerAnime');
    } else {
        header.classList.remove('headerAnime');
    }
});


let valueDisplays = document.querySelectorAll('.num');
let interval = 2000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval ( function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    },duration);
});


document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.fa-magnifying-glass.search');
    const closeBtn = document.querySelector('.closebtn');
    const searchOverlay = document.getElementById('searchOverlay');

    searchIcon.addEventListener('click', function () {
        searchOverlay.classList.add('show');
    });

    closeBtn.addEventListener('click', function () {
        searchOverlay.classList.remove('show');
    });
});


window.onload = function() {
    const overlay = document.getElementById('overlay');

   
    setTimeout(function() {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; 
        setTimeout(function() {
            overlay.style.display = 'none'; 
        }, 100); 
    }, 1000); 
};