function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let isDarkMode = false;

function toggleDarkMode() {
    document.body.classList.toggle("dark-screen");
    isDarkMode = !isDarkMode;
}

function updateToggleUI() {
    if (isDarkMode) {
        btntext.innerHTML = "Light";
        btnicon.className = "fas fa-sun";
        btntext_b.innerHTML = "Light";
        btnicon_b.className = "fas fa-sun";
    } else {
        btntext.innerHTML = "Dark";
        btnicon.className = "fas fa-moon";
        btntext_b.innerHTML = "Dark";
        btnicon_b.className = "fas fa-moon";
    }
}

let desktopDarkbtn = document.getElementById("desktopDarkbtn");
let mobileDarkbtn = document.getElementById("mobileDarkbtn");

let btntext = document.getElementById("btntext");
let btnicon = document.getElementById("btnicon");
let btntext_b = document.getElementById("btntext-b");
let btnicon_b = document.getElementById("btnicon-b");

desktopDarkbtn.onclick = function () {
    toggleDarkMode();
    updateToggleUI();
};

mobileDarkbtn.onclick = function () {
    toggleDarkMode();
    updateToggleUI();
};

// Call updateToggleUI to set state to btn to synchronized between the desktop and mobile views
updateToggleUI();



ScrollReveal({
    distance: '50px',
    duration: 1500,
    delay: 200,
    reset: true,
})

ScrollReveal().reveal('.section__pic-container', { origin: 'top' });
ScrollReveal().reveal('.section__text, .section-container, .contact-info-upper-container', { origin: 'bottom' });
ScrollReveal().reveal('#content_1', { origin: 'left' });
ScrollReveal().reveal('#content_2, #project_container', { origin: 'right' });