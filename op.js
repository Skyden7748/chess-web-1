

function anim() {
    var tl = gsap.timeline();

    tl.from(".header", {
        y: '-250',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut

    })
        .to(".godn", {
            y: '0',
            duration: 2,
            ease: Expo.easeInOut,
            stagger: .2

        })
        .from(".know", {
            y: '400',
            duration: 2,
            ease: Expo.easeInOut,


        })
}
anim();

