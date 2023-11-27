//Nombro mis constantes por medios de los ID que agregue en mi HTML//

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

//Cuando haga click en el boton de Sign In, se realiza la animacion y en el otro boton envia la info de mi formulario//
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
