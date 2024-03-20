
const tl = gsap.timeline()
tl.from('#nav h1',{
    y:-50,
    duration:2,
    delay:2,
 stagger:0.3,
 opacity:0
})

tl.from('#center h1',{
    x:-50,
    duration:1.5,
    stagger:0.3,
    opacity:0,
    delay:2,
 

})

tl.from('#center img',{
    x:100,
    duration:2,
    stagger:0.3,
    opacity:0,
    delay:2,
    rotate:45

})
