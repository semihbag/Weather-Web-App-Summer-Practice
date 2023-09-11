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

let bgColor;
let bgColorBox;
let bgColorDayBox;
let shadowColor;
let textColor;


// change theme
btnSwitch.addEventListener('click', (e) => {

    let key = window.getComputedStyle(document.documentElement).getPropertyValue("background").includes("rgb(100, 149, 237)");
    bgColor = (key) ? "rgb(19, 18, 20)" : "rgb(100, 149, 237)";
    bgColorBox = (key) ? "rgb(29, 28, 31)" : "rgb(248, 240, 230)";
    bgColorDayBox = (key) ? "rgba(0, 0, 0, 0.1)" : "white";
    shadowColor = (key) ? "white" : "black";
    textColor = (key) ? "white" : "black";

    document.documentElement.style.setProperty("--shadow_color", shadowColor);
    document.documentElement.style.setProperty("--bground-color", bgColor);
    document.documentElement.style.setProperty("--box-color", bgColorBox);
    document.documentElement.style.setProperty("--cart-box-color", bgColorDayBox);
    document.documentElement.style.setProperty("--text-color", textColor);
});




//set day icon
function setDayIcons(day, icon) {

    fetch('../icons/' + icon + '.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#' + day).innerHTML = data;
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

setDayIcons('day-icon','sun')

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







