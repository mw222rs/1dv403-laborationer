"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		if (date === "" || date.charAt(4) !== "-" || date.charAt(7) !== "-") {
			throw new Error("Vänligen mata in ett giltigt datum.");
		}
		
		console.log("Indata: " + date);
		
		var userBday = new Date(date);
		var now = new Date();
		
		var thisYearUserBday = new Date(now.getFullYear(), userBday.getMonth(), userBday.getDate());
		var nextYearUserBday = new Date((now.getFullYear() + 1), userBday.getMonth(), userBday.getDate());
		
		console.log("UserBday-objekt: " + userBday);
		console.log("Nu: " + now);
		console.log("Bday: " + thisYearUserBday);
		console.log("Nästa år: " + nextYearUserBday);
		
		var diff = ((thisYearUserBday.getTime() < now.getTime()) ? nextYearUserBday.getTime() : thisYearUserBday.getTime()) - now.getTime();
		
		var days = Math.ceil(diff / (1000*60*60*24));
		
		return days;
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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};