"use strict";

define(["Mustache", "Window"], function(Mustache, Window){
    
    var pwd = {
        init:function(){
            var div = document.getElementById("hej");
            
            
            var template = document.getElementById("template").innerHTML;
            Mustache.parse(template);
            
            var temp = {
                first: "Mattias",
                last: "Wikström"
            };
            
            div.innerHTML = Mustache.render(template, temp);
            
            console.log(p);
        }
    };
    
    
    window.onload = pwd.init;
});
