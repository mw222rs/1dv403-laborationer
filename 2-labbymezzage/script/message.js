"use strict";

function Message(message, date){
    
    this._text = message;
    
    this._date = date;
    
    this.getText = function(){
        message = message.replace(/(\n)/g, "<br>");
        return message;
    }
    
    this.setText = function(_text){
        message = _text;
    }
    
    this.getDate = function(form){
        if (form === "simple") {
            return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        }
        else {
            return date;
        }
        
    }
    
    this.setDate = function(_date){
        date = _date;
    }
}


Message.prototype.toString = function(){
    return this.getText()+" ("+this.getDate()+") ";
};

Message.prototype.getHTMLText = function(){
    return "<p>"+this.getText()+"<p class=\"date\">"+this.getDate("simple")+"</p>"+"</p>"
};