const openmodal = document.querySelector(".addImage");
const modal = document.querySelector("#plus-img");
const closemodal = document.querySelector("#button_3");

openmodal.addEventListener("click", ()=> {
    modal.showModal();
});
closemodal.addEventListener("click", ()=> {
    modal.close();
});

// const openmodal2 = document.querySelector(".addImage-2");
// const modal2 = document.querySelector("#plus-interior-img");
// const closemodal2 = document.querySelector("#button22");

// openmodal2.addEventListener("click", ()=> {
//     modal2.showModal();
// });
// closemodal2.addEventListener("click", ()=> {
//     modal2.close();
// });

// const openmodal3 = document.querySelector(".addImage-3");
// const modal3 = document.querySelector("#plus-event-img");
// const closemodal3 = document.querySelector("#button33");

// openmodal3.addEventListener("click", ()=> {
//     modal3.showModal();
// });
// closemodal3.addEventListener("click", ()=> {
//     modal3.close();
// });