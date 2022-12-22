const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalClose1 = document.querySelector(".modal__close_times");
const showSuccess = document.querySelector(".show-success");
const modalClose = document.querySelectorAll(".modal__close_times");

console.log(modalClose);

for (let i = 0; i<(2); i++) {
    modalClose[i].onclick = function(event) {
        modalMain.className = "modal";
        modalSuccess.className = "modal";
    }
};

modalMain.className = "modal modal_active";

showSuccess.onclick = function(event) {
    modalMain.className = "modal";
    modalSuccess.className = "modal modal_active";
}