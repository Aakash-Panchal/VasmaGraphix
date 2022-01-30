$(window).on("load",function(){
    $(".loader-container").fadeOut(1000);
});

// nav bar 

const icon = document.getElementById('icon');
const menu = document.getElementById('menu')

icon.onclick = function () {
    icon.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.style.overflow = icon.classList.contains("active")?"hidden":"";
}

document.onclick = function (clickEvent) {
    if (clickEvent.target.id !== "menu" && clickEvent.target.id !== "icon") {
        icon.classList.remove('active');
        menu.classList.remove('active');
        document.body.style.overflow = icon.classList.contains("active")?"hidden":"";
    }
};

// sticky navbar
const navbar = document.querySelector('.navbar');

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// side video 

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};
let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.target.id == 'about-video') {
            if (entry.isIntersecting) {
                entry.target.play();
            }
            else {
                entry.target.pause();
            }
        }
    });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#about-video'))