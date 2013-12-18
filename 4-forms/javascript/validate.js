"use strict";

var Validator = {

    form: document.getElementById("form"),
    submitButton: document.getElementById("submitButton"),

    init: function () {

        var firstName = document.getElementById("firstName"),
            lastName = document.getElementById("lastName");
        var zipCode = document.getElementById("zipCode");
        var email = document.getElementById("email");
        var fill = document.createTextNode("Please fill in missing information")
        var submitFooter = document.createElement("footer");
        submitFooter.id = "submitfooter";

        //Validerar alla inputs.
        Validator.checkEmpty(firstName);
        Validator.checkEmpty(lastName);
        Validator.checkEmpty(zipCode);
        Validator.checkEmpty(email);
        
        //Körs när man klickar på submitknappen i formuläret.
        Validator.form.onsubmit = function submitForm() {

            if (firstName.className && lastName.className && zipCode.className && email.className == "valid") {

                //Kollar om det finns ett felmeddelande i formuläret och tar i så fall bort det.
                if (submitFooter.parentNode == Validator.form) {

                    Validator.form.removeChild(submitFooter);
                }
                
                //Skickar med alla inputs för att få ut värdena i funktionen.
                Validator.renderPopup(firstName,lastName,zipCode,email);

                return false;

            }
            else {

                //Om alla inputs inte är validerade sätts ett felmeddelande bredvid submitknappen.
                submitFooter.appendChild(fill)
                Validator.form.appendChild(submitFooter);

                return false;
            }
        };
    },


    checkEmpty: function (input) {

        input.onblur = function () {

            if (input.value == "") {

                input.setAttribute("class", "invalid");
            }
            else {

                if (input.name == "zipCode") {

                    Validator.checkZip(input);
                }
                else if (input.name == "email") {

                    Validator.checkEmail(input);
                }
                else {

                    input.setAttribute("class", "valid");
                }
            }
        };
    },

    checkZip: function (input) {
      
        input.value = input.value.replace(" ", "").replace("-", "").replace("SE", "");

        if (input.value.match(/^\d{5}$/)) {

            input.setAttribute("class", "valid");
        }
        else {

            input.setAttribute("class", "invalid");
        }
    },

    checkEmail: function (input) {

        if (input.value.match(/^[\w-\._\+%]+@(?:[\w-]+\.)+[\w]{2,6}$/)) {

            input.setAttribute("class", "valid");
        }
        else {

            input.setAttribute("class", "invalid");
        }
    },

    renderPopup: function (firstName, lastName, zipCode, email) {

        var dimmedBackground = document.createElement("div");
        var popupWindow = document.createElement("div");
        var popupTitle = document.createElement("header")
        var buttonFooter = document.createElement("footer");
        var title = document.createTextNode("Please confirm your purchase")
        var priceModel = document.getElementById("priceModel");

        dimmedBackground.id = "dimmedBackground";
        popupWindow.id = "popupWindow";
        popupTitle.id = "popupTitle";
        buttonFooter.id = "buttonFooter";

        var pFName = document.createElement("p");
        var pLName = document.createElement("p");
        var pZip = document.createElement("p");
        var pMail = document.createElement("p");
        var pPrice = document.createElement("p");

        var pFNameVal = document.createTextNode("First Name: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + firstName.value);
        var pLNameVal = document.createTextNode("Last Name: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + lastName.value);
        var pZipVal = document.createTextNode("Zip Code: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + zipCode.value);
        var pMailVal = document.createTextNode("E-mail: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + email.value);
        var pPriceVal = document.createTextNode("Pricemodel: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + priceModel.value);

        pFName.appendChild(pFNameVal);
        pLName.appendChild(pLNameVal);
        pZip.appendChild(pZipVal);
        pMail.appendChild(pMailVal);
        pPrice.appendChild(pPriceVal);

        var cancelButton = document.createElement("input");
        cancelButton.type = "submit";
        cancelButton.value = "Cancel";
        cancelButton.className = "popupButton";
        cancelButton.onclick = function () {

            document.body.removeChild(dimmedBackground);
        }

        var confirmButton = document.createElement("input")
        confirmButton.type = "submit";
        confirmButton.value = "Confirm";
        confirmButton.className = "popupButton";
        confirmButton.onclick = function () {

            Validator.form.submit();
        }
        
        popupTitle.appendChild(title);
        buttonFooter.appendChild(confirmButton);
        buttonFooter.appendChild(cancelButton);
        popupWindow.appendChild(popupTitle);
        popupWindow.appendChild(pFName);
        popupWindow.appendChild(pLName);
        popupWindow.appendChild(pZip);
        popupWindow.appendChild(pMail);
        popupWindow.appendChild(pPrice);

        popupWindow.appendChild(buttonFooter);
        dimmedBackground.appendChild(popupWindow);
        document.body.appendChild(dimmedBackground);

    }
}

window.onload = Validator.init;

// /^\d{5}$/

// /^[\w-\._\+%]+@(?:[\w-]+\.)+[\w]{2,6}$/