"use strict";

function Message(message, date){
    
    this._text = message;
    
    this._date = date;
    
    this.getText = function(){
        return message;
    }
    
    this.setText = function(_text){
        message = _text;
    }
    
    this.getSmallDate = function(){
            return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    }
    
    this.getDate = function(){
            return "Inlägget skapades "+date.toLocaleString();
        
    }
    
    this.setDate = function(_date){
        date = _date;
    }
}


Message.prototype.toString = function(){
    return this.getText()+" ("+this.getDate()+") ";
};

Message.prototype.getHTMLText = function(){
    return this.getText().replace(/(\n)/g, "<br>");
};