function anim() {
    var tl = gsap.timeline();

    tl.from(".header", {
        y: '-250',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut

    })
        .from(".abtus", {
            y: '700',
            duration: 1,
            stagger: .2,
            ease: Expo.easeInOut,


        })
        .from(".kard", {
            y: '750',
            duration: 1.7,
            stagger: .2,
            ease: Expo.easeInOut,


        })
}
anim();
