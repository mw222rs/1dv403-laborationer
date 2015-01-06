"use strict";

define(["Window", "ImageViewerWindow", "Mustache"], function(Window, ImageViewerWindow, Mustache){
    var ImageViewerWindow = function(title){
        this._title = title;
        
        this.getTitle = function(){
            return title;
        };
        
        this.isOpen = false;
        
        this.imgUrl = "pics/picture.png";
    };
    
    ImageViewerWindow.prototype = new Window();
    
    ImageViewerWindow.prototype.getImages = function(){
    
        var that = this;
        
        var thumbWidth = [];
        var template = $("#images-template").html();
        var $windowMain = $(".windowMain");
        
        $.ajax({
            type: "GET",
            url: "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",
            success: function(images){
                var parsed = JSON.parse(images);
                $.each(parsed, function(i, image){
                    var rendered = Mustache.render(template, image);
                    that.windowMain.innerHTML += rendered;
                    thumbWidth.push(image.thumbWidth);
                });
                thumbWidth.sort().reverse();
                $($windowMain).find(".imgBox").width(thumbWidth[0]+4);
                that.windowFooter.removeChild(that.loaderGif);
                that.footerTxt.innerHTML = that.timer("stop");
                
                $($windowMain).find("a").click(function(e){
                    document.body.style.backgroundImage = "url(" + this.firstChild.alt + ")";
                    return false;
                });
            },
            error: function(){
                console.log("error getting JSON.");
            }
        });
    };
    
    return ImageViewerWindow;
});