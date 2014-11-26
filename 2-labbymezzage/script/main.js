"use strict";

var labbyMezzage = {
    
    messages: [],
    count: 0,
    
    init:function()
    {
    var div = document.querySelector(".messageText");
	var input = document.querySelector("#textArea");
	var submit = document.querySelector("#send");
	var counter = document.querySelector("#counter");
	
	counter.innerHTML = "Inga meddelanden att visa.";

	submit.addEventListener("click", function(e){
		e.preventDefault();

		labbyMezzage.createMessage(input.value);
		
		var htmlStr = "";
		
		labbyMezzage.messages.forEach(function(message){
		    htmlStr += message.getHTMLText();
		});
		
		counter.innerHTML = "Antal meddelanden: "+labbyMezzage.count;
		div.innerHTML = htmlStr;		
	
	});
        
    },
    createMessage: function(input)
    {
        var createdMessage = new Message(input, new Date());
        
        this.messages.push(createdMessage);
        this.count = this.messages.length;
        
        return this.messages;
    }
};

window.onload = labbyMezzage.init;

    