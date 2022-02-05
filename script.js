 

let emailUser = document.getElementById("email");
let passwordUser = document.getElementById("password");
let emailRegistered = "oi@gmail.com";
let passwordRegistered = "senha";
 
let alertErrorLogin = document.getElementById("alert-error");

 
function Login() {
        if (passwordUser.value === passwordRegistered && emailUser.value === emailRegistered) {
            location = "home.html";    
            return false;  
        }

        if(passwordUser.value === "" && emailUser === ""){
            return false;                              
        }  
         
        if(passwordUser.value != passwordRegistered || emailUser.value != emailRegistered){
            alertErrorLogin.classList.add("boxred")
            alertErrorLogin.innerHTML = " Login inválido. Confira a sua senha ou e-mail." + 
            '<button id="fecharmensagem" onclick="closeX();">&times;</button>';
            return false;
        }

}
 
function showPassword() {
        let inputPassword = document.getElementById("password");

        if (inputPassword.type === "password") {
            inputPassword.type = "text";
         }
        
        else {
            inputPassword.type = "password";
        }
  }
 
 
let messageWithLogin = "Utilize nosso login padrão: Email: " + emailRegistered + " | Senha: " + passwordRegistered;
 
function closeX () {
    alertErrorLogin.classList.remove("boxred");
}

 
