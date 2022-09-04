const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const pic6 = document.getElementById("pic6");
const i = document.querySelector(".i");
const ii = document.querySelector(".ii");
const iii = document.querySelector(".iii");
const iv = document.querySelector(".iv");
const v = document.querySelector(".v");
const vi = document.querySelector(".vi");


// ***************facilities******************
pic2.onclick= function() {
   
    ii.style.display = "block";
    i.style.display = "none";
    iii.style.display = "none";
    iv.style.display = "none";
    v.style.display = "none";
    vi.style.display = "none";

};
pic1.onclick= function() {
   
    i.style.display = "block";
    ii.style.display = "none";
    iii.style.display = "none";
    iv.style.display = "none";
    v.style.display = "none";
    vi.style.display = "none";

};
pic3.onclick= function() {
   
    iii.style.display = "block";
    i.style.display = "none";
    ii.style.display = "none";
    iv.style.display = "none";
    v.style.display = "none";
    vi.style.display = "none";

};
pic4.onclick= function() {
   
    iv.style.display = "block";
    i.style.display = "none";
    iii.style.display = "none";
    ii.style.display = "none";
    v.style.display = "none";
    vi.style.display = "none";

};
pic5.onclick= function() {
   
    v.style.display = "block";
    i.style.display = "none";
    iii.style.display = "none";
    iv.style.display = "none";
    ii.style.display = "none";
    vi.style.display = "none";

};
pic6.onclick= function() {
   
    vi.style.display = "block";
    i.style.display = "none";
    iii.style.display = "none";
    iv.style.display = "none";
    v.style.display = "none";
    ii.style.display = "none";

};

