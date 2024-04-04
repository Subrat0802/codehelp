const threeDot = document.querySelector(".three-dot");
const container = document.querySelector(".container");
const cut = document.querySelector(".cut");


threeDot.addEventListener("click" , () => {
    container.style.visibility = "visible";
})

cut.addEventListener("click", () => {
    container.style.visibility = "hidden"
})