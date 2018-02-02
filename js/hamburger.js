/* ****************************************
    auteur: Sonja Rouwhorst
    datum: 2016-10-18
   **************************************** */
document.addEventListener("DOMContentLoaded", function () {
    function toggleCmdaMenu() {
        document.querySelector('#hamburger-icon').classList.toggle('close-icon');
        document.querySelector('.cmda-sidemenu nav').classList.toggle('show');
        document.querySelector('.cmda-sidemenu main').classList.toggle('move-right');
    }
    document.querySelector('#hamburger-icon').onclick = toggleCmdaMenu;
    document.querySelector('.cmda-sidemenu nav').onclick = toggleCmdaMenu;
});