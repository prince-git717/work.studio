function loading() {
    var tl = gsap.timeline();

    tl.to("#yellow", {
        top: "-100%",
        delay: 0.5,
        duration: 1.7,
        ease: "expo.out"
    });

    tl.from("#yellow2", {
        top: "100%",
        duration: 1.2,
        ease: "expo.out"
    }, "anim");

    tl.to("#loader h1", {
        color: "black",
        duration: 0.5
    }, "anim");

    tl.to("#loader", {
        opacity: 0,
        duration: 1
    });

    tl.to("#loader", {
        display: "none"
    });

    // 🔥 NAV SHOW
    tl.to("nav", {
        opacity: 1,
        duration: 0.5,
    });
    tl.from("nav h2", {
        x: 900,
        duration: 1
    })
}

loading();

// LOCOMOTIVE HAI BHAI DEKH LE .. GANDU.. ❤️
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


var elems = document.querySelectorAll('.elem')
var page2 = document.querySelector("#page2")
elems.forEach(function (ele) {
    ele.addEventListener("mouseenter" ,function(){
        var bgimg=ele.getAttribute("data-img")
        page2.style.backgroundImage=`url(${bgimg})`
    })
})
let narutos = document.querySelectorAll(".divi > div");

let heights = [
  "220px","200px","150px","300px",
  "180px","250px","140px","220px",
  "160px","280px","190px","260px"
];


narutos.forEach((el, index) => {
    el.style.height = heights[index];
});
document.querySelector(".footer  .foot").addEventListener("click" ,()=>{
    scroll.scrollTo(0)
})