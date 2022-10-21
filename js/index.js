"use strict"

let elSelectValue = document.querySelector("#select") ;
let elNon = document.querySelector(".non") ;
// const elActivQosh = document.querySelectorAll(".activ-qosh") 
const elUst = document.querySelectorAll(".span-ust") ;
 
elSelectValue.addEventListener("change", ()=>{ 
    elNon.textContent = elSelectValue.value 
})


$('.right-btn').addEventListener('click', ()=>{
  $('.modal-success').style.display="flex"
})