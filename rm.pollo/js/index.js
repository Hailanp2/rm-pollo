
const toggleBtn = document.querySelector('.bar-responsive');
const toggleBtnIcon = document.querySelector('.bar-responsive i');
const dropDownMenu = document.querySelector('.drop-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'

}

const observador = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting){
            document.querySelectorAll(".imagem-produto")[0].classList.add("animacao");
            document.querySelectorAll(".imagem-produto")[1].classList.add("animacao");
            document.querySelectorAll(".imagem-produto")[2].classList.add("animacao");
            document.querySelector(".grid-links-2").classList.add("animacao")
        }
    })
})

observador.observe(document.querySelector(".alinhamento-item"));
observador.observe(document.querySelector(".alinhamento-produtos"))