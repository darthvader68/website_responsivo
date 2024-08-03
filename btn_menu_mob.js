// criando evento de click

let btnMenuMob = document.querySelector('#btn_menu_mob')
let line1 = document.querySelector(".line_menumob_01")
let line2 = document.querySelector(".line_menumob_02")

btnMenuMob.addEventListener("click", ()=>{
    line1.classList.toggle("ativo1")
    line2.classList.toggle("ativo2")
})