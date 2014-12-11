"use strict";

var memory = {
    rows: 4,
    cols: 4,
    count: 0,
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
                
                if (memory.pictureArray[index] === last && those !== this) {
                    console.log("Samma.")
                    
                }
                else {
                
                    if (memory.count < 2) {
                        
                        a.firstChild.classList.toggle("up");
                        a.firstChild.setAttribute("src", "pics/"+memory.pictureArray[index]+".png");
                        
                        last = memory.pictureArray[index];
                        var those = this;
                        
                        memory.count += 1;
                    }
                    
                    if (memory.count === 2) {
                        window.setTimeout(function(){
                            as.forEach(function(a){
                                if (a.firstChild.classList.contains("up")) {
                                    a.firstChild.classList.remove("up");
                                }
                                a.firstChild.setAttribute("src", "pics/0.png");
                                memory.count = 0;
                            });
                        }, 1000);
                        last = null;
                    }
                }
                
                console.log(last);
                
                return false;
            });
        });
    }
};
window.onload = memory.init;

