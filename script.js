function Locmotivescroll() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".smooth-scroll", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
    });


    // --- RED PANEL ---
    gsap.from(".line-1", {
        scrollTrigger: {
            trigger: ".line-1",
            scroller: ".smooth-scroll",
            scrub: true,
            start: "top bottom",
            end: "top top",
            onUpdate: self => console.log(self.direction)
        },
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none"
    });


    // --- ORANGE PANEL ---
    gsap.from(".line-2", {
        scrollTrigger: {
            trigger: ".orange",
            scroller: ".smooth-scroll",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
        },
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none"
    });


    // --- PURPLE/GREEN PANEL ---
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".purple",
            scroller: ".smooth-scroll",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
        }
    });

    tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
        .from(".line-3", { scaleX: 0, transformOrigin: "left center", ease: "none" }, 0)
        .to(".purple", { backgroundColor: "#28a92b" }, 0);



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
Locmotivescroll();

function FirstPageAnimation() {
    let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: "#imgs",
            // markers: true,
            scroller: ".smooth-scroll",
            pin: true,
            start: "top top",
            scrub: 3,
        }
    });


    tl.addLabel("abcd")
        .to("#l1", {

            x: "-140%",
            duration: 3,
            ease: Power2.easeInOut,
            opacity: 0

        }, "abcd", "-=2")
        .to("#r2", {

            x: "140%",
            duration: 3,
            ease: Power2.easeInOut,
            opacity: 0

        }, "abcd", "-=2")
        .to("#l2", {

            x: "-140%",
            duration: 3,
            ease: Power2.easeInOut,
            opacity: 0

        }, "abcd", "-=2")
        .to("#r1", {
            x: "140%",
            duration: 3,
            ease: Power2.easeInOut,
            opacity: 0

        }, "abcd", "-=2")
        .to("#videocnt", {
            width: "100%",
            height: "120vh",
            duration: 3,
            ease: Power2.easeInOut,


        }, "abcd", "-=2");


}

function textAnimate1() {
    $('.tlt').textillate({
        selector: '.texts',

        loop: false,

        minDisplayTime: 2000,


        initialDelay: 0,

        autoStart: true,

        inEffects: [],


        in: {
            effect: 'fadeInUp',

            delayScale: 2,

            delay: 20,

            sync: false,

            shuffle: false,

            reverse: false,

            callback: function() {}
        },

        out: {
            effect: 'flipX',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
            callback: function() {}
        },

        callback: function() {},

    });
}

function SecondPageAnimation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "top 50%",
            scroller: ".smooth-scroll",
            // markers: true
        }
    })
    tl2.
    to(".animate1", {
        opacity: 1,
        duration: 2,
        ease: Expo.easeInOut,
        onStart: function() {
            $('.animate1').textillate({
                selector: '.texts',
                loop: false,
                minDisplayTime: 2000,
                initialDelay: 0,
                autoStart: true,
                inEffects: [],
                in: {
                    effect: 'fadeInUp',
                    delayScale: 2,
                    delay: 30,
                    sync: false,
                    shuffle: false,
                    reverse: false,
                    callback: function() {}
                },


                callback: function() {},

                type: 'char'
            });
            $('#toppara').textillate({
                selector: '.texts',
                loop: false,
                minDisplayTime: 2000,
                initialDelay: 0,
                autoStart: true,
                inEffects: [],
                in: {
                    effect: 'fadeInUp',
                    delayScale: 1.5,
                    delay: 15,
                    sync: false,
                    shuffle: false,
                    reverse: false,
                    callback: function() {}
                },


                callback: function() {},

                type: 'char'
            });
        }
    }, "same")


    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#line",
            scroller: ".smooth-scroll",
            start: "top 50%",
            // markers: true
        }
    })
    tl3.
    to("#about .animate2", {
            duration: 2,
            ease: Expo.easeInOut,
            opacity: 1,
            onStart: function() {
                $('#content12').textillate({
                    selector: '.texts',
                    loop: false,
                    minDisplayTime: 2000,
                    initialDelay: 0,
                    autoStart: true,
                    inEffects: [],
                    in: {
                        effect: 'fadeInUp',
                        delayScale: 1.2,
                        delay: 20,
                        sync: false,
                        shuffle: false,
                        reverse: false,
                        callback: function() {}
                    },
                    callback: function() {},
                    type: 'char'
                }, "abcd");
                $('#btmpara1').textillate({
                    selector: '.texts',
                    loop: false,
                    minDisplayTime: 2000,
                    initialDelay: 0,
                    autoStart: true,
                    inEffects: [],
                    in: {
                        effect: 'fadeInUp',
                        delayScale: 2.5,
                        delay: 25,
                        sync: false,
                        shuffle: false,
                        reverse: false,
                        callback: function() {}
                    },
                    callback: function() {},
                    type: 'char'
                }, "abcd", "+=2");
            }


        })
        .to("#ellipse", {
            duration: 1.5,
            stagger: 1.5,
            opacity: 1,
            ease: Expo.easeInOut
        }, )
        .to("#ellipse img", {
            duration: 2.5,
            scale: 1,
            ease: Expo.easeInOut

        }, )


}


function ThirdPageAnimation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#products",
            start: "top 50%",
            scroller: ".smooth-scroll",
            // markers: true
        }
    })
    tl4.
    to(".elem3", {

            duration: 2,
            ease: Expo.easeInOut,
            opacity: 1,
            stagger: 0.5

        }, "abcd")
        .
    to(" #imgbtm img", {

        duration: 4,
        ease: Expo.easeInOut,
        opacity: 1,
        stagger: 0.5,
        scale: 1

    }, "abcd", "+=2")


}

textAnimate1();
FirstPageAnimation();
SecondPageAnimation();
ThirdPageAnimation();