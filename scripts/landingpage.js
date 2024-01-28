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
const here1 = document.querySelector(".here1 p");
const here2 = document.querySelector(".here2 p");
here1.style.webkitBackgroundClip = "text";
here2.style.webkitBackgroundClip = "text";

// ***************facilities******************
pic2.onclick = function () {
  ii.style.display = "block";
  i.style.display = "none";
  iii.style.display = "none";
  iv.style.display = "none";
  pic2.classList.add("activeFeatures");
  pic1.classList.remove("activeFeatures");
  pic3.classList.remove("activeFeatures");
  pic4.classList.remove("activeFeatures");
};
pic1.onclick = function () {
  i.style.display = "block";
  ii.style.display = "none";
  iii.style.display = "none";
  iv.style.display = "none";
  pic1.classList.add("activeFeatures");
  pic2.classList.remove("activeFeatures");
  pic3.classList.remove("activeFeatures");
  pic4.classList.remove("activeFeatures");
};
pic3.onclick = function () {
  iii.style.display = "block";
  i.style.display = "none";
  ii.style.display = "none";
  iv.style.display = "none";
  pic3.classList.add("activeFeatures");
  pic1.classList.remove("activeFeatures");
  pic2.classList.remove("activeFeatures");
  pic4.classList.remove("activeFeatures");
};
pic4.onclick = function () {
  iv.style.display = "block";
  i.style.display = "none";
  iii.style.display = "none";
  ii.style.display = "none";
  pic4.classList.add("activeFeatures");
  pic1.classList.remove("activeFeatures");
  pic3.classList.remove("activeFeatures");
  pic2.classList.remove("activeFeatures");
};

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let nextpage = document.querySelector("#de_comment");

next.onclick = function () {
  let Active = document.querySelector("#de_comment .active");
  var CurrentCommentIndex = getChildIndex(nextpage, Active);

  if (
    CurrentCommentIndex >= 0 &&
    CurrentCommentIndex < nextpage.childElementCount
  ) {
    for (b = 0; b < nextpage.childElementCount; b++) {
      nextpage.children[CurrentCommentIndex].classList.remove("active");
    }

    if (CurrentCommentIndex < nextpage.childElementCount - 1) {
      nextpage.children[CurrentCommentIndex + 1].classList.add("active");
    } else if (CurrentCommentIndex == nextpage.childElementCount - 1) {
      nextpage.children[0].classList.add("active");
    }
  }
};

prev.onclick = function () {
  let Active = document.querySelector("#de_comment .active");
  var CurrentCommentIndex = getChildIndex(nextpage, Active);

  if (
    CurrentCommentIndex >= 0 &&
    CurrentCommentIndex < nextpage.childElementCount
  ) {
    for (b = 0; b < nextpage.childElementCount; b++) {
      nextpage.children[CurrentCommentIndex].classList.remove("active");
    }

    if (
      CurrentCommentIndex <= nextpage.childElementCount - 1 &&
      CurrentCommentIndex > 0
    ) {
      nextpage.children[CurrentCommentIndex - 1].classList.add("active");
    } else if (CurrentCommentIndex <= 0) {
      nextpage.children[nextpage.childElementCount - 1].classList.add("active");
    }
  }
};





//  ***************** Gallery ****************
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: "GET",
  headers: myHeaders,

  redirect: "follow",
};

var Interior;
var Exterior;
var Events;

// fetch(ImageLinkName[0], requestOptions)
//   .then((response) => response.json())
//   .then((data) => {
//     Interior = data.data.Links;
//   })
//   .catch((error) => {
//     console.log("error: " + error);
//     console.error("Error fetching images:", error);
//   });

// fetch(ImageLinkName[2], requestOptions)
//   .then((response) => response.json())
//   .then((data) => {
//     Events = data.data.Links;
//   })
//   .catch((error) => {
//     console.log("error: " + error);
//     console.error("Error fetching images:", error);
//   });

// fetch(ImageLinkName[1], requestOptions)
//   .then((response) => response.json())
//   .then((data) => {
//     Exterior = data.data.Links;
//   })
//   .catch((error) => {
//     console.log("error: " + error);
//     console.error("Error fetching images:", error);
//   });


Interior = ImageLinkName[0].Links;

Events = ImageLinkName[1].Links;

Exterior = ImageLinkName[2].Links;


function switchImage(image, ListLinks) {
  // Array of image URLs
  var imageUrls = ListLinks;

  // Randomly select an image URL
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  // var newindex =
  var newImageUrl = imageUrls[randomIndex];

  // Apply fade-out transition
  image.style.opacity = 0.5;

  // Wait for the transition to complete
  setTimeout(function () {
    // Change the image source
    image.src = newImageUrl;

    // Apply fade-in transition
    image.style.opacity = 1;
  }, 400); // Wait for 400 milliseconds (0.4 seconds) before changing the image source
}

function switcher() {
  switchImage(framesImg[0], Interior);
  switchImage(framesImg[1], Exterior);
  switchImage(framesImg[2], Events);
  switchImage(framesImg[3], Exterior);
  switchImage(framesImg[4], Events);
  switchImage(framesImg[5], Interior);
}

let framesImg = document.querySelectorAll(".frames img");
// Call the switchImage function initially

// Call the switchImage function every 10 seconds
setInterval(switcher, 5000);




document.getElementById("top").onclick = function () {
  document.querySelector(".welcome").scrollIntoView();
};

function getChildIndex(parentElement, childElement) {
  var childIndex = Array.from(parentElement.children).indexOf(childElement);
  return childIndex;
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    document.getElementById("top").style.display = "block";
  } else if (window.scrollY < 200) {
    document.getElementById("top").style.display = "none";
  }
});
