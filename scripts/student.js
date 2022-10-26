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

check.addEventListener("click", ()=> {
    darkMode = localStorage.getItem('darkMode');
    if (check.checked && darkMode !== "enabled" ){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
});

if (window.matchMedia("(prefers-color-scheme: dark)").matches){
    check.checked = true;
    if (check.checked){
        enableDarkMode();
    }else{
        disableDarkMode();
    }

}


// ADDING THE FUNCTION FOR THE HAM BURGER MENU 

const hamBurgerMenu = document.querySelector('.ham');
const textmenu = document.querySelectorAll('.min');
const navmenu = document.querySelector('.navbar')
let menuOpen = false;

hamBurgerMenu.addEventListener("click", ()=> {
    if (!menuOpen) {
        hamBurgerMenu.classList.add("open");
        menuOpen = true;
        textmenu.forEach(text => {
            text.style.display = "flex";
        });
        navmenu.style.width = "var(--phone-fullview--";
        
    }else{
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
const modal2 = document.querySelector(".full-profile")


profile.addEventListener("click", () => {
    modal.showModal();
    
});
closeModal.addEventListener("click", () => {
    modal.close();
    
    
});


// adding profile pic 

const imgInput = document.querySelector('#add-profile-pic');

imgInput.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector('.profile-pic-modal2').style.backgroundImage = `url(${uploaded_image})`;
        profile.style.backgroundImage = `url(${uploaded_image})`;
        document.querySelector(".full-profile-pic").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

document.querySelector('.profile-pic-modal2').addEventListener("click", () => {
    modal2.showModal();
});
closeModal2.addEventListener("click", () => {
    modal2.close();
    
    
});


