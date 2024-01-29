

gsap.from(".hero-text1",{
  opacity:0,
  x:-400,
  duration:1,
  



})
gsap.from(".hero-text2",{
  opacity:0,
  x:-400,
  duration:1,
  delay:0.3




})

gsap.to("#page1 a",{
  transform:"translateY(-20px)",
  duration:1.2,
  repeat:-1,
  yoyo:true,
})

gsap.from("#page1 a",{
  opacity:0,
  delay:1.5,
  duration:1

})

gsap.from(".logo-h4",{
  x:-550,
  opacity:0,
  duration:1,




})

gsap.from(".nav-1",{
  y:-350,
  duration:1,
  delay:0.3

})
gsap.from(".nav-2",{
  y:-350,
  duration:1,
  delay:0.5

})
gsap.from(".nav-3",{
  y:-350,
  duration:1,
  delay:0.7

})

gsap.from("#hamburger",{
  x:550,
  opacity:0,
  duration:1,

})

gsap.from(".rtx",{

  duration:2,
  x:-800,
  opacity:0,
  scrollTrigger:{
    trigger:".rtx",
    scrub:true,
    end:"top 20%"
  }


})

gsap.from(".rtx-wrapper",{

  duration:2,
  x:800,
  opacity:0,
  scrollTrigger:{
    trigger:".rtx-wrapper",
    scrub:true,
    end:"top 20%"
  }



})
gsap.from(".ryzen",{

  duration:2,
  x:800,
  opacity:0,
  scrollTrigger:{
    trigger:".ryzen",
    scrub:true,
    end:"top 20%"
  }


})
gsap.from(".ryzen-wrapper",{

  duration:2,
  x:-800,
  opacity:0,
  scrollTrigger:{
    trigger:".ryzen-wrapper",
    scrub:true,
    end:"top 20%"
  }



})
gsap.from(".pg-4-head",{

  duration:2,
  x:400,
  opacity:0,
  scrollTrigger:{
    trigger:".pg-4-head",
    scrub:true,
    end:"top 20%"
  }


})
gsap.from(".advantages-wrapper",{

  duration:2,
  x:-400,
  opacity:0,
  scrollTrigger:{
    trigger:".advantages-wrapper",
    scrub:true,
    end:"top 20%"
  }



})

gsap.to(".banner-1",{
  duration:1,
  left:"10%",
  scrollTrigger:{
    trigger:".banner-1",
    scrub:3,
    end:"top 20%",
  
    
    



  }


})
gsap.to(".banner-2",{
  duration:1,
  right:"10%",
  scrollTrigger:{
    trigger:".banner-2",
    scrub:3,
    
    
    



  }


})

gsap.from(".footer",{
  duration:1.5,
  transform:"translateY(-20rem)",
  scrollTrigger:{
    trigger:".footer",
    scrub:3,
    end:"top 20%",

  }

})



//NAVBAR HAMBURGER ANIMATION STARTS 

var line=document.getElementById("hamburger")
var cross=document.getElementById("cross")
var burgerlist=document.getElementById("burger-btns")
function show(){
  line.style.display="None";
  cross.style.display="Inline";
  burgerlist.style.transform="translateY(0)"

}
function hide(){
  line.style.display="Inline";
  cross.style.display="None";
  burgerlist.style.transform="translateY(-500%)"
  
}

//NAVBAR HAMBURGER ANIMATION ENDS 




//Media Query till 1227px



