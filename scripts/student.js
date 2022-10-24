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
        console.log(darkMode);
    }else{
        disableDarkMode();
        console.log(darkMode);
    }
});

if (window.matchMedia("(prefers-color-scheme: dark)").matches){
    check.checked = true;
    if (check.checked){
        enableDarkMode();
        console.log(darkMode);
    }else{
        disableDarkMode();
        console.log(darkMode);
    }

}


// ADDING THE FUNCTION FOR THE HAM BURGER MENU 

const hamBurgerMenu = document.querySelector('.ham');
let menuOpen = false;

hamBurgerMenu.addEventListener("click", ()=> {
    if (!menuOpen) {
        hamBurgerMenu.classList.add("open");
        menuOpen = true;
    }else{
        hamBurgerMenu.classList.remove("open");
        menuOpen = false;
    }
});