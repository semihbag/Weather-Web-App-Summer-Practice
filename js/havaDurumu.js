let boxCity = document.querySelector('#box-city');
let boxInfo = document.querySelector('#box-info');
let boxWeekly = document.querySelector('#box-weekly');
let boxCurrent;

let btnWeekly = document.querySelector('#btn-weekly');
let btnInfo = document.querySelector('#btn-info');

let bool = true;        // true means city box on left side
let btnSwitch = document.querySelector('#sbtn');
let boxes = document.querySelectorAll('.box');

let iconBoxes = document.querySelectorAll('.icon-box');
let humidityIcon = document.querySelector('#humidity-icon');
let windy = document.querySelector('#wind-icon');
let feelsLike = document.querySelector('#feels-like-icon');
let maxMinDegree = document.querySelector('#max-min-degree-icon');
let pressure = document.querySelector('#pressure-icon');

let bgColor;
let bgColorBox;
let bgColorDayBox;
let shadowColor;
let textColor;


// change theme
btnSwitch.addEventListener('click', (e) => {

    let key = window.getComputedStyle(document.documentElement).getPropertyValue("background").includes("rgb(175, 228, 228)");
    bgColor = (key) ? "rgb(19, 18, 20)" : "rgb(175, 228, 228)";
    bgColorBox = (key) ? "rgb(29, 28, 31)" : "rgb(248, 240, 230)";
    bgColorDayBox = (key) ? "rgba(0, 0, 0, 0.1)" : "white";
    shadowColor = (key) ? "white" : "black";
    textColor = (key) ? "white" : "black";
    humidityIcon.src = (key)? "../images/humidity_white.png" : "../images/humidity.png";
    windy.src = (key)? "../images/wind_white.png" : "../images/wind.png";
    feelsLike.src = (key)? "../images/thermometer_white.png" : "../images/thermometer.png";
    maxMinDegree.src = (key)? "../images/temperature_white.png" : "../images/temperature.png";
    pressure.src = (key)? "../images/pressure_white.png" : "../images/pressure.png";

    document.documentElement.style.setProperty("--shadow_color", shadowColor);
    document.documentElement.style.setProperty("--bground-color", bgColor);
    document.documentElement.style.setProperty("--box-color", bgColorBox);
    document.documentElement.style.setProperty("--cart-box-color", bgColorDayBox);
    document.documentElement.style.setProperty("--text-color", textColor);
});




//set day icon
function setDayIcons(day, icon) {

    let selectedDay = document.querySelector('#' + day);
    fetch('../icons/' + icon + '.html')
        .then(response => response.text())
        .then(data => {
            selectedDay.querySelector('.icon-box').innerHTML = data;
        });

}

let w = "cloudDrizzleSun";
setDayIcons('day-1', w);
setDayIcons('day-2', w);
setDayIcons('day-3', w);
setDayIcons('day-4', w);
setDayIcons('day-5', w);
setDayIcons('day-6', w);
setDayIcons('day-7', w);

// todays icon
setDayIcons('today-info','sun');
setDayIcons('sunrise','sunriseAlt');
setDayIcons('sunset','sunsetAltFill');


// open weekly page
btnWeekly.addEventListener('click', () => {
    if (!bool) {
        closeBox(boxCurrent);
    }
    openBox(boxWeekly);
});


// open info page
btnInfo.addEventListener('click', () => {
    if (!bool) {
        closeBox(boxCurrent);
    }
    openBox(boxInfo);
});


// open any page
function openBox(box) {
    box.style.visibility = "initial";
    box.style.opacity = "1";
    boxCity.style.left = "70.5%";
    box.style.right = "30%";
    boxCurrent = box
    bool = false;
}


// close any page
function closeBox(box) {
    console.log("close box");
    box.style.visibility = "hidden";
    box.style.opacity = "0";
    boxCity.style.left = "0";
    box.style.right = "0";
    bool = true;
}





