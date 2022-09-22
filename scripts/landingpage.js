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
const here1 = document.querySelector(".here1 p")
const here2 = document.querySelector(".here2 p")
here1.style.webkitBackgroundClip = "text"; 
here2.style.webkitBackgroundClip = "text";  



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


// Comment box**********************************************************8

const sone = document.getElementById("sone");
const stwo = document.getElementById("stwo");
const sthree = document.getElementById("sthree");
const sfour = document.getElementById("sfour");
const sfive = document.getElementById("sfive");

sone.onclick = function() {
    sone.style.color = "yellow";
    stwo.style.color = "black";
    sthree.style.color = "black";
    sfour.style.color = "black";
    sfive.style.color = "black";
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
    // const after = document.querySelector("de_comment p");
    // console.log(after)
    // de_comment.style.background = "linear-gradient(90deg, yellow 60%, black 60%)";
    // de_comment.style.webkitBackgroundClip = "text";  
    //       de_comment.style.backgroundClip = "text";
    //       de_comment.style.webkitTextFillColor = "transparent";
        
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
const name1 = document.getElementById("username");
const warning = document.getElementById("warning");
const warning2 = document.getElementById("warning2");
const warning3 = document.getElementById("warning3");


const r1 = document.getElementById("rone");
const r2 = document.getElementById("rtwo");
const r3 = document.getElementById("rthree");
const r4 = document.getElementById("rfour");
const r5 = document.getElementById("rfive");

window.onload = function(){
    comment.value = ""
    name1.value = ""
    r1.checked = false;
    r2.checked = false;
    r3.checked = false;
    r4.checked = false;
    r5.checked = false;
}
let radiochecker;

// console.log(comment.value)
// let con = 0;


submit.onclick = function() {
    if (r1.checked){
        radiochecker = true;
        }else if (r2.checked) {
            radiochecker = true;
        } else if(r3.checked) {
            radiochecker = true;
        }
        else if(r4.checked){
            radiochecker = true;
        }else if(r5.checked){
            radiochecker = true;
        }else{
            radiochecker = false;
        }
    console.log("")
    console.log(comment.value)
if (comment.value != "" && name1.value != "" && radiochecker == true){
const newdiv = document.createElement("div")
const newH4 = document.createElement("h4")
const newQ = document.createElement("q")
const newP = document.createElement("p")

warning.innerHTML = "";


const text2 = document.createTextNode(`${name1.value}`)
const text = document.createTextNode(`${comment.value}`);
const text3 = document.createTextNode("★★★★★");

newH4.appendChild(text2);
newQ.appendChild(text);
newP.appendChild(text3)
if (r1.checked){
newP.style.background = "linear-gradient(90deg, yellow 20%, black 20%)";
}else if (r2.checked) {
    newP.style.background = "linear-gradient(90deg, yellow 40%, black 40%)";
} else if(r3.checked ) {
    newP.style.background = "linear-gradient(90deg, yellow 60%, black 60%)";
}
else if(r4.checked ) {
    newP.style.background = "linear-gradient(90deg, yellow 80%, black 80%)";
}
else if(r5.checked ) {
    newP.style.background = "linear-gradient(90deg, yellow 100%, black 100%)";
}else  {
    newP.style.background = "linear-gradient(90deg, yellow 0%, black 0%)";
}
newP.style.webkitBackgroundClip = "text";  
newP.style.backgroundClip = "text";
newP.style.webkitTextFillColor = "transparent";


newdiv.appendChild(newH4);
newdiv.appendChild(newQ);
newdiv.appendChild(newP)

de_comment.appendChild(newdiv);

comment.value = ""
name1.value = ""
r1.checked = false;
r2.checked = false;
r3.checked = false;
r4.checked = false;
r5.checked = false;
    sone.style.color = "black";
    stwo.style.color = "black";
    sthree.style.color = "black";
    sfour.style.color = "black";
    sfive.style.color = "black";

}else if(name1.value == "" && comment.value != "" && radiochecker == false){
    
    warning.innerHTML= "ADD YOUR NAME "
    warning2.innerHTML= ""
    warning3.innerHTML= "RATE US"
    warning3.style.color = "red"
    warning.style.color = "red"
}else if(name1.value != "" && comment.value == "" && radiochecker == false){
    
    warning2.innerHTML= "ADD YOUR TESTIMONIAL"
    warning3.innerHTML= "RATE US"
    warning.innerHTML= ""
    warning3.style.color = "red"
    warning2.style.color = "red"
}else if (name1.value != "" && comment.value == "" && radiochecker == true){
    warning2.innerHTML= "ADD YOUR TESTIMONIAL"
    warning3.style.color = "red"
    warning.innerHTML= ""
    warning2.innerHTML= ""
}else if (name1.value != "" && comment.value != "" && radiochecker == false){
    warning3.innerHTML= "RATE US OR Refresh browers"
    warning3.style.color = "red"
    warning.innerHTML= ""
    warning2.innerHTML= ""
}else{
    warning.innerHTML= "ADD YOUR NAME "
    warning.style.color = "red"

    warning2.innerHTML= "ADD YOUR TESTIMONIAL"
    warning2.style.color = "red"

    warning3.innerHTML= "RATE US"
    warning3.style.color = "red"
}

};







const next = document.getElementById("next");
const prev = document.getElementById("prev");



let nextpage = document.querySelector("#de_comment");
let nexxxt = 1;

next.onclick = function() {
    console.log(nextpage.children)
    console.log(nextpage.childElementCount)
console.log(nexxxt)
    if (nexxxt >= 0 &&nexxxt < nextpage.childElementCount){
        console.log(nextpage.children[nexxxt])
        nextpage.children[nexxxt].scrollIntoView()
     nexxxt ++
}else{
    nexxxt = 0
    console.log("lastpage")
}
};
prev.onclick = function() {
    console.log(nexxxt)
    if (nexxxt >= 0 && nexxxt < nextpage.childElementCount ){
        console.log(nextpage.children[nexxxt])
        nextpage.children[nexxxt].scrollIntoView()
     nexxxt --
}else{  
    nexxxt = nextpage.childElementCount - 1
    console.log("page")
}

};

document.getElementById("top").onclick = function() {
    document.querySelector(".welcome").scrollIntoView();
};
window.addEventListener("scroll", function(){
    
    if (window.scrollY > 200) {
        document.getElementById("top").style.display = "block";
    } else if (window.scrollY < 200){
        document.getElementById("top").style.display = "none";
    }

})


