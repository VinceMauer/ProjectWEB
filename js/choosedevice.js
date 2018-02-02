var toggle;
var checked = false;
var venster = document.querySelector('.choosedevice');
var devicebutton = document.querySelector('.device');
var downloadmoebutton = document.querySelector('.downloadmoe');

function choosedevices() {
    venster.classList.toggle("showchoosedevice");
}

function downloadmoe() {
    if (checked == true) {
        downloadmoebutton.src = './icons/downloadgreen.svg';
        checked = false;
    }
    else {
        downloadmoebutton.src = './icons/downloadcomplete.svg';
        checked = true;
    }
}
devicebutton.addEventListener('click', choosedevices);
downloadmoebutton.addEventListener('click', downloadmoe);