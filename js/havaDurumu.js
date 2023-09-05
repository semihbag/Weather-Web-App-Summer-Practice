let boxCity = document.querySelector('#box-city');
let boxInfo = document.querySelector('#box-info');
let btnDetay = document.querySelector('#btn-detay');
let bool = true;
let btnSwitch = document.querySelector('#sbtn');
let boxes = document.querySelectorAll('.box');
let bgColor;
let bgColorBox;
let bgColorDayBox;
let shadowColor;
let textColor;

btnDetay.addEventListener('click', () => {
    if (bool) {
        boxInfo.style.visibility = "initial";
        boxInfo.style.opacity = "1";
        boxCity.style.left = "70%";
        boxInfo.style.right = "30%";
        bool = false;
    }
    else {
        boxInfo.style.visibility = "hidden";
        boxInfo.style.opacity = "0";
        boxCity.style.left = "0";
        boxInfo.style.right = "0";
        bool = true;
    }
});

btnSwitch.addEventListener('click', (e) => {
 
    let key = window.getComputedStyle(document.documentElement).getPropertyValue("background").includes("rgb(100, 149, 237)");
    bgColor = (key)? "rgb(31, 45, 72)" : "rgb(100, 149, 237)";
    bgColorBox = (key)? "rgb(14, 28, 55)" : "rgb(248, 240, 230)";
    bgColorDayBox = (key)? "rgb(31, 45, 72)" : "white";
    shadowColor = (key)? "white" : "black";
    textColor = (key)? "white" : "black";

  //  bgColorBox = "rgb(248, 240, 230)";

    document.documentElement.style.setProperty("--shadow_color", shadowColor);
    document.documentElement.style.setProperty("--bground-color", bgColor);
    document.documentElement.style.setProperty("--box-color", bgColorBox);
    document.documentElement.style.setProperty("--day-box-color", bgColorDayBox);
    document.documentElement.style.setProperty("--text-color", textColor);
});



