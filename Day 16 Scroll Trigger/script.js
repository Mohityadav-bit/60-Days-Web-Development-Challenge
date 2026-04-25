// window.addEventListener("wheel",function(dets){
//     // console.log(dets.deltaY);
//     if(dets.deltaY>0){
//         gsap.to(".marque ",{
//             transform:'translateX(-200)',
//             ease:'none',
//             duration:2,
//             repeat:-1,
//         })
//         gsap.to('.marque i',{
//             rotate:180,
//         })
//         // console.log("seedha scrolling");
//     }
//     else{
//         // console.log("reverse scrolling");

//          gsap.to(".marque",{
//             transform:'translateX(0)',
//             ease:'none',
//             duration:2,
//             repeat:-1,
//         })
//         gsap.to('.marque i',{
//             rotate:0,
//         })
//     }
// }) 



// create marquee animation ONCE
const marqueeTween = gsap.to(".marque", {
  xPercent: -100,
  repeat: -1,
  duration: 10,
  ease: "linear"
});

// arrow rotation tween
const arrowTween = gsap.to(".marque i", {
  rotate: 180,
  paused: true
});

// scroll direction control
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    marqueeTween.timeScale(1);     // forward
    arrowTween.play();
  } else {
    marqueeTween.timeScale(-1);    // backward
    arrowTween.reverse();
  }
});
