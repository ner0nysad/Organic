const iconMenu = document.querySelector(".header__icon");
iconMenu.addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("header-active");
});