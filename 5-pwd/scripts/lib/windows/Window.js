"use strict";

define("Window", function(){
    var Window = function(title){
        this._title = title;
        
        this._startTime;
        
        this.getTitle = function(){
            return title;
        }
        
        this.isOpen = false;
        
        var windowWrap;
        var windowMain;
        var windowFooter;
        var footerTxt;
        var loaderGif;
            
    };
    
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
            throw "Vänligen skicka endas start eller stop till denna funktion.";
        }
    };
    
    Window.prototype.openWindow = function(){
        this.isOpen = true;
        $(this.windowWrap).slideToggle(100);
    };
    Window.prototype.closeWindow = function(){
        this.isOpen = false;
        $(this.windowWrap).slideToggle(100);
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
        
        var that = this;
        
        var page = document.getElementById("page");
        this.windowWrap = document.createElement("div");
        var windowHeadDiv = document.createElement("div");
        var backReturnerA = document.createElement("a");
        var iconImg = document.createElement("img");
        var windowTitle = document.createElement("h2");
        var closerA = document.createElement("a");
        var closerImg = document.createElement("img");
        
        this.windowMain = document.createElement("div");
        this.windowFooter = document.createElement("div");
        this.loaderGif = document.createElement("img");
        this.footerTxt = document.createElement("p");
        
        $(this.windowWrap).hide();
    
        this.windowWrap.classList.add("windowWrap");
        
        windowHeadDiv.classList.add("windowHeadDiv");
        
        iconImg.setAttribute("src", this.imgUrl);
        iconImg.classList.add("headIcon");
        
        backReturnerA.setAttribute("src","#");
        backReturnerA.appendChild(iconImg);
        
        $(backReturnerA).click(function(e){
            e.preventDefault();
            
            document.body.style.backgroundImage = "url(" + "css/purty_wood.png" + ")";
            
            return false;
        });
        
        windowHeadDiv.appendChild(backReturnerA);
        
        closerA.setAttribute("src", "#");
        closerImg.setAttribute("src","pics/delete.png");
        closerImg.classList.add("closer");
        closerA.appendChild(closerImg);
        
        $(closerA).click(function(e){
            e.preventDefault();
            
            that.closeWindow();
            
            return false;
        });
        
        windowHeadDiv.appendChild(closerA);
        
        windowTitle.innerHTML = this.getTitle();
        windowHeadDiv.appendChild(windowTitle);
        
        this.windowWrap.appendChild(windowHeadDiv);
        this.windowMain.classList.add("windowMain");
        
        this.windowWrap.appendChild(this.windowMain);
        this.windowFooter.classList.add("windowFooter");
        
        this.loaderGif.setAttribute("src","pics/ajax-loader.gif");
        this.windowFooter.appendChild(this.loaderGif);
        
        this.footerTxt.innerHTML = "Laddar...";
        this.windowFooter.appendChild(this.footerTxt);
        
        this.windowWrap.appendChild(this.windowFooter);
        page.appendChild(this.windowWrap);
        
    };
    
    return Window;
    
});


