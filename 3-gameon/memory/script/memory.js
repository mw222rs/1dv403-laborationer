"use strict";

var memory = {
    rows: 2,
    cols: 4,
    count: 0,
    pairedPics: 0,
    pictureArray: [],
    init:function(){
        NodeList.prototype.forEach = Array.prototype.forEach;
        
        memory.pictureArray = RandomGenerator.getPictureArray(memory.rows, memory.cols);
        
        var memoryArea = document.getElementById("memoryArea");
        var table = document.createElement("table");
        var tableBody = document.createElement("tbody");
        var k = 0;
        
        var h1 = document.createElement("h1");
        h1.innerHTML = "Memory";
        
        memoryArea.appendChild(h1);
        
        
        for (var i = 0; i < memory.rows; i++) {
            var tr = document.createElement("tr");
            
            for (var j = 0; j < memory.cols; j++) {
                
                var td = document.createElement("td");
                var a = document.createElement("a");
                a.setAttribute("href", "#");
                td.appendChild(a);
                
                var img = document.createElement("img");
                img.setAttribute("src", "pics/0.png");
                img.classList.add("down");
                
                a.appendChild(img);
                
                tr.appendChild(td);
                
                k += 1;
            }
            tableBody.appendChild(tr);
        }
        table.appendChild(tableBody);
        memoryArea.appendChild(table);
        
        var as = document.querySelectorAll("a");
        
        var last;
        var timeOutId;
        
        as.forEach(function(a, index){
            a.addEventListener("click", function(e){
                e.preventDefault();
                
                window.clearTimeout(timeOutId);
                
                if (!a.firstChild.classList.contains("up") && !a.firstChild.classList.contains("paired")) {
                
                    window.clearTimeout(timeOutId);
                
                    if (memory.pictureArray[index] === last) {
                        a.firstChild.classList.toggle("up");
                        a.firstChild.setAttribute("src", 
                            "pics/"+memory.pictureArray[index]+".png");
                        
                        as.forEach(function(a){
                            if (a.firstChild.classList.contains("up")) {
                                //a.parentNode.innerHTML = a.firstChild.innerHTML;
                                a.firstChild.classList.remove("up");
                                a.firstChild.classList.add("paired");
                            }
                        });
                        
                        memory.count = 0;
                        
                        last = null;
                        
                        memory.pairedPics += 1;
                        
                        p.innerHTML= "Matcha "+((memory.cols*memory.rows/2)-memory.pairedPics)+" st par till för att vinna!";
                        
                        if (memory.pairedPics === (memory.cols*memory.rows / 2)) {
                            p.innerHTML= "Grattis, du klarade det!";
                        }
                    }
                    
                    else {
                        if (memory.count === 0) {
                            a.firstChild.classList.toggle("up");
                            a.firstChild.classList.toggle("down");
                            a.firstChild.setAttribute("src", 
                                "pics/"+memory.pictureArray[index]+".png");
                            
                            last = memory.pictureArray[index];
                            
                            memory.count += 1;
                        }
                        else if (memory.count === 1) {
                            a.firstChild.classList.toggle("up");
                            a.firstChild.classList.toggle("down");
                            a.firstChild.setAttribute("src", 
                                "pics/"+memory.pictureArray[index]+".png");
                            
                            last = memory.pictureArray[index];
                            memory.count += 1;
                            
                            window.setTimeout(function(){
                                as.forEach(function(a){
                                    if (a.firstChild.classList.contains("up")) {
                                        a.firstChild.classList.remove("up");
                                        a.firstChild.classList.toggle("down");
                                        
                                        a.firstChild.setAttribute("src", "pics/0.png");
                                    }
                                    memory.count = 0;
                                });
                                last = null;
                            }, 1000);
                        }
                    }
                }
                
                console.log(last);
                
                return false;
            });
        });
    var p = document.createElement("p");
    p.innerHTML= "Matcha "+((memory.cols*memory.rows/2)-memory.pairedPics)+" st par till för att vinna!";
    memoryArea.appendChild(p);
    }
};
window.onload = memory.init;

