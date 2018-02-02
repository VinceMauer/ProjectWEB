var classtoggle = document.querySelector(".downloadbar");
var klik = document.querySelector(".download");
var complete = document.querySelector(".moe p");
var deletebutton = document.querySelector(".delete");
var verwijderen = document.querySelector("section>a>article");
var sortdatum = document.querySelector(".containerleeslijst");
var datumbutton = document.querySelector(".calenderheader>img");
var arrowdraai = document.querySelector(".calenderheader img:nth-child(3)");

function myFunction() {
    classtoggle.classList.toggle("downloadgo");
    if (checked == true) {
        downloadbutton.src = './icons/download.svg';
        checked = false;
    }
    else {
        downloadbutton.src = './icons/downloadcomplete.svg';
        checked = true;
    }
    setTimeout(function () {
        complete.classList.toggle("showvoltooid");
    }, 3000);
    setTimeout(function () {
        classtoggle.style.opacity = "0";
        complete.style.opacity = "0";
    }, 4500);
}

function verwijder() {
    verwijderen.style.display = "none";
}

function reverse() {
    sortdatum.classList.toggle("reverse");
    arrowdraai.classList.toggle("arrowdraai");
}
klik.addEventListener('click', myFunction);
deletebutton.addEventListener('click', verwijder);
datumbutton.addEventListener('click', reverse);