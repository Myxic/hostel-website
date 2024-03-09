
var nextpage = document.querySelector(".row");

var slides = document.getElementsByClassName("mySlides");
var txtCaptions = document.getElementsByClassName("caption");

const next = document.getElementById("next");
const prev = document.getElementById("prev");


let scrollDisabled = false;



function disableScroll(){
  document.getElementById("myModal").style.overflow = 'hidden';
  document.body.style.overflow = "hidden";
  
}

function enableScroll(){
document.body.style.overflow = 'auto';
document.getElementById("myModal").style.overflow = 'auto';
 
}




function getChildIndex(parentElement, childElement) {
    var childIndex = Array.from(parentElement.children).indexOf(childElement);

    return childIndex;
  }
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
  disableScroll();
}

// Next/previous controls
next.onclick = function plusSlidesNext() {
  let Active = document.querySelector(".active");
  var CurrentCommentIndex = getChildIndex(nextpage, Active);

  if (
    CurrentCommentIndex >= 0 &&
    CurrentCommentIndex < nextpage.childElementCount
  ) {
    for (b = 0; b < nextpage.childElementCount; b++) {
      nextpage.children[CurrentCommentIndex].classList.remove("active");
      slides[CurrentCommentIndex].style.display = "none";
      txtCaptions[CurrentCommentIndex].style.display = "none";
    }

    if (CurrentCommentIndex < nextpage.childElementCount - 1) {
      nextpage.children[CurrentCommentIndex + 1].classList.add("active");
      slides[CurrentCommentIndex + 1].style.display = "flex";
      txtCaptions[CurrentCommentIndex + 1].style.display = "block";
    } else if (CurrentCommentIndex == nextpage.childElementCount - 1) {
      nextpage.children[0].classList.add("active");
      slides[0].style.display = "flex";
      txtCaptions[0].style.display = "block";
    }
  }
};

prev.onclick = function plusSlidesPrev() {
  let Active = document.querySelector(".active");
  var CurrentCommentIndex = getChildIndex(nextpage, Active);

  if (
    CurrentCommentIndex >= 0 &&
    CurrentCommentIndex < nextpage.childElementCount
  ) {
    for (b = 0; b < nextpage.childElementCount; b++) {
      nextpage.children[CurrentCommentIndex].classList.remove("active");
      slides[CurrentCommentIndex].style.display = "none";
      txtCaptions[CurrentCommentIndex].style.display = "none";
    }

    if (
      CurrentCommentIndex <= nextpage.childElementCount - 1 &&
      CurrentCommentIndex > 0
    ) {
      nextpage.children[CurrentCommentIndex - 1].classList.add("active");
      slides[CurrentCommentIndex - 1].style.display = "flex";
      txtCaptions[CurrentCommentIndex - 1].style.display = "block";
    } else if (CurrentCommentIndex <= 0) {
      nextpage.children[nextpage.childElementCount - 1].classList.add(
        "active"
      );
      slides[nextpage.childElementCount - 1].style.display = "flex";
      txtCaptions[nextpage.childElementCount - 1].style.display = "block";
    }
  }
  
};