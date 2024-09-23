// Declarand variables
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// aplicando eventos de click nos botões
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
}); // adiciona a classe sign-up-mode ao container

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
}); // remove a classe sign-up-mode do container
