function locomotive_scroller() {
    gsap.registerPlugin(ScrollTrigger);


    // --- SETUP START ---
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: "#main" });
    // --- SETUP END ---







    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

function textChange (){
    let h1texted = document.querySelectorAll('#text-container h1')


h1texted.forEach(function(elem){
    let collectedText = ""
    let h1content = elem.textContent
  let splitedtexted = h1content.split("");
//   console.log(splitedtexted)
  splitedtexted.forEach(function(e){
collectedText+=`<span> ${e} </span>`
// console.log(collectedText)
})
elem.innerHTML= collectedText

console.log(elem)

  
})

}



function gsap_fun() {

   
    const tl = gsap.timeline()
    const t2 =  new gsap.timeline()

    
 tl.from("#image-container img",{
    scale:0.5,
        stagger:0.1,
        width:"100vw",
        height:"100vh",
        
       
        ScrollTrigger:{
            trigger:"#image-container img",
            scroller:"#main",
            markers:true,
            pin:"#image-container img",
    
            start:"top 50%",
            end:"top 0%",
            scrub:1
        }
     })
     
    tl.from('nav h1 ', {
        y: -50,
        duration: 2,
        delay: 2,
        stagger: 0.3,
        opacity: 0
    })

    tl.from('nav h3 ', {
        x: 50,
        duration: 2,
        delay: 0.5,
        stagger: 0.3,
        opacity: 0
    })

    tl.from('#nav-left .btn ', {
        y: -50,
        duration: 2,
        delay: 0.6,
        stagger: 0.3,
        opacity: 0
    })



 tl.to("#text-container h1 span",{
    color:"#E3E3C4",
    stagger:0.1,
   
    scrollTrigger:{
        trigger:"#text-container h1",
        scroller:"#main",
        markers:true,

        start:"top 50%",
        end:"top 30%",
        scrub:1
    }
 })







}




locomotive_scroller()
textChange()
gsap_fun()






