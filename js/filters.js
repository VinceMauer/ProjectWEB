var classtoggle = document.querySelector("#myDropdown");
var klik = document.querySelector(".dropbutton")
console.log(klik);

function myFunction() {
    classtoggle.classList.toggle("show");
}
klik.addEventListener('click', myFunction);