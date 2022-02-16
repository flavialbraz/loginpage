let emailUser = document.getElementById("email");
let passwordUser = document.getElementById("password");
let emailRegistered = "oi@gmail.com";
let passwordRegistered = "senha";
 
let alertErrorLogin = document.getElementById("alert-error");

 
function Login() {
        if (passwordUser.value === passwordRegistered && emailUser.value.toLowerCase() === emailRegistered) {
            location = "home.html";    
        }

        if(passwordUser.value === "" && emailUser === ""){
        }  
         
        if(passwordUser.value != passwordRegistered || emailUser.value.toLowerCase() != emailRegistered){
            alertErrorLogin.classList.add("boxred")
            alertErrorLogin.innerHTML = " Login inválido. Confira a sua senha ou e-mail" + 
            '<button id="closemsg" onclick="closeX();">&times;</button>';
        }

        return false;

}
 
function showPassword() {
        let inputPassword = document.getElementById("password");

        if (inputPassword.type === "password") {
            inputPassword.type = "text";
         }
 
         inputPassword.type = "password";
 
         return;
}
 
 
let messageWithLogin = "Utilize nosso login padrão: Email: " + emailRegistered + " | Senha: " + passwordRegistered;
 
function closeX () {
    alertErrorLogin.classList.remove("boxred");
}

 
