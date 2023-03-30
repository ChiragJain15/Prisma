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

const days = document.getElementById('days');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const seconds = document.getElementById('seconds');
const date = '15 Mar 2024';
const goal = new Date(date);

function counter() {
    const today = new Date();
    time = goal - today;
    time = Math.floor(time / 1000);
    let second = Math.floor(time % 60);
    let minute = Math.floor((time / 60) % 60);
    let hour = Math.floor((time / 3600) % 24);
    let day = Math.floor(time / 3600 / 24);
    if (second < 10) seconds.innerHTML = `0${second}`;
    else seconds.innerHTML = second;
    if (minute < 10) minutes.innerHTML = `0${minute}`;
    else minutes.innerHTML = minute;
    if (hour < 10) hours.innerHTML = `0${hour}`;
    else hours.innerHTML = hour;
    if (day < 10) days.innerHTML = `0${day}`;
    else days.innerHTML = day;
}

counter();

setInterval(counter, 1000);

function checkBoxForm() {
    var checkBox = document.getElementById("check");
    var field = document.getElementById("uni");
    if (checkBox.checked == true){
      field.style.transform = "scale(0)";
    } else {
      field.style.transform = "scale(1)";
    }
  }
