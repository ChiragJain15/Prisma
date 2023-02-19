var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName('bubbly-button');

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

// let scrollTimeout;
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById('navbar').style.top = '0';
//     } else {
//         document.getElementById('navbar').style.top = '-100%';
//     }

//     // Event buffering here
//     clearTimeout(scrollTimeout);
//     scrollTimeout = setTimeout(function () {
//         prevScrollpos = currentScrollPos;
//     }, 500); // This delay may need adjustment...
// };
