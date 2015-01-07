"use strict";

define(["Window", "ImageViewerWindow", "Mustache"], function(Window, ImageViewerWindow, Mustache){
    var ImageViewerWindow = function(title){
        this._title = title;        
        
        this.isOpen = false;
        
        this.imgUrl = "pics/picture.png";
    };
    
    ImageViewerWindow.prototype = new Window();
    
    ImageViewerWindow.prototype.getImages = function(){
    
        var that = this;
        
        var thumbWidth = [];
        var template = $("#images-template").html();
        var $windowMain = $(".new").find(".windowMain");
        
        $.ajax({
            type: "GET",
            url: "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",
            success: function(images){
                var data = {images: []};
                var parsed = JSON.parse(images);
                $.each(parsed, function(i, image){
                    data.images.push({URL: image.URL, thumbURL: image.thumbURL});
                    thumbWidth.push(image.thumbWidth);
                });

                var rendered = Mustache.render(template, data);                    
                $($windowMain).html(rendered);


                thumbWidth.sort().reverse();
                $($windowMain).find(".imgBox").width(thumbWidth[0]+4);
                $($windowMain).parent().find(".windowFooter").html("<p>"+that.timer("stop")+"</p>");                

                $($windowMain).find("a").click(function(e){
                    document.body.style.backgroundImage = "url(" + this.firstChild.alt + ")";
                    return false;
                });

                $($windowMain).parent().removeClass("new");
            },
            error: function(){
                console.log("Error getting JSON.");
            }
        });
    };
    
    return ImageViewerWindow;
});