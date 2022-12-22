const buttonOnOffInside = document.getElementById("button-on-off-inside");
const buttonOnOffRound = document.getElementById("button-on-off-round");
const backButton = document.getElementById("back-button");

buttonOnOffInside.addEventListener("click", fn_transitionBackgroundOff);
buttonOnOffInside.addEventListener("click", fn_transitionRoundOff);

buttonOnOffRound.addEventListener("click", fn_transitionBackgroundOff);
buttonOnOffRound.addEventListener("click", fn_transitionRoundOff);

backButton.addEventListener("click", fn_backToCustomerDetail);

pos = -6;


function fn_transitionBackgroundOff() {
    let id = null;

    clearInterval(id);

    if (pos === -6) {
        id = setInterval(mooveToRed, 1);
    } else if (pos === -96) {
        id = setInterval(mooveToGreen, 1);
        sendmail();
    }



    function mooveToRed() {
        if (pos === -96) {
            clearInterval(id);
        } else {
            pos--;
            buttonOnOffInside.style.marginLeft = pos + "px";
        }

    }
    
    function mooveToGreen() {
        if (pos === -6) {
            clearInterval(id);
        } else {
            pos++;
            buttonOnOffInside.style.marginLeft = pos + "px";
        }

    }

    function sendmail() {
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("response-php-email").innerHTML = this.responseText;
        
            }
        };
        xhttp.open("GET", "sendmail.php", true);
        xhttp.send();
    };
}


posRound = 31;

function fn_transitionRoundOff() {
    let id = null;

    clearInterval(id);

    if(posRound === 31) {
        id = setInterval(mooveToLeft, 10);
    } else if (posRound === 0) {
        id = setInterval(mooveToRight, 10);
    }



    function mooveToLeft() {
        if (posRound === 0) {
            clearInterval(id);
        } else {
            posRound--;
            buttonOnOffRound.style.marginLeft = posRound + "px";
        }
    }

    function mooveToRight() {
        if (posRound === 31) {
            clearInterval(id);
        } else {
            posRound++;
            buttonOnOffRound.style.marginLeft = posRound + "px";
        }
    }
}



function fn_backToCustomerDetail() {
    window.location.href = "../2 CustomerDetail/CustomerDetail.html";

}