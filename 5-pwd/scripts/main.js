"use strict";
var pwd = {
    timerStart:null,
    timerEnd:null,
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
        
        $(a).click(function(e){
            e.preventDefault();
            
            if (imageViewerWindow.isOpen === false) {
                
                imageViewerWindow.renderWindow();
                imageViewerWindow.openWindow();
                
                imageViewerWindow.getImages();
                
            }
            else if (imageViewerWindow.isOpen === true) {
                //imageViewerWindow.openWindow();
            }
            else {
                imageViewerWindow.openWindow();
            }
            return false;
        });
        
    }
};
window.onload = pwd.init;