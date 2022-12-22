const appointmentText = document.getElementById("appointment-text");
const customerAtext = document.getElementById("customer-atext");
const clientBox = document.getElementsByClassName("client-box");


console.log(clientBox.length);


appointmentText.addEventListener("click", goToAppointment);

function goToAppointment() {
    document.getElementById("side-customer").style.display = "none";
    document.getElementById("side-appointment").style.display = "flex";

    document.getElementById("appointment-text").style.color = "black";
    document.getElementById("customer-atext").style.color = "#797C78";
}



customerAtext.addEventListener("click", goToCustomer);

function goToCustomer() {
    document.getElementById("side-customer").style.display = "flex";
    document.getElementById("side-appointment").style.display = "none";

    document.getElementById("appointment-text").style.color = "#797C78";
    document.getElementById("customer-atext").style.color = "black";
}


for (let i = 0; clientBox.length; i++) {
    clientBox[i].addEventListener("click", goToCustDetail);

}


function goToCustDetail() {
    window.location.href="../html/CustomerDetail.html";
}