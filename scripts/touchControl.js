let box;
box = document.querySelector("#de_comment .active");
box.addEventListener("click", chooseSide);

document.addEventListener("click", () => {
  box = document.querySelector("#de_comment .active");
  box.addEventListener("click", chooseSide);
});

function chooseSide(e) {
  const { clientX } = e;
  const { clientWidth } = box;

  if (clientX > clientWidth / 2) {
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
  } else {
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
        nextpage.children[nextpage.childElementCount - 1].classList.add(
          "active"
        );
      }
    }
  }
}
function ShowAdminLogin(word) {
  console.log(word);

  if (window.matchMedia("(min-width: 675px)").matches) {
    var hiddenbuttons = document.querySelectorAll("#hiddenbuttons .login");
    var logoImage = document.querySelector("footer .logo img");
    var clickCount = 0;

    function showButtons() {
      hiddenbuttons.forEach((element) => {
        element.style.display = "block";
      });
    }

    function hideButtons() {
      hiddenbuttons.forEach((element) => {
        element.style.display = "none";
      });
    }

    function clickHandler() {
      clickCount++;

      if (clickCount === 6) {
        showButtons();
        logoImage.removeEventListener("click", clickHandler);
        
        setTimeout(function() {
          hideButtons();
          clickCount = 0; // Reset the click count
          logoImage.addEventListener("click", clickHandler);
        }, 10000); // Wait for 5 seconds before resetting and adding the click handler again
      }
    }

    logoImage.addEventListener("click", clickHandler);
  }
}

ShowAdminLogin("started");
