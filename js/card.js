var classtoggle = document.querySelector("#cardhide");
var klik = document.querySelector("#headerimg");
var rectangle = document.querySelector(".rectangle");
var arrow = document.querySelector("#arrowdown");
console.log(klik);

function myFunction() {
    console.log("hello");
    classtoggle.classList.toggle("showform");
    klik.classList.toggle("headerimgchange");
    rectangle.classList.toggle("rectanglehide");
    arrow.classList.toggle("arrowup");
}
klik.addEventListener('click', myFunction);
arrow.addEventListener('click', myFunction);