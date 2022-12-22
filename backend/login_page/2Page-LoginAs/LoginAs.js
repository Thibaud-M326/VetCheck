const dontHaveAccount = document.getElementById("link-dont-have-account");
const buttonContinue = document.getElementById("button-continue");
const back = document.getElementById("back");
const signInText = document.getElementById("sign-in-text");
const loginText2 = document.getElementById("login-text-2");
const buttonLogin = document.getElementById("button-login");





dontHaveAccount.addEventListener("click", fn_goToSign);

function fn_goToSign() {
    document.getElementById("div-display-login-as").style.display = "none";
    document.getElementById("div-display-login").style.display = "flex";
    document.getElementById("div-display-login").style.zIndex = "-1";
    document.getElementById("div-display-sign-in").style.zIndex = "0";

}





buttonContinue.addEventListener("click", displayLoginAs);

function displayLoginAs(event) {
    event.preventDefault();
    document.getElementById("div-display-login-as").style.display = "none";
    document.getElementById("div-display-login").style.display = "flex";

}





back.addEventListener("click", fn_back);

function fn_back() {
    document.getElementById("div-display-login-as").style.display = "flex";
    document.getElementById("div-display-login").style.display = "none";
}





signInText.addEventListener("click", fn_displaySignIn);

function fn_displaySignIn() {
    document.getElementById("div-display-login").style.zIndex = "-1";
    document.getElementById("div-display-sign-in").style.zIndex = "0";

}





loginText2.addEventListener("click", fn_backToLogin);

function fn_backToLogin() {
    document.getElementById("div-display-login").style.zIndex = "0";
    document.getElementById("div-display-sign-in").style.zIndex = "-1";

}





buttonLogin.addEventListener("click", fn_openVetLogin);

function fn_openVetLogin(event) {
    event.preventDefault();
    window.location.href="../../Vet Login/1Temp-Login/TempVetPage.html"

}