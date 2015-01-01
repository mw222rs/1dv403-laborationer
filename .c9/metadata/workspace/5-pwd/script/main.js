{"filter":false,"title":"main.js","tooltip":"/5-pwd/script/main.js","undoManager":{"mark":53,"position":53,"stack":[[{"group":"doc","deltas":[{"start":{"row":176,"column":16},"end":{"row":176,"column":20},"action":"remove","lines":["quiz"]},{"start":{"row":176,"column":16},"end":{"row":176,"column":17},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":176,"column":17},"end":{"row":176,"column":18},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":176,"column":18},"end":{"row":176,"column":19},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":4},"end":{"row":2,"column":8},"action":"remove","lines":["quiz"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":4},"end":{"row":173,"column":5},"action":"remove","lines":["nextUrl:null,","    stats: [],","    init:function(){","        var div = document.getElementById(\"page\");","        div.innerHTML = \"\";","        ","        var input = document.createElement(\"input\");","        input.setAttribute(\"type\", \"text\");","        ","        var submit = document.createElement(\"input\");","        submit.setAttribute(\"type\", \"submit\");","        ","        var h2 = document.createElement(\"h2\");","        h2.innerHTML = \"Fråga \"+(quiz.stats.length+1);","        div.appendChild(h2);","        ","        var questionP = document.createElement(\"p\");","        questionP.innerHTML = \"Laddar...\";","        div.appendChild(questionP);","        ","        var p = document.createElement(\"p\");","        var tries = 0;","        ","        var xhr = new XMLHttpRequest();","    ","        xhr.onreadystatechange = function(){","            ","            if (xhr.readyState === 4) {","                if (xhr.status == 200) {","                    ","                    var question = JSON.parse(xhr.responseText);","","                    questionP.innerHTML = question.question;","                    ","                    quiz.nextUrl = question.nextURL;","                    ","                    submit.setAttribute(\"value\", \"skicka svar\");","                    ","                    div.appendChild(input);","                    div.appendChild(submit);","                    div.appendChild(p);","                    ","                    input.focus();","                    ","                    submit.onclick = function(e){","                        e.preventDefault();","                        ","                        clickFunction();","                        ","                        return false;","                        ","                    };","                    input.onkeypress = function(e){","                \t    var key = e.keyCode;","                \t    ","                \t    if (key === 13) {","                \t        e.preventDefault();","                \t        clickFunction();","                \t    }","                \t};","                }","                else if (xhr.status === 404){","                    quiz.finish();","                }","                else {","                    console.log(\"Läsfel, status: \"+xhr.status);","                }","            }","        };","        xhr.open(\"GET\", ((quiz.nextUrl === null)?\"http://vhost3.lnu.se:20080/question/1\":quiz.nextUrl), true);","        xhr.send(null);","        ","        var clickFunction = function(){","            tries += 1;","                        ","            var answer = { answer: input.value };","            ","            var xhr = new XMLHttpRequest();","            ","            xhr.onreadystatechange = function(){","              ","              if (xhr.readyState === 4) {","                  if (xhr.status === 200) {","                     ","                     var question = JSON.parse(xhr.responseText);","                     ","                     quiz.nextUrl = question.nextURL;","                     ","                     div.removeChild(input);","                     div.removeChild(submit);","                      ","                     ","                     p.innerHTML = input.value+\" är RÄTT!! Du klarade det efter \"+tries+\" försök!\";","                     ","                     var a = document.createElement(\"a\");","                     a.setAttribute(\"href\",\"#\");","                     a.classList.add(\"right\");","                     a.innerHTML = \"Nästa fråga\";","                     div.appendChild(a);","                     ","                     a.focus();","                     ","                     a.onclick = function(){","                       quiz.init();","                       return false;","                     };","                     ","                     quiz.stats.push(tries);","                     ","                  }","                  else if (xhr.status === 400) {","                      ","                     p.innerHTML = \"Fel svar, försök igen!\";","                     input.value = \"\";","                  }","                  else {","                      console.log(\"Läsfel, status: \"+xhr.status);","                  }","              }","                ","            };","            ","            xhr.open(\"POST\", quiz.nextUrl, true);","            xhr.setRequestHeader(\"Content-Type\", \"application/json\");","","            xhr.send(JSON.stringify(answer));","        }","    },","    finish:function(){","        ","        var div = document.getElementById(\"page\");","        ","        div.innerHTML = \"\";","        ","        var p = document.createElement(\"p\");","        ","        var h2 = document.createElement(\"h2\");","        ","        h2.innerHTML = \"Grattis, du klarade av quizet! </br>\";","        ","        div.appendChild(h2);","        ","        var ul = document.createElement(\"ul\");","        ","        ","        ","        quiz.stats.forEach(function(value, index){","            var li = document.createElement(\"li\");","            li.innerHTML = \"Du svarade rätt på fråga \"+(index+1)+\" efter \"+value+\" försök.\";","            ","            ul.appendChild(li);","        });","        ","        div.appendChild(ul);","        ","        var a = document.createElement(\"a\");","        a.setAttribute(\"href\",\"#\");","        a.classList.remove(\"right\");","        a.innerHTML = \"Prova en gång till!\";","        div.appendChild(a);","         ","        a.onclick = function(){","            quiz.nextUrl = null;","            quiz.tries = null;","            quiz.stats = [];","            ","            quiz.init();","            ","            return false;","        };","    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":19},"end":{"row":3,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":22},"end":{"row":5,"column":5},"action":"insert","lines":["","        ","    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":13},"end":{"row":4,"column":15},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":14},"end":{"row":4,"column":16},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["ö"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"remove","lines":["ö"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"remove","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":[";"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":25},"end":{"row":4,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1419325742214,"hash":"bc5b7f5208b5e951be14247beec821273a54c259"}