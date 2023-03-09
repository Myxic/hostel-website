let darkMode = localStorage.getItem('darkMode');

const darkModeTogle = document.querySelector("#check")

const enableDarkMode = () => {
  // 1. add the class darkmode to the body 
  document.body.classList.add("darkmode");
  // 2. update darkmode in the localStorage
  localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
  // 1. add the class off darkmode to the body 
  document.body.classList.remove("darkmode");
  check.checked = false;
  // 2. update darkmode in the localStorage
  localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
  check.checked = true;
  enableDarkMode();
}

check.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode');
  if (check.checked && darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  check.checked = true;
  if (check.checked) {
    enableDarkMode();
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    console.log("Check")
    disableDarkMode();
  } else {
    disableDarkMode();
  }

}
// ADDING THE FUNCTION FOR THE HAM BURGER MENU 

const hamBurgerMenu = document.querySelector('.ham');
const textmenu = document.querySelectorAll('.min');
const navmenu = document.querySelector('.navbar')
let menuOpen = false;

hamBurgerMenu.addEventListener("click", () => {
  if (!menuOpen) {
    hamBurgerMenu.classList.add("open");
    menuOpen = true;
    textmenu.forEach(text => {
      text.style.display = "flex";
    });
    navmenu.style.width = "var(--phone-fullview--";

  } else {
    hamBurgerMenu.classList.remove("open");
    menuOpen = false;
    textmenu.forEach(text => {
      text.style.display = "none";
    });
    navmenu.style.width = "var(--nwidth--)";
  };

});

// PROFILE PIC

const profile = document.querySelector('#display-profile-pic');
const modal = document.querySelector('.profile-modal');
const closeModal = document.querySelector('.closeModal');
const closeModal2 = document.querySelector('.closeModal1');
const modal2 = document.querySelector(".FullProfile");

const moveup = document.querySelector("#move-up");
const movedown = document.querySelector("#move-down");
const moveleft = document.querySelector("#move-left");
const moveright = document.querySelector("#move-right");
const savedp = document.querySelector(".save-dp");


profile.addEventListener("click", () => {

  modal.showModal();

});
closeModal.addEventListener("click", () => {
  modal.close();


});
// adding profile pic 

const imgInput = document.querySelector('#add-profile-pic');



imgInput.addEventListener("change", function () {

  var image = imgInput.files[0];
  console.log(image);
  createReader(image, function (w, h) {

    // alert("Width is: " + w +
    // "pixels, Height is: " + h + "pixels");
  });

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    var width = this.width
    var height = this.height;

    const uploaded_image = reader.result;
    // ADDING THE IMAGE
    document.querySelector('.profile-pic-modal2').style.backgroundImage = `url(${uploaded_image})`;
    profile.style.backgroundImage = `url(${uploaded_image})`;
    document.querySelector(".full-profile-pic").style.backgroundImage = `url(${uploaded_image})`;
    // ADDING THE EDITTING BUTTONS
    document.querySelector(".pic-upload").style.display = "none";
    closeModal.style.display = "none";
    document.querySelector(".remove-dp").style.display = "none";
    document.querySelectorAll(".edit-dp").forEach(button => {
      button.style.display = "block";
    });
    document.querySelector(".save-dp").style.display = "block";
  });
  reader.readAsDataURL(this.files[0]);

});
function createReader(file, whenReady) {
  var reader = new FileReader;
  reader.onload = function (evt) {
    var image = new Image();
    image.onload = function (evt) {
      var width = this.width;
      var height = this.height;
      if (whenReady) whenReady(width, height);
    };
    image.src = evt.target.result;
  };
  reader.readAsDataURL(file);
}
document.querySelector('.profile-pic-modal2').addEventListener("click", () => {
  modal2.showModal();
  modal.close();
});
closeModal2.addEventListener("click", () => {
  modal2.close();
});

// ADDING DP EDITOR

let movepercent = 60;
let movepercentX = 0;

moveup.addEventListener("click", () => {
  movepercent += 5;
  profile.style.backgroundPositionY = `${movepercent}%`;
  document.querySelector(".full-profile-pic").style.backgroundPositionY = `${movepercent}%`;
  document.querySelector('.profile-pic-modal2').style.backgroundPositionY = `${movepercent}%`;


});
movedown.addEventListener("click", () => {
  movepercent -= 5;
  profile.style.backgroundPositionY = `${movepercent}%`;
  document.querySelector(".full-profile-pic").style.backgroundPositionY = `${movepercent}%`;
  document.querySelector('.profile-pic-modal2').style.backgroundPositionY = `${movepercent}%`;

});
moveleft.addEventListener("click", () => {
  movepercentX += 5;
  profile.style.backgroundPositionX = `${movepercentX}px`;
  document.querySelector(".full-profile-pic").style.backgroundPositionX = `${movepercentX}px`;
  document.querySelector('.profile-pic-modal2').style.backgroundPositionX = `${movepercentX}px`;

});
moveright.addEventListener("click", () => {
  movepercentX -= 5;
  profile.style.backgroundPositionX = `${movepercentX}px`;
  document.querySelector(".full-profile-pic").style.backgroundPositionX = `${movepercentX}px`;
  document.querySelector('.profile-pic-modal2').style.backgroundPositionX = `${movepercentX}px`;

});
document.querySelector(".save-dp").addEventListener("click", () => {
  document.querySelector(".pic-upload").style.display = "block";
  closeModal.style.display = "block";
  document.querySelector(".remove-dp").style.display = "block";
  document.querySelectorAll(".edit-dp").forEach(button => {
    button.style.display = "none";
  });
  document.querySelector(".save-dp").style.display = "none";
});
document.querySelector(".remove-dp").addEventListener("click", () => {
  document.querySelector('.profile-pic-modal2').style.backgroundImage = "url(../images/person-fill.svg)";
  profile.style.backgroundImage = "url(../images/person-fill.svg)";
  document.querySelector(".full-profile-pic").style.backgroundImage = "url(../images/person-fill-white.svg)";
});

