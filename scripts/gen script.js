
const burger = document.getElementById("burger");
const exit = document.getElementById("exit")


window.addEventListener("resize", ()=> {
if (window.matchMedia("(max-width: 900px)").matches) {
    document.querySelector(".nav_ul").classList.add("buger_nav_ul");
    document.querySelector(".nav_ul").style.display = "none";
    // Viewport is less or equal to 400 pixels wide
   
  } else {
    // Viewport is greater than 400 pixels wide 
    document.querySelector(".nav_ul").classList.remove("buger_nav_ul");
    // window.location.reload(false);

    document.querySelector(".nav_ul").style.display = "flex";
    
  }
});

if (window.matchMedia("(max-width: 900px)").matches) {
    document.querySelector(".nav_ul").classList.add("buger_nav_ul");
    document.querySelector(".nav_ul").style.display = "none";
    // Viewport is less or equal to 400 pixels wide
   
  }
// window.addEventListener("resize", ()=> {
//     if (document.querySelector(".nav_ul").display == "block"){
//         window.location.reload(false);  
//     }
// })

// window.addEventListener("resize", function(){
//     document.getElementById("demo").innerHTML = Math.random();
//   });


burger.addEventListener("click", ()=> {
    
        
    document.querySelector(".nav_ul").style.display = "block";
    document.body.style.overflow = "hidden";
    document.querySelector("header").classList.add("headerFiller");
    
    
});


exit.addEventListener("click", ()=> {
  document.body.style.overflow = "auto";
    document.querySelector(".nav_ul").style.display = "none";
    document.querySelector("header").classList.remove("headerFiller");  
})