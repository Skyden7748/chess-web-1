

var x = 0;

var para = document.getElementById("para");

document.querySelector("#main")
    .addEventListener("click", function () {



        if (x == 0) {
            para.textContent = "";
        }

        else {
            para.textContent = "Inspiring Young Thinkers, Fostering Future Grandmasters.";
        }
        x++
    });


function anim() {
    var tl = gsap.timeline();

    tl.from(".header", {
        y: '-250',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut

    })

}
anim();

