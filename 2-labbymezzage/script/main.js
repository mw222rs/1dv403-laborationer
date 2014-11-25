"use strict";

var labbyMezzage = {
    
    messages: [],
    
    init: function(){
        
        var myMessage = new Message("Hej min vän", new Date());
        alert(myMessage);
        alert(myMessage.getText());
        myMessage.setText("Farväl");
        alert(myMessage);
        
    }
};

window.onload = labbyMezzage.init;