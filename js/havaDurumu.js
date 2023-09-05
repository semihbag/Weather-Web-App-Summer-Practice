let boxCity = document.querySelector('#box-city');
let boxInfo = document.querySelector('#box-info');
let btnDetay = document.querySelector('#btn-detay');
let bool = true;
let btnSwitch = document.querySelector('#sbtn');


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

    let bgColor = document.getElementsByTagName("html")[0].style.backgroundColor;
    bgColor = (bgColor === "var(--dark_theme_color)")? "var(--light_theme_color)" : "var(--dark_theme_color)";
    document.querySelector('html').style.backgroundColor = bgColor;

});



