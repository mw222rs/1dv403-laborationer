var template = document.getElementById("template").innerHTML;
            Mustache.parse(template);
            
            var temp = {
                first: "Mattias",
                last: "Wikström"
            };
            
            div.innerHTML = Mustache.render(template, temp);
            
            console.log(p);