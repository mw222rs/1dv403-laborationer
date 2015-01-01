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

Window.prototype.timerStart = function(){
    this._startTime = new Date().getTime();
    
};
Window.prototype.timerStop = function(){
    var stopTime = new Date().getTime();
    return (stopTime - this._startTime) / 1000;
};

Window.prototype.openWindow = function(){
    this.isOpen = true;
    $(this.windowWrap).fadeToggle();
};
Window.prototype.closeWindow = function(){
    this.isOpen = false;
    $(this.windowWrap).fadeToggle();
};

Window.prototype.renderWindow = function(){
    this.timerStart();
    
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
    
    windowTitle.innerHTML = this.getTitle();
    windowHeadDiv.appendChild(windowTitle);
    
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
    
    var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    
                    var thumbWidth = [];
                    var imgArray = JSON.parse(xhr.responseText);
                    var imgBox;
                    var img;
                    var a;
                    
                    imgArray.forEach(function(obj){
                        imgBox = document.createElement("div");
                        img = document.createElement("img");
                        a = document.createElement("a");
                        
                        imgBox.classList.add("imgBox");
                        img.setAttribute("src",obj.thumbURL);
                        a.setAttribute("src","#");
                        
                        
                        a.appendChild(img);
                        
                        $(a).click(function(e){
                            e.preventDefault();
                            
                            document.body.style.backgroundImage = "url(" + obj.URL + ")";
                            
                            return false;
                        });
                        
                        imgBox.appendChild(a);
                        
                        that.windowMain.appendChild(imgBox);
                        
                        thumbWidth.push(obj.thumbWidth);
                    });
                    
                    thumbWidth.sort().reverse();
                    
                    $(that.windowMain).find("div").width(thumbWidth[0]+4);
                    
                    that.windowFooter.removeChild(that.loaderGif);
                    
                    that.footerTxt.innerHTML = "Laddades på "+that.timerStop();" sekunder.";
                    
                }
                else {
                    console.log("Läsfel, status: "+xhr.status);
                }
            }
        };
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
};
