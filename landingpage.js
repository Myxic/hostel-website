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


// Comment box

const sone = document.getElementById("sone");
const stwo = document.getElementById("stwo");
const sthree = document.getElementById("sthree");
const sfour = document.getElementById("sfour");
const sfive = document.getElementById("sfive");

sone.onclick = function() {
    sone.style.color = "yellow";
    stwo.style.color = "black";
    sthree.style.color = "none";
    sfour.style.color = "none";
    sfive.style.color = "none";
};

stwo.onclick = function() {
    sone.style.color = "yellow";
    stwo.style.color = "yellow";
    sthree.style.color = "black";
    sfour.style.color = "black";
    sfive.style.color = "black";
};

sthree.onclick = function() {
    sone.style.color = "yellow";
    stwo.style.color = "yellow";
    sthree.style.color = "yellow";
    sfour.style.color = "black";
    sfive.style.color = "black";
};

sfour.onclick = function() {
    sone.style.color = "yellow";
    stwo.style.color = "yellow";
    sthree.style.color = "yellow";
    sfour.style.color = "orange";
    sfive.style.color = "black";
};

sfive.onclick = function() {
    sone.style.color = "yellow";
    stwo.style.color = "yellow";
    sthree.style.color = "yellow";
    sfour.style.color = "orange";
    sfive.style.color = "red";
};


let comment = document.getElementById("comment");
const de_comment = document.getElementById("de_comment");
const submit = document.getElementById("submit");

console.log(comment.value)
let con = 0;
var item = document.createElement("p");
submit.onclick = function() {
con ++
console.log(item)
item.textContent = `${comment.value}`;
console.log(item.textContent)
de_comment.append(item.textContent);


};


const next = document.getElementById("next");
const prev = document.getElementById("prev");



next.onclick = function() {
    
};
prev.onclick = function() {
    
};
