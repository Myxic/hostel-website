let box;

document.addEventListener("click", () => {
  box = document.querySelector(".active");
  box.addEventListener("click", chooseSide);
});

function chooseSide(e) {
  const { clientX } = e;
  const { clientWidth } = box;
  
  if (clientX > clientWidth / 2) {
    console.log("right: " + clientX);
    let Active = document.querySelector(".active");
    var CurrentCommentIndex = getChildIndex(nextpage, Active);

    if (
      CurrentCommentIndex >= 0 &&
      CurrentCommentIndex < nextpage.childElementCount
    ) 
    {
      for (b = 0; b < nextpage.childElementCount; b++) {
        nextpage.children[CurrentCommentIndex].classList.remove("active");
      }

      if (CurrentCommentIndex < nextpage.childElementCount - 1) {
        nextpage.children[CurrentCommentIndex + 1].classList.add("active");
      } else if (CurrentCommentIndex == nextpage.childElementCount - 1) {
        nextpage.children[0].classList.add("active");
      }
    }

    
  } else {
    console.log("left:  "+ clientX);

    let Active = document.querySelector(".active");
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
  }
}
