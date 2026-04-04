var main = document.querySelector("#main");

var corser = document.querySelector("#corsure");
var imgDiv = document.querySelector(".img");


main.addEventListener("mousemove",function(dets){
    // console.log("Event performed...");
    // console.log(dets); 
    gsap.to(corser,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back"
    }) 
})

imgDiv.addEventListener("mouseenter",function(){
    // console.log("Events cliccked");
    corser.innerHTML = "View more"
    gsap.to(corser,{
        scale:4,
        backgroundColor: "#ffffff8a",
    })
})
imgDiv.addEventListener("mouseleave",function(){
    // console.log("Events cliccked");
    corser.innerHTML = ""
    gsap.to(corser,{
        scale:1,
        backgroundColor: "#fff",
        
    })
})