"use strict";

var labbyMezzage = {
    
    messages: [],
    init:function()
    {
    
	var input = document.querySelector("#textArea");　// Find the textarea-node.
	var submit = document.querySelector("#send"); // Find the submit-button.
	
	input.onkeypress = function(e){
	    var key = e.keyCode;
	    
	    if (e.shiftKey === false && key === 13) {
	        e.preventDefault();
	        labbyMezzage.createMessage(input.value);
	    }
	}
	
	submit.onclick = function(e){ // When the button is clicked...
	    e.preventDefault();
	    
	    labbyMezzage.createMessage(input.value); // Create a new message with the text from the textarea. 
	    }
	  
	
	},
    
    createMessage: function(input) // Creates a new message-object. 
    {
        if (input === "") {
            document.querySelector("#counter").innerHTML = "FEL! Du kan inte posta ett tomt meddelande!";
        }
        else {
            var createdMessage = new Message(input, new Date());
            labbyMezzage.messages.push(createdMessage); // Pushes the object into the messages-array.
            labbyMezzage.renderMessages(); // Renders the messages.
	        return false;
        }
        
    },
    renderMessage: function(messageId){ // Render a single message. 
        
        var div = document.querySelector("#messageArea"); // Find the #messageArea div-tag.
        
        var div2 = document.createElement("div"); // Create a new div-tag...
        div2.classList.add("messageBread"); // ...and give it hte class .messageBread
        
        // Creates an a-tag with an onclick function for deleting the message.
        var removeLink = document.createElement("a");
        removeLink.setAttribute("href", "#");
        removeLink.classList.add("remove");
        removeLink.innerHTML = "X";
        removeLink.onclick = function(){
            if (window.confirm("Vill du verkligen radera meddelandet?")) { 
                labbyMezzage.removeMessage(messageId);
            }
        }
        div2.appendChild(removeLink);
	    
	    // Creates an a-tag with an onclick function for alerting the exact date of when the message was written. 
	    var alertLink = document.createElement("a");
	    alertLink.setAttribute("href", "#");
	    alertLink.classList.add("alertDate");
	    alertLink.innerHTML = "?";
	    alertLink.onclick = function(){
	        alert(labbyMezzage.messages[messageId].getDate());
	    }
	    div2.appendChild(alertLink);
        
        // Creates a p-tag and injects the message text into it. 
        var messageText = document.createElement("p");
        messageText.innerHTML = labbyMezzage.messages[messageId].getHTMLText();
        div2.appendChild(messageText);
        
        // Creates a p-tag with the class .date and injects the date formatted YYYY-DD-MM.
        var dateP = document.createElement("p");
        dateP.classList.add("date");
        dateP.innerHTML = labbyMezzage.messages[messageId].getSmallDate();
        div2.appendChild(dateP);
	    
	    div.appendChild(div2);
    },
    renderMessages: function(){
        
        document.getElementById("messageArea").innerHTML = ""; // Empties the #messageArea-div.
        
        // Cycles through the messages-array, calling the renderMessage-function on each object. 
        labbyMezzage.messages.forEach(function(value, id){
		    labbyMezzage.renderMessage(id);
		});
		
		// Updates the counter with the length of the messages-array.
		document.querySelector("#counter").innerHTML = "Antal meddelanden: "+labbyMezzage.messages.length;
		document.getElementById("textArea").value = "";
	    
    },
    removeMessage: function(removeID){ // Removes the message.
	    labbyMezzage.messages.splice(removeID, 1);
        labbyMezzage.renderMessages();
    }
};
window.onload = labbyMezzage.init;

    