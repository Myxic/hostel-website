const btnbook = document.querySelector(".btn_book")
const close = document.getElementById("close")
const booking = document.querySelector(".booking")
const burger = document.getElementById("burger");
const exit = document.getElementById("exit")


btnbook.onclick= function() {

    booking.style.display = "block";
    document.querySelector("nav figure").style.display = "none"
};

close.onclick= function() {
    booking.style.display = "none";
    document.querySelector("nav figure").style.display = "block"
};


burger.addEventListener("click", ()=> {
    
    document.querySelector(".nav_ul").style.display = "block";
    document.querySelector("#top").style.display = "none"
    

    // if (document.querySelector(".nav_ul").style.display = "none") {
    //     document.querySelector(".nav_ul").style.display = "block";
    //     document.querySelector("#top").style.display = "none"
    //     exit.style.display = "none"
    // } else if (document.querySelector(".nav_ul").style.display = "block") {
    //     document.querySelector(".nav_ul").style.display = "none";
    // }
});

exit.addEventListener("click", ()=> {
    // document.querySelector(".nav_ul").style.right = "50vw"; 
    // document.querySelector(".nav_ul").style.animationDirection= "reverse";
    document.querySelector(".nav_ul").style.display = "none";
    document.querySelector("#top").style.display = "block"
    
})

window.addEventListener("resize", ()=> {
    if (document.querySelector(".nav_ul").position= "absolute"){
        window.location.reload(false);  
    }
})
