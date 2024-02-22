
var up = document.querySelector("#back");
var bgg = document.querySelector(".load");


setInterval(function () {
    bgg.classList.add("loadass")

}, 1700);




const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        } else {

            entry.target.classList.remove('show');



        }

    });

});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const obss = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
            console.log("Element is intersecting!");
            entry.target.classList.add('showcrow');
        } else {
            console.log("Element is not intersecting!");
            entry.target.classList.remove('showcrow');
        }
    });
}, { threshold: 0.5 });

const he = document.querySelectorAll(".card");
he.forEach((el) => obss.observe(el));




let scrollcontainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let forBtn = document.getElementById("forbtn");
scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;

});
forBtn.addEventListener("click", () => {
    scrollcontainer.scrollLeft += 700;
    scrollcontainer.style.scrollBehavior = "smooth";
})
backBtn.addEventListener("click", () => {
    scrollcontainer.scrollLeft -= 700;
    scrollcontainer.style.scrollBehavior = "smooth";
})


var vit = document.getElementById("barnav")
function showMenu() {
    vit.style.top = "0";

}
function hideMenu() {
    vit.style.top = "-400px";

}

/*swiper*/
var vw = window.innerWidth;
var swiper = new Swiper(".mySwiper", {

    slidesPerView: 10,
    loop: true,
    spaceBetween: 1,
    centeredSlides: true,
    autoplay: {
        delay: 1600,
        disableOnInteraction: true,
    },
    touch: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        fade: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 4,
        }
    },

});



