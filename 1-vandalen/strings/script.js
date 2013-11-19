"use strict";

window.onload = function(){

	var convertString = function(str){
		 
	    var string = [];

	    if (str === "") {
            throw new Error("Fältet är tomt. Skriv något för att kunna omvandla.")
	    }
	   
        for (var i = 0; i < str.length; i++) {

	        if (str.charAt(i) === "A" || str.charAt(i) === "a") {

	            string[i] = "#";
	        }
	        else if (str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i) != str.charAt(i).toLowerCase()) {
	             
	            string[i] = str.charAt(i).toLowerCase();
	        }
	        else {

	           string[i] = str.charAt(i).toUpperCase();
	        }

	    }

	    return string.join("");
    };
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};