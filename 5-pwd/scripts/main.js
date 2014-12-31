"use strict";
var pwd = {
    timerStart:null,
    timerEnd:null,
    init:function(){
        var footerDiv = document.getElementById("footer");
        
        var a = document.createElement("a");
        a.setAttribute("src","#");
        
        var iconImg = document.createElement("img");
        iconImg.setAttribute("src", "pics/picture.png");
        
        a.appendChild(iconImg);
        
        footerDiv.appendChild(a);
        
        a.addEventListener("click", function(e){
            e.preventDefault();
            var page = document.getElementById("page");
            
            if (page.innerHTML === "") {
             
             pwd.renderWindow();
             
             pwd.timerStart = new Date().getTime();
                
            }
            return false;
        });
        
        
    },
    renderWindow:function(){
        
        var page = document.getElementById("page");
        var windowWrap = document.createElement("div");
        var windowHeadDiv = document.createElement("div");
        var backReturnerA = document.createElement("a");
        var iconImg = document.createElement("img");
        var windowTitle = document.createElement("p");
        var closerA = document.createElement("a");
        var closerImg = document.createElement("img");
        var windowMain = document.createElement("div");
        var windowFooter = document.createElement("div");
        var loaderGif = document.createElement("img");
        var footerTxt = document.createElement("p");

        windowWrap.classList.add("windowWrap");
        
        windowHeadDiv.classList.add("windowHeadDiv");
        
        iconImg.setAttribute("src", "pics/picture.png");
        iconImg.classList.add("headIcon");
        
        backReturnerA.setAttribute("src","#");
        backReturnerA.appendChild(iconImg)
        
        backReturnerA.addEventListener("click", function(e){
            e.preventDefault();
            
            document.body.style.backgroundImage = "url(" + "css/purty_wood.png" + ")";
            
            return false;
        });
        
        windowHeadDiv.appendChild(backReturnerA);
        
        windowTitle.innerHTML = "Image Viewer";
        windowHeadDiv.appendChild(windowTitle);
        
        closerA.setAttribute("src", "#");
        
        closerImg.setAttribute("src","pics/delete.png");
        closerImg.classList.add("closer");
        
        closerA.appendChild(closerImg);
        
        closerA.addEventListener("click", function(e){
            e.preventDefault();
            
            page.innerHTML = "";
            
            return false;
        });
        windowHeadDiv.appendChild(closerA);
        windowWrap.appendChild(windowHeadDiv);
        
        windowMain.classList.add("windowMain");
        
        windowWrap.appendChild(windowMain);
        
        windowFooter.classList.add("windowFooter");
        
        loaderGif.setAttribute("src","pics/ajax-loader.gif");
        
        windowFooter.appendChild(loaderGif);
        
        footerTxt.innerHTML = "Laddar...";
        
        windowFooter.appendChild(footerTxt);
        
        windowWrap.appendChild(windowFooter);
        
        page.appendChild(windowWrap);
        
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    
                    var imgArray = JSON.parse(xhr.responseText);
                    
                    imgArray.forEach(function(obj){
                        var img = document.createElement("img");
                        var a = document.createElement("a");
                        img.setAttribute("src",obj.thumbURL);
                        
                        a.setAttribute("src","#");
                        
                        a.appendChild(img);
                        
                        a.addEventListener("click", function(e){
                            e.preventDefault();
                            
                            document.body.style.backgroundImage = "url(" + obj.URL + ")";
                            
                            console.log(obj.URL);
                            
                            return false;
                        });
                        
                        windowMain.appendChild(a);
                    });
                    windowFooter.removeChild(loaderGif);
                    //loaderGif.setAttribute("src","pics/done.png");
                    
                    pwd.timerEnd = new Date().getTime();
                    
                    
                    
                    footerTxt.innerHTML = "Laddades på "+((pwd.timerEnd - pwd.timerStart)/1000)+" sekunder.";
                    
                }
                else {
                    console.log("Läsfel, status: "+xhr.status);
                }
            }
        };
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
    }
};
window.onload = pwd.init;