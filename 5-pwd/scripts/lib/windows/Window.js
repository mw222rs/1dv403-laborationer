"use strict";

define(["Window", "Mustache"], function(Window, Mustache){
    var Window = function(){};
    
    Window.prototype.getTitle = function(){return this._title};

    Window.prototype.timer = function(input){
        if (input === "start") {
            this._startTime = new Date().getTime();
        }
        else if (input === "stop") {
            var stopTime = new Date().getTime();
            
            var timedTime = (stopTime - this._startTime);
            
            if (timedTime < 1000) {
                return "Laddades på "+timedTime+" ms.";
            }
            else {
                return "Laddades på "+(timedTime / 1000)+" sekunder.";
            }
        }
        else {
            throw "Vänligen skicka endast start eller stop till denna funktion.";
        }
    };
    
    Window.prototype.openWindow = function(){
        this.isOpen = true;
        $("#page").find("div.new").fadeIn(200, function(){
            $(this).removeAttr('style');
        });
    };
    Window.prototype.closeWindow = function(clicked){
        this.isOpen = false;
        $(clicked).closest(".windowWrap").fadeOut(200, function(){
            $(clicked).closest(".windowWrap").remove();
        });
        
    };
    
    Window.prototype.clickFunction = function(){
        if (this.isOpen === false) {
                    this.renderWindow();
                    this.openWindow();
                    this.getImages();
        }
        else if (this.isOpen === true) {
            //imageViewerWindow.openWindow();
        }
        else {
            this.openWindow();
        }
        return false;
    };
    
    Window.prototype.renderWindow = function(){
        this.timer("start");

        var self = this;
        
        var template = $("#window-template").html();

        var data = {
            "title": this.getTitle(),
            "imgSrc": this.imgUrl
        };

        var rendered = Mustache.render(template, data);
        $("#page").html(rendered);        


        $(".headIcon").click(function(e){
            e.preventDefault();            
            document.body.style.backgroundImage = "url(" + "css/purty_wood.png" + ")";            
            return false;
        });

        $(".closer").click(function(e){
            e.preventDefault();            
            var clicked = this;
            self.closeWindow(clicked);            
            return false;
        });

        $("#page").find(".new").hide();
        
        
    };
    
    return Window;
    
});


