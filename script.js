const hamburger = document.getElementById('hamburger');
const nav = document.getElementsByClassName('mob-nav')[0];
const empty = document.getElementsByClassName('hidden')[0];

hamburger.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        setTimeout(() => {
            empty.classList.remove('show2');
        }, 3000);
    } else {
        empty.classList.add('show2');
        nav.classList.add('show');
    }
});
