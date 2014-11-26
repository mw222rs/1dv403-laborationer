"use strict";

var labbyMezzage = {
    
    messages: [],
    count: 0,
    
    init:function()
    {
    
	var input = document.querySelector("#textArea");
	var submit = document.querySelector("#send");
	var counter = document.querySelector("#counter");
	
	counter.innerHTML = "Inga meddelanden att visa.";

	submit.addEventListener("click", function(e){
		e.preventDefault();

		labbyMezzage.createMessage(input.value);
		
		labbyMezzage.renderMessages();
		
		//div.innerHTML = labbyMezzage.renderMessages();
		
		counter.innerHTML = "Antal meddelanden: "+labbyMezzage.count;
				
	
	});
        
    },
    createMessage: function(input)
    {
        var createdMessage = new Message(input, new Date());
        
        this.messages.push(createdMessage);
        this.count = this.messages.length;
    },
    renderMessage: function(messageId){
        var div = document.querySelector("#messageArea");
        var messageText = document.createElement("p");
        messageText.innerHTML = this.messages[messageId].getHTMLText();
        div.appendChild(messageText);
    },
    renderMessages: function(){
        
        document.getElementById("messageArea").innerHTML = "";
        
        labbyMezzage.messages.forEach(function(value, id){
		    labbyMezzage.renderMessage(id);
		});
		
    }
};
window.onload = labbyMezzage.init;

    