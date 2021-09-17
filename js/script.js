const settingsMenu = document.querySelector(".user-settings");
const sidebarToggle = document.querySelector(".sidebar_toggle");
const navClose = document.querySelector(".nav-close");
const overlay = document.querySelector(".overlay");

function userSettings () {
    settingsMenu.classList.toggle("user-settings-height");
}

sidebarToggle.addEventListener('click', function (){
    document.querySelector(".sidebar").setAttribute('style', 'display:block');
    overlay.setAttribute('style', 'opacity:0.1')
})

navClose.addEventListener('click', function (){
    document.querySelector(".sidebar").setAttribute('style', 'display:none');
    overlay.setAttribute('style', 'opacity:0')
})
// overlay.addEventListener('click', function (){
//     document.querySelector(".sidebar").setAttribute('style', 'display:none');
//     overlay.setAttribute('style', 'opacity:0')
// })
document.onclick = function (e) {
    if (e.target.id !== 'sidebar' && e.target.id !== 'sidebar_toggle') {
        // toggle.classList.remove("active");
        // navbar.classList.remove("active");
        document.querySelector(".sidebar").setAttribute('style', 'display:none');
        overlay.setAttribute('style', 'opacity:0')
    }
}