let boxCity = document.querySelector('#box-city');
let boxInfo = document.querySelector('#box-info');
let btnDetay = document.querySelector('#btn-detay');
let bool = true;

btnDetay.addEventListener('click', () => {
    if (bool) {
        boxInfo.style.visibility = "initial";
        boxInfo.style.opacity = "1";
        boxCity.style.left = "70%";
        boxInfo.style.right = "30%";
        console.log('tıkladın');
        bool = false;
    }
    else {
        boxInfo.style.visibility = "hidden";
        boxInfo.style.opacity = "0";
        boxCity.style.left = "0";
        boxInfo.style.right = "0";
        console.log('tıkladın');
        bool = true;
    }

});



