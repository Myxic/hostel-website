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
    // 2. update darkmode in the localStorage
    localStorage.setItem('darkMode', null);
}  
if (darkMode === 'enabled') {
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
