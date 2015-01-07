"use strict";

define(["Window", "ImageViewerWindow", "Mustache", "jquery"], function(Window, ImageViewerWindow, Mustache, jquery){
    var pwd = {
        init:function(){
            
            var $footerDiv = $("#footer");
            
            var imageViewerWindow = new ImageViewerWindow("Image Viewer");

            $($footerDiv).find("a").click(function(){
                
                imageViewerWindow.clickFunction();
                
            });
            
        }
    };

    window.onload = pwd.init();
    
});
