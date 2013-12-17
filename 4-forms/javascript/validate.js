"use strict";

var Validator = {

    form: document.getElementById("form"),
    submitButton: document.getElementById("submit"),

    firstName: true,
    lastName: true,
    zipCode: true,
    email: true,

    init: function () {

        var firstName = document.getElementById("firstName"),
            lastName = document.getElementById("lastName");
        var zipCode = document.getElementById("zipCode");
        var email = document.getElementById("email");

        Validator.checkEmpty(firstName);
        Validator.checkEmpty(lastName);
        

        Validator.submitButton.onclick = function (e) {
            e.preventDefault();
            if (Validator.firstName && Validator.lastName && Validator.zipCode && Validator.email) {

                Validator.form.submit();
            }
            else {
                return false;
            }

        };
    },


    checkEmpty: function (input) {

        input.onblur = function () {

            if (input.value == "") {

                input.setAttribute("class", "invalid");
                Validator.input = false;

            }
            else {
                input.setAttribute("class", "valid");
                Validator.input = true;
            }


        };

    }
}

window.onload = Validator.init;