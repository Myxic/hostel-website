const rowdiv1 = document.querySelectorAll("#row-1 .column");
const rowdiv2 = document.querySelectorAll("#row-2 .column");
const rowdiv3 = document.querySelectorAll("#row-3 .column");



// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1; console.log(slideIndex) }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

var slideIndex = 1;
(showSlides(slideIndex));


function plusSlides(n) {
  showSlides(slideIndex += n);
}

const next = document.getElementById("next");
const prev = document.getElementById("prev")
const row1 = document.getElementById("row-1")
const row2 = document.getElementById("row-2")
const row3 = document.getElementById("row-3")
const thumbnail = document.getElementById("thumbnail")

// To open the correct slideIndex when you click the img
let num;
row1.addEventListener("click", function (e) {
  var target = e.target.closest("div");
  var parent = target.parentNode;
  const index = [].indexOf.call(parent.children, target)
  num = index + 1
  currentSlide(num)


})
row2.addEventListener("click", function (e) {
  var target = e.target.closest("div");
  var parent = target.parentNode;
  const index = [].indexOf.call(parent.children, target)
  num = index + 1
  currentSlide(num)


})
row3.addEventListener("click", function (e) {
  var target = e.target.closest("div");
  var parent = target.parentNode;
  const index = [].indexOf.call(parent.children, target)
  num = index + 1
  currentSlide(num)


})
// for the thumbnail display
thumbnail.addEventListener("click", function (e) {
  // console.log("hello")
  // console.log(thumbnail)
  var target = e.target.closest("div");
  var parent = target.parentNode;
  const index = [].indexOf.call(parent.children, target)
  // console.log(index)
  num = index + 1

  currentSlide(num)


})
// This is just to open the Modal
rowdiv1.forEach(div1 => {

  div1.addEventListener("click", () => {
    openModal()

  })
});
rowdiv2.forEach(div2 => {

  div2.addEventListener("click", () => {
    openModal()

  })
});
console.log(rowdiv3)
rowdiv3.forEach(div3 => {

  div3.addEventListener("click", () => {
    openModal()

  })
});


const modalcontent = document.querySelectorAll(".modal-content img")


// modalcontent.forEach(img => {
//   img.addEventListener("touchmove", ()=>{
//     plusSlides(+1)
//   })

// })
// Element.setCapture()


