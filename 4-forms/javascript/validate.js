"use strict";

var Validator = {

    form: document.getElementById("form"),
    submitButton: document.getElementById("submit"),

    init: function () {

        var firstName = document.getElementById("firstName"),
            lastName = document.getElementById("lastName");
        var zipCode = document.getElementById("zipCode");
        var email = document.getElementById("email");
        var fill = document.createTextNode("Please fill in missing information")
        var footer = document.createElement("footer");

        Validator.checkEmpty(firstName);
        Validator.checkEmpty(lastName);
        Validator.checkEmpty(zipCode);
        Validator.checkEmpty(email);
        
        Validator.form.onsubmit = submit;

        function submit() {

            if (firstName.className && lastName.className && zipCode.className && email.className == "valid") {

                Validator.form.removeChild(footer);

                return true;

            }
            else {

                footer.appendChild(fill)
                Validator.form.appendChild(footer);
                
                return false;
            }
        }
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
      
        input.value = input.value.replace(" ", "").replace("-", "").replace("SE", "")

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

    }

}

window.onload = Validator.init;

// /^\d{5}$/

// /^[\w-\._\+%]+@(?:[\w-]+\.)+[\w]{2,6}$/