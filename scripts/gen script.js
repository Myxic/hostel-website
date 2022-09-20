const btnbook = document.querySelector(".btn_book")
const close = document.getElementById("close")
const booking = document.querySelector(".booking")
const burger = document.getElementById("burger");
const exit = document.getElementById("exit")


btnbook.onclick= function() {

    booking.style.display = "block";
};

close.onclick= function() {
    booking.style.display = "none";
};


burger.onclick= function() {
    document.querySelector(".nav_ul").style.display = "block";
    document.querySelector("#top").style.display = "none"
    // if (document.querySelector(".nav_ul").style.display = "none") {
    //     document.querySelector(".nav_ul").style.display = "block";
    //     document.querySelector("#top").style.display = "none"
    //     exit.style.display = "none"
    // } else if (document.querySelector(".nav_ul").style.display = "block") {
    //     document.querySelector(".nav_ul").style.display = "none";
    // }
};

exit.onclick = function() {
    document.querySelector(".nav_ul").style.display = "none"
    document.querySelector("#top").style.display = "block"
};
