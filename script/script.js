let btnAbrir = document.querySelector(".btn-menu")
let menu = document.querySelector(".menu")
let btnFechar = document.querySelector(".btn-fechar")

btnAbrir.addEventListener('click', () => {
    menu.style.display = "flex";
})

btnFechar.addEventListener('click', () => {
    menu.style.display = "none";
})