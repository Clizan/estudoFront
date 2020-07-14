/*Declarar variavél em Js*/
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

/*Quando clicar no botão faça:*/
btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

/*Quando clicar no botão faça:*/
btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})  