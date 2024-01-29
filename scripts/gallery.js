

var nextpage = document.querySelector(".row");
// console.log(nextpage);
var slides = document.getElementsByClassName("mySlides");
// console.log(slides)
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  console.log("open modal");
 
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  let Active = document.querySelector(".active");
  var CurrentCommentIndex = getChildIndex(nextpage, Active);
  Active.classList.remove("active");
  slides[CurrentCommentIndex].style.display = "none";

}


document.querySelectorAll(".row img").forEach((div1) => {
  div1.addEventListener("click", () => {
    console.log('DOMContentLoaded');
    openModal();
    
    div1.parentElement.classList.add("active");
  
    let Active = document.querySelector(".active");
    var CurrentCommentIndex = getChildIndex(nextpage, Active);
    slides[CurrentCommentIndex].style.display = "block";
  });
});

// Next/previous controls
next.onclick = function plusSlidesNext() {
  let Active = document.querySelector(".active");
  var CurrentCommentIndex = getChildIndex(nextpage, Active);
  console.log(nextpage.children[CurrentCommentIndex]);
  if (
    CurrentCommentIndex >= 0 &&
    CurrentCommentIndex < nextpage.childElementCount
  ) {
    for (b = 0; b < nextpage.childElementCount; b++) {
      nextpage.children[CurrentCommentIndex].classList.remove(
        "active"
      );
      slides[CurrentCommentIndex].style.display = "none";
    }

    if (CurrentCommentIndex < nextpage.childElementCount - 1) {
      nextpage.children[CurrentCommentIndex + 1].classList.add(
        "active"
      );
      slides[CurrentCommentIndex + 1 ].style.display = "block";
    } else if (CurrentCommentIndex == nextpage.childElementCount - 1) {
      nextpage.children[0].classList.add("active");
      slides[0].style.display = "block";
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
      nextpage.children[CurrentCommentIndex].classList.remove(
        "active"
      );
      slides[CurrentCommentIndex].style.display = "none";
    }

    if (
      CurrentCommentIndex <= nextpage.childElementCount - 1 &&
      CurrentCommentIndex > 0
    ) {
      nextpage.children[CurrentCommentIndex - 1].classList.add(
        "active"
      );
      slides[CurrentCommentIndex - 1 ].style.display = "block";
    } else if (CurrentCommentIndex <= 0) {
      nextpage.children[nextpage.childElementCount - 1].classList.add(
        "active"
      );
      slides[nextpage.childElementCount - 1 ].style.display = "block";
    }
  }
};

function getChildIndex(parentElement, childElement) {
  var childIndex = Array.from(parentElement.children).indexOf(childElement);
  console.log("Index of child element: " + childIndex);
  return childIndex;
}




// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");

//   // var captionText = document.getElementById("caption");
//   if (n > slides.length) { slideIndex = 1; console.log(slideIndex) }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slides[slideIndex - 1].style.display = "block";

// }

// const modalcontent = document.querySelectorAll(".modal-content img")

// // modalcontent.forEach(img => {
// //   img.addEventListener("touchmove", ()=>{
// //     plusSlides(+1)
// //   })

// // })
// // Element.setCapture()



// Touch control
// its working as well but the touch is affecting the next and prev controllers

// let box;

// document.addEventListener("click", () => {
//   box = document.querySelector(".modal");
//   box.addEventListener("click", chooseSide);
// });

// function chooseSide(e) {
//   const { clientX } = e;
//   const { clientWidth } = box;

  
//   if (clientX > clientWidth / 2) {
//     console.log("right: " + clientX);
//     let Active = document.querySelector(".active");
//     var CurrentCommentIndex = getChildIndex(nextpage, Active);
//     console.log(nextpage.children[CurrentCommentIndex]);
//     if (
//       CurrentCommentIndex >= 0 &&
//       CurrentCommentIndex < nextpage.childElementCount
//     ) {
//       for (b = 0; b < nextpage.childElementCount; b++) {
//         nextpage.children[CurrentCommentIndex].classList.remove(
//           "active"
//         );
//         slides[CurrentCommentIndex].style.display = "none";
//       }
  
//       if (CurrentCommentIndex < nextpage.childElementCount - 1) {
//         nextpage.children[CurrentCommentIndex + 1].classList.add(
//           "active"
//         );
//         slides[CurrentCommentIndex + 1 ].style.display = "block";
//       } else if (CurrentCommentIndex == nextpage.childElementCount - 1) {
//         nextpage.children[0].classList.add("active");
//         slides[0].style.display = "block";
//       }
//     }

    
//   } else {
//     console.log("left:  "+ clientX);

//     let Active = document.querySelector(".active");
//     var CurrentCommentIndex = getChildIndex(nextpage, Active);
  
//     if (
//       CurrentCommentIndex >= 0 &&
//       CurrentCommentIndex < nextpage.childElementCount
//     ) {
//       for (b = 0; b < nextpage.childElementCount; b++) {
//         nextpage.children[CurrentCommentIndex].classList.remove(
//           "active"
//         );
//         slides[CurrentCommentIndex].style.display = "none";
//       }
  
//       if (
//         CurrentCommentIndex <= nextpage.childElementCount - 1 &&
//         CurrentCommentIndex > 0
//       ) {
//         nextpage.children[CurrentCommentIndex - 1].classList.add(
//           "active"
//         );
//         slides[CurrentCommentIndex - 1 ].style.display = "block";
//       } else if (CurrentCommentIndex <= 0) {
//         nextpage.children[nextpage.childElementCount - 1].classList.add(
//           "active"
//         );
//         slides[nextpage.childElementCount - 1 ].style.display = "block";
//       }
//     }
//   }
// }
