const tombol = document.querySelector(".menu-button");
const menu = document.querySelector(".la-links");

tombol.addEventListener("click", () =>{
    tombol.classList.toggle("active");
    menu.classList.toggle("active");
})
