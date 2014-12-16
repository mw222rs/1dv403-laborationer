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
        
        var last = null;
        var timeOutId;
        
        as.forEach(function(a, index){
            a.addEventListener("click", function(e){
                e.preventDefault();
                
                if (!a.firstChild.classList.contains("up") && !a.firstChild.classList.contains("paired")) {
                
                    if (last === null) {
                        last = memory.pictureArray[index];
                        
                        a.firstChild.classList.toggle("up");
                        a.firstChild.classList.toggle("down");
                        a.firstChild.setAttribute("src", 
                            "pics/"+memory.pictureArray[index]+".png");
                    }
                    else {
                        a.firstChild.classList.toggle("up");
                        a.firstChild.classList.toggle("down");
                        a.firstChild.setAttribute("src", 
                            "pics/"+memory.pictureArray[index]+".png");
                            
                        if (memory.pictureArray[index] === last) {
                            last = null;
                            as.forEach(function(a){
                                if (a.firstChild.classList.contains("up")) {
                                    a.firstChild.classList.remove("up");
                                    a.firstChild.classList.add("paired");
                                }
                            });
                            memory.pairedPics += 1;
                            p.innerHTML= "Matcha "+((memory.cols*memory.rows/2)-memory.pairedPics)+" st par till för att vinna!";
                            if (memory.pairedPics === (memory.cols*memory.rows / 2)) {
                                p.innerHTML= "Grattis, du klarade det!";
                                var congrats = document.createElement("img");
                                congrats.setAttribute("src","pics/wow.gif");
                                memoryArea.appendChild(congrats);
                            }
                        }
                        else {
                            last = null;
                            
                            window.setTimeout(function(){
                                as.forEach(function(a){
                                    if (a.firstChild.classList.contains("up")) {
                                        a.firstChild.classList.remove("up");
                                        a.firstChild.classList.toggle("down");
                                            
                                        a.firstChild.setAttribute("src", "pics/0.png");
                                        
                                        last = null;
                                    }
                                });
                                }, 1000);
                        }
                    }
                }
                return false;
            });
        });
    var p = document.createElement("p");
    p.innerHTML= "Matcha "+((memory.cols*memory.rows/2)-memory.pairedPics)+" st par till för att vinna!";
    memoryArea.appendChild(p);
    }
};
window.onload = memory.init;

