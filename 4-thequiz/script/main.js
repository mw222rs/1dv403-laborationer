"use strict";

var quiz = {
    nextUrl:null,
    stats: [],
    init:function(){
        var div = document.getElementById("page");
        div.innerHTML = "";
        
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        
        var submit = document.createElement("input");
        submit.setAttribute("type", "submit");
        
        var h2 = document.createElement("h2");
        h2.innerHTML = "Fråga "+(quiz.stats.length+1);
        div.appendChild(h2);
        
        var questionP = document.createElement("p");
        questionP.innerHTML = "Laddar...";
        div.appendChild(questionP);
        
        var p = document.createElement("p");
        var tries = 0;
        
        var xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function(){
            
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    
                    var question = JSON.parse(xhr.responseText);

                    questionP.innerHTML = question.question;
                    
                    quiz.nextUrl = question.nextURL;
                    
                    submit.setAttribute("value", "skicka svar");
                    
                    div.appendChild(input);
                    div.appendChild(submit);
                    div.appendChild(p);
                    
                    input.focus();
                    
                    submit.onclick = function(e){
                        e.preventDefault();
                        
                        clickFunction();
                        
                        return false;
                        
                    };
                    input.onkeypress = function(e){
                	    var key = e.keyCode;
                	    
                	    if (key === 13) {
                	        e.preventDefault();
                	        clickFunction();
                	    }
                	};
                }
                else if (xhr.status === 404){
                    quiz.finish();
                }
                else {
                    console.log("Läsfel, status: "+xhr.status);
                }
            }
        };
        xhr.open("GET", ((quiz.nextUrl === null)?"http://vhost3.lnu.se:20080/question/1":quiz.nextUrl), true);
        xhr.send(null);
        
        var clickFunction = function(){
            tries += 1;
                        
            var answer = { answer: input.value };
            
            var xhr = new XMLHttpRequest();
            
            xhr.onreadystatechange = function(){
              
              if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                     
                     var question = JSON.parse(xhr.responseText);
                     
                     quiz.nextUrl = question.nextURL;
                     
                     div.removeChild(input);
                     div.removeChild(submit);
                      
                     
                     p.innerHTML = input.value+" är RÄTT!! Du klarade det efter "+tries+" försök!";
                     
                     var a = document.createElement("a");
                     a.setAttribute("href","#");
                     a.classList.add("right");
                     a.innerHTML = "Nästa fråga";
                     div.appendChild(a);
                     
                     a.focus();
                     
                     a.onclick = function(){
                       quiz.init();
                       return false;
                     };
                     
                     quiz.stats.push(tries);
                     
                  }
                  else if (xhr.status === 400) {
                      
                     p.innerHTML = "Fel svar, försök igen!";
                     input.value = "";
                  }
                  else {
                      console.log("Läsfel, status: "+xhr.status);
                  }
              }
                
            };
            
            xhr.open("POST", quiz.nextUrl, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(JSON.stringify(answer));
        }
    },
    finish:function(){
        
        var div = document.getElementById("page");
        
        div.innerHTML = "";
        
        var p = document.createElement("p");
        
        var h2 = document.createElement("h2");
        
        h2.innerHTML = "Grattis, du klarade av quizet! </br>";
        
        div.appendChild(h2);
        
        var ul = document.createElement("ul");
        
        
        
        quiz.stats.forEach(function(value, index){
            var li = document.createElement("li");
            li.innerHTML = "Du svarade rätt på fråga "+(index+1)+" efter "+value+" försök.";
            
            ul.appendChild(li);
        });
        
        div.appendChild(ul);
        
        var a = document.createElement("a");
        a.setAttribute("href","#");
        a.classList.remove("right");
        a.innerHTML = "Prova en gång till!";
        div.appendChild(a);
         
        a.onclick = function(){
            quiz.nextUrl = null;
            quiz.tries = null;
            quiz.stats = [];
            
            quiz.init();
            
            return false;
        };
    }
};

window.onload = quiz.init;