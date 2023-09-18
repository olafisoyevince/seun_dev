// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";
gsap.registerPlugin(ScrollTrigger);
const scroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);
// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop (value) {
        return arguments.length ? locoScroll.scrollTo(value, {
            duration: 0,
            disableLerp: true
        }) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect () {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    // LocomotiveScroll handles things completely differently on mobile devices
    // - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters,
    // we should pin things with position: fixed on mobile.We sense it by checking to see if
    // there's a transform applied to the container(the LocomotiveScroll - controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", ()=>locoScroll.update());
ScrollTrigger.defaults({
    scroller: ".smooth-scroll"
});
ScrollTrigger.create({
    animation: gsap.from(".projects_paralax", {
        y: "70vh",
        scale: 5,
        yPercent: -50
    }),
    scrub: true,
    trigger: ".projects_container",
    endTrigger: ".projects_container",
    start: "top 70%",
    end: "top 20%"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.refresh();

//# sourceMappingURL=index.672d4772.js.map
