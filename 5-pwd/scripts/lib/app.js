"use strict";

define(["Window", "ImageViewerWindow", "jQuery"], function(Window, ImageViewerWindow, jQuery){
    var pwd = {
        init:function(){
            
            var footerDiv = document.getElementById("footer");
            var a = document.createElement("a");
            var iconImg = document.createElement("img");
            var page = document.getElementById("page");
            a.setAttribute("src","#");
            iconImg.setAttribute("src", "pics/picture.png");
            a.appendChild(iconImg);
            footerDiv.appendChild(a);
            
            var imageViewerWindow = new ImageViewerWindow("Image Viewer");
            
            $(a).click(function(){
                
                imageViewerWindow.clickFunction();
                
            });
            
        }
    };
    window.onload = pwd.init;
    
});
