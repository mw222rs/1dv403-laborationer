"use strict";

define(["Mustache", "Window"], function(Mustache, Window){
    
    var pwd = {
        init:function(){
            var footerDiv = document.getElementById("footer");
            
            var a = document.createElement("a");
            a.setAttribute("src","#");
            
            
            var iconTemplate = document.getElementById("iconTemplate").innerHTML;
            Mustache.parse(iconTemplate);
            var img = {
                imgSrc: "pics/picture.png",
                imgWidth: 50
            };
            a.innerHTML = Mustache.render(iconTemplate, img);
            
            footerDiv.appendChild(a);
            
            a.addEventListener("click", function(e){
                e.preventDefault();
                
                pwd.createWindow();
                
                return false;
            });
            
            
        },
        createWindow:function(){
            
            var page = document.getElementById("page");
            
            var windowWrap = document.createElement("div");
            windowWrap.classList.add("windowWrap");
            
            var windowHeadDiv = document.createElement("div");
            windowHeadDiv.classList.add("windowHeadDiv");
            
            
            windowWrap.appendChild(windowHeadDiv);
            page.appendChild(windowWrap)
        }
    };
    window.onload = pwd.init;
});
