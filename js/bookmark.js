var toggle;
var checked = false;
var toggle = document.querySelector('.bookmarkunchecked');
var confirmation = document.querySelector('.confirmicon');
var downloadbutton = document.querySelector('.download');
var downloadbar = document.querySelector('.downloadprogression');
var voltooid = document.querySelector('.voltooid');
var zoekknop = document.querySelector('.search');
var zoekbar = document.querySelector('.zoeken');

function klik() {
    if (checked == true) {
        toggle.src = './icons/bookmarkoff.svg';
        checked = false;
    }
    else {
        toggle.src = './icons/bookmarkwhite.svg';
        checked = true;
    }
    confirmation.classList.toggle("confirmshow");
}
toggle.addEventListener('click', klik, false);

function downloaden() {
    if (checked == true) {
        downloadbutton.src = './icons/download.svg';
        checked = false;
    }
    else {
        downloadbutton.src = './icons/downloadcomplete.svg';
        checked = true;
    }
    downloadbar.classList.toggle('showdownload');
    setTimeout(function () {
        voltooid.classList.toggle("complete");
    }, 3000);
    setTimeout(function () {
        confirmation.classList.toggle("confirmshow");
    }, 3000);
}

function zoeken() {
    zoekbar.classList.toggle('showzoek');
}

function downloadvoltooid() {
    voltooid.classList.toggle("complete");
}
downloadbutton.addEventListener("click", downloaden);
zoekknop.addEventListener('click', zoeken);