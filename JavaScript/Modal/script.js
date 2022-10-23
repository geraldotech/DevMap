
//button name
const NovoNome = () => {
     const name = document.querySelector("#name").value;
     document.getElementById("nome").innerHTML = `Ola ${name}`; 
     
 }

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () =>{
    /* modal.classList.toggle("hide");
    fade.classList.toggle("hide"); */
    [modal,fade].forEach((el)=> el.classList.toggle("hide"));
    NovoNome();
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", ()=> toggleModal());
})

[openModalButton, closeModalButton, modal].forEach((el) => {
    el.addEventListener("click", ()=> console.log('test')); 
});
