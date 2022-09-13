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
};

exit.onclick = function() {
    document.querySelector(".nav_ul").style.display = "none"
};
