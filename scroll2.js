let lt = gsap.timeline({
    scrollTrigger: {
        trigger: ".c img",
        start: 'top center',
        end: 'center center',
        scrub: true,



    }

})
lt.from(".c img", {
    opacity: 0,




})
let l = gsap.timeline({
    scrollTrigger: {
        trigger: ".ce ",
        start: '-350% center',
        end: '90% center',

        scrub: true,



    }

})
l.to(".ce", {
    x: 150,
    opacity: 1,




})
let m = gsap.timeline({
    scrollTrigger: {
        trigger: ".cd ",
        start: '-350% center',
        end: '90% center',

        scrub: true,



    }

})
m.to(".cd", {
    x: 150,
    opacity: 1,




})
let n = gsap.timeline({
    scrollTrigger: {
        trigger: ".c-head h2 ",
        start: '-1750% center',
        end: '80% center',

        scrub: true,



    }

})
n.to(".c-head h2", {
    x: 150,
    opacity: 1,
    opacity: 1,




})
let q = gsap.timeline({
    scrollTrigger: {
        trigger: ".c-content2 p ",
        start: '-300 center',
        end: 'bottom center',

        scrub: true,



    }

})
q.from(".c-content2 p", {

    opacity: 0,




})
let h = gsap.timeline()
h.to(".eve3", {

    y: -200,
    delay:2,
    




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