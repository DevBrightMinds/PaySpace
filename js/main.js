window.onload = () => {
    document.querySelector(".app-mobile-nav-btn").addEventListener("click", toggleNavMenu, false);
}

function toggleNavMenu() {
    $(".app-nav").slideToggle(500);
}