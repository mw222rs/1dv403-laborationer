ImageViewerWindow.prototype.getImages = function(){
        
        var that = this;
        
        var xhr = new XMLHttpRequest();
            
        xhr.onreadystatechange = function(){
            
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    
                    var thumbWidth = [];
                    var imgArray = JSON.parse(xhr.responseText);
                    
                    var data = {imgs: []};
                    
                    imgArray.forEach(function(obj){
                        data.imgs.push({fullUrl: obj.URL, thumbUrl: obj.thumbURL});
                        thumbWidth.push(obj.thumbWidth);
                    });
                    
                    console.log(imgArray)
                    
                    $.get("scripts/templates/images.mst", function(template){
                        var rendered = Mustache.render(template, data);
                        that.windowMain.innerHTML = rendered;
                    });
                    
                    that.windowFooter.removeChild(that.loaderGif);
                    
                    that.footerTxt.innerHTML = that.timer("stop");
                    
                }
                else {
                    console.log("Läsfel, status: "+xhr.status);
                }
            }
            
            $(".imgBox").find("backChangeA").click(function(e){
                e.preventDefault();
                
                alert("yo");
                
                return false;
            });
            
        };
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
            
    };