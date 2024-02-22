let l = gsap.timeline({
    scrollTrigger: {
        trigger: ".courses-part p",
        start: '-60% center',
        end: '40% center',
        scrub: true,



    }

})
l.to(".courses-part p", {
    color: "#fecc09"



})
let m = gsap.timeline(


)
m.from(".courses-right-part", {
    x: 400,




})
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
