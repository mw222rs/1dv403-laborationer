"use strict";

define(["Window", "ImageViewerWindow"], function(Window, ImageViewerWindow){
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
                        
                        $(".windowMain").find(".imgBox").width(thumbWidth[0]+4);
                        
                        that.windowFooter.removeChild(that.loaderGif);
                        
                        that.footerTxt.innerHTML = that.timer("stop");
                        
                    }
                    else {
                        console.log("Läsfel, status: "+xhr.status);
                    }
                }
            };
            xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
            xhr.send(null);
    };
    
    return ImageViewerWindow;
});