const openmodal = document.querySelector(".addImage");
const modal = document.querySelector("#plus-img");
const closemodal = document.querySelector("#button_3");

openmodal.addEventListener("click", ()=> {
    modal.showModal();
});
closemodal.addEventListener("click", ()=> {
    modal.close();
});