const navIcon1 = document.querySelectorAll(".nav-icon")
navIcon1.forEach(navIcon => {
  navIcon.addEventListener("click", () => {
    if (navIcon1[0].checked) {
      document.querySelector(".dashboard").classList.add("selected");
      document.querySelector(".DashboardContent").classList.add("ViewPager");
    } else {
      document.querySelector(".dashboard").classList.remove("selected");
      document.querySelector(".DashboardContent").classList.remove("ViewPager");
    };
    if (navIcon1[1].checked) {
      document.querySelector(".messages").classList.add("selected");
      document.querySelector(".MessageContent ").classList.add("ViewPager");
    } else {
      document.querySelector(".messages").classList.remove("selected");
      document.querySelector(".MessageContent").classList.remove("ViewPager");

    };
    if (navIcon1[2].checked) {
      document.querySelector(".payment").classList.add("selected");
      document.querySelector(".PaymentContent").classList.add("ViewPager");
    } else {
      document.querySelector(".payment").classList.remove("selected");
      document.querySelector(".PaymentContent").classList.remove("ViewPager");
    };
    if (navIcon1[3].checked) {
      document.querySelector(".event").classList.add("selected");
      document.querySelector(".EventContent").classList.add("ViewPager");
    } else {
      document.querySelector(".event").classList.remove("selected");
      document.querySelector(".EventContent").classList.remove("ViewPager");
    };
    if (navIcon1[4].checked) {
      document.querySelector(".report").classList.add("selected");
      document.querySelector(".ReportContent").classList.add("ViewPager");
    } else {
      document.querySelector(".report").classList.remove("selected");
      document.querySelector(".ReportContent").classList.remove("ViewPager");
    };
    if (navIcon1[0].checked || navIcon1[1].checked || navIcon1[2].checked || navIcon1[3].checked || navIcon1[4].checked) {
      document.querySelector(".Emptypage").classList.remove("OpenPage");
    } else {
      document.querySelector(".Emptypage").classList.add("OpenPage");
    }
  });

  window.addEventListener("load", () => {
    if (navIcon1[0].checked) {
      document.querySelector(".dashboard").classList.add("selected");
      document.querySelector(".DashboardContent").classList.add("ViewPager");
    } else {
      document.querySelector(".dashboard").classList.remove("selected");
      document.querySelector(".DashboardContent").classList.remove("ViewPager");
    };
    if (navIcon1[1].checked) {
      document.querySelector(".messages").classList.add("selected");
      document.querySelector(".MessageContent ").classList.add("ViewPager");
    } else {
      document.querySelector(".messages").classList.remove("selected");
      document.querySelector(".MessageContent").classList.remove("ViewPager");

    };
    if (navIcon1[2].checked) {
      document.querySelector(".payment").classList.add("selected");
      document.querySelector(".PaymentContent").classList.add("ViewPager");
    } else {
      document.querySelector(".payment").classList.remove("selected");
      document.querySelector(".PaymentContent").classList.remove("ViewPager");
    };
    if (navIcon1[3].checked) {
      document.querySelector(".event").classList.add("selected");
      document.querySelector(".EventContent").classList.add("ViewPager");
    } else {
      document.querySelector(".event").classList.remove("selected");
      document.querySelector(".EventContent").classList.remove("ViewPager");
    };
    if (navIcon1[4].checked) {
      document.querySelector(".report").classList.add("selected");
      document.querySelector(".ReportContent").classList.add("ViewPager");
    } else {
      document.querySelector(".report").classList.remove("selected");
      document.querySelector(".ReportContent").classList.remove("ViewPager");
    };
    if (navIcon1[0].checked || navIcon1[1].checked || navIcon1[2].checked || navIcon1[3].checked || navIcon1[4].checked) {
      document.querySelector(".Emptypage").classList.remove("OpenPage");
    } else {
      document.querySelector(".Emptypage").classList.add("OpenPage");
    }
  });

});

if (window.matchMedia("(max-width:400px)").matches) {
  const footershow = document.querySelector("#footershow");

  document.querySelector("#labell1").addEventListener("click", () => {
    if (footershow.checked) {
      document.querySelector("footer").classList.add("footerdiv");
    } else if (!footershow.checked) {
      document.querySelector("footer").classList.remove("footerdiv");
    }
  });
};


