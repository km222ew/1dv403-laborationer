"use strict";

var Validator = {

    form: document.getElementById("form"),
    submitButton: document.getElementById("submit"),

    init: function () {

        var firstName = document.getElementById("firstName"),
            lastName = document.getElementById("lastName");
        var zipCode = document.getElementById("zipCode");
        var email = document.getElementById("email");

        Validator.checkEmpty(firstName);
        Validator.checkEmpty(lastName);
        Validator.checkEmpty(zipCode);
        Validator.checkEmpty(email);
        
        Validator.form.onsubmit = submit;

        function submit() {

            if (firstName.className && lastName.className && zipCode.className && email.className == "valid") {

                return true;

            }
            else {

                return false;
            }

        }



        //Validator.submitButton.onclick = function (e) {

        //    console.log(Validator.firstName);
        //    console.log(Validator.lastName);
        //    console.log(Validator.zipCode);
        //    console.log(Validator.email);
        //    e.preventDefault();

            

        //    if (firstName.className && lastName.className && zipCode.className && email.className == "valid") {

        //        Validator.form.submit();

        //    }
        //    else {
        //        return false;
        //    }

        //};
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

        //input.onblur = function () {

            if (input.value.match(/^\d{5}$/)) {
                input.setAttribute("class", "valid");

            }
            else {
                input.setAttribute("class", "invalid");

            }

        //};
            
    },

    checkEmail: function (input) {

        //input.onblur = function () {

            if (input.value.match(/^[\w-\._\+%]+@(?:[\w-]+\.)+[\w]{2,6}$/)) {
                input.setAttribute("class", "valid");

            }
            else {
                input.setAttribute("class", "invalid");

            }

        //};
    }

}

window.onload = Validator.init;

// /^\d{5}$/

// /^[\w-\._\+%]+@(?:[\w-]+\.)+[\w]{2,6}$/