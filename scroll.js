var width = window.innerWidth;
if (width < 765) {
    let tl = gsap.timeline({
        scrollTrigger: {

            trigger: ".courses",
            start: '-100% center',
            end: '30% center',
            scrub: true,



        }

    })
    tl.to(".courses", {
        x: 1500,




    })
    let m = gsap.timeline({
        scrollTrigger: {
            trigger: ".courses h1",
            start: '-200% center',
            end: '50% center',
            scrub: true,


        }

    })
    m.to(".courses h1", {
        x: 1000



    })
}
else {
    let tl = gsap.timeline({
        scrollTrigger: {

            trigger: ".courses",
            start: '-50% center',
            end: '40% center',
            scrub: true,


        }

    })
    tl.to(".courses", {
        x: 1500,




    })
    let m = gsap.timeline({
        scrollTrigger: {
            trigger: ".courses h1",
            start: '-100% center',
            end: '200% center',
            scrub: true,


        }

    })
    m.to(".courses h1", {
        x: 1000



    })
}








let lt = gsap.timeline({
    scrollTrigger: {
        trigger: ".swiper",
        start: '35% 100%',
        end: '35% 45%',
        scrub: true,


    }

})
lt.to(".swiper", {
    x: -1000,




})
let z = gsap.timeline(

)
z.to(".elem h1", {
    y: -100,
    delay: 1.6,




}


)






const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


