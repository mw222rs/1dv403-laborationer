{"changed":true,"filter":false,"title":"script.js","tooltip":"/1-vandalen/guess/script.js","value":"\"use strict\";\n\nwindow.onload = function(){\n\t\n\tvar secret = Math.floor( Math.random() * (100-1)+1) + 1; Math.floor( Math.random() * 100)+1;\n\t\n\tvar count = 0;\n\t\n\t// I denna funktion ska du skriva koden för att hantera \"spelet\"\n\tvar guess = function(number){\n\t\tconsole.log(\"Det hemliga talet: \" + secret); // Du når den yttre variabeln secret innifrån funktionen.\n\t\tconsole.log(\"Du gissade: \" + number); // Detta nummer är det som användaren gissade på.\n\t\t\n\t\tif (typeof +number === 'number') {\n\t\t\n\t\t\n\t\t\tif (number < 1 || number > 100) {\n\t\t\t\tcount += 1;\n\t\t\t\treturn [false, \"Talet är utanför intervallet 0 - 100\"];\n\t\t\t}\n\t\t\telse if (+number === +secret) {\n\t\t\t\treturn [true, \"Grattis du vann! Det hemliga talet var \" + number + \" och du behövde \" + count + \" gissningar för att hitta det.\"];\n\t\t\t}\n\t\t\telse if (number < secret) {\n\t\t\t\tcount += 1;\n\t\t\t\treturn [false, \"Det hemliga talet är högre!\"];\n\t\t\t}\n\t\t\telse {\n\t\t\t\tcount += 1;\n\t\t\t\treturn [false, \"Det hemliga talet är lägre!\"];\n\t\t\t}\n\t\t\t\n\t\t}\n\t\telse {\n\t\t\treturn [false, \"Nej nej nej!\"]\n\t\t}\n\t\t\n\t\t\n\t\t\t\n\n\n\t\t// Returnera exempelvis: \n\t\t// [true, \"Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det.\"]\n\t\t// [false, \"Det hemliga talet är högre!\"]\n\t\t// [false, \"Det hemliga talet är lägre!\"]\n\t\t// [false, \"Talet är utanför intervallet 0 - 100\"]\t\t\n\t};\n\t\n\t// ------------------------------------------------------------------------------\n\n\n\n\t// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra\n\tvar p = document.querySelector(\"#value\"); // Referens till DOM-noden med id=\"#value\"\n\tvar input = document.querySelector(\"#number\");\n\tvar submit = document.querySelector(\"#send\");\n\n\t// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.\n\tsubmit.addEventListener(\"click\", function(e){\n\t\te.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.\n\n\t\tvar answer = guess(input.value); // Läser in talet från textrutan och skickar till funktionen \"guess\"\n\t\tp.innerHTML = answer[1];\t\t// Skriver ut texten från arrayen som skapats i funktionen.\t\n\n\t\tif(answer[0] === true){\t\t\t\t// Om spelet är slut, avaktivera knappen.\n\t\t\tsubmit.disabled = true;\n\t\t}\n\t\n\t});\n};","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":32},"end":{"row":13,"column":42}},"text":") !== true"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":19},"end":{"row":13,"column":20}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":19},"end":{"row":13,"column":20}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":19},"end":{"row":13,"column":20}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":21},"end":{"row":13,"column":22}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":6},"end":{"row":13,"column":7}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":20},"end":{"row":13,"column":21}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":64},"end":{"row":14,"column":65}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":7},"end":{"row":13,"column":13}},"text":"number"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":7},"end":{"row":13,"column":8}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":13},"end":{"row":13,"column":14}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":14},"end":{"row":13,"column":15}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":15},"end":{"row":13,"column":16}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":16},"end":{"row":13,"column":17}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":17},"end":{"row":13,"column":18}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":18},"end":{"row":13,"column":19}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":19},"end":{"row":13,"column":20}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":22},"end":{"row":13,"column":23}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":22},"end":{"row":13,"column":23}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":20},"end":{"row":13,"column":21}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":6},"end":{"row":13,"column":7}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":2},"end":{"row":15,"column":3}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":3},"end":{"row":32,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":32,"column":0},"end":{"row":32,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":2},"end":{"row":32,"column":3}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":32,"column":2},"end":{"row":32,"column":3}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":2}},"text":"\t\t"},{"action":"removeLines","range":{"start":{"row":14,"column":0},"end":{"row":16,"column":0}},"nl":"\n","lines":["\t\t\treturn [false, \"Det inmatade är int ett nummer för bövelen!\"];","\t\t"]},{"action":"removeText","range":{"start":{"row":13,"column":2},"end":{"row":13,"column":35}},"text":"if (typeof number === \"number\") {"},{"action":"removeText","range":{"start":{"row":13,"column":2},"end":{"row":14,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":2}},"text":"\t\t"},{"action":"removeText","range":{"start":{"row":12,"column":2},"end":{"row":13,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":2},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":2},"end":{"row":14,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":2},"end":{"row":13,"column":3}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":3},"end":{"row":13,"column":4}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":2},"end":{"row":13,"column":4}},"text":"if"},{"action":"insertText","range":{"start":{"row":13,"column":2},"end":{"row":13,"column":13}},"text":"if (true) {"},{"action":"insertText","range":{"start":{"row":13,"column":13},"end":{"row":14,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":14,"column":0},"end":{"row":15,"column":0}},"lines":["\t\t\t"]},{"action":"insertText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":3}},"text":"\t\t}"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":6},"end":{"row":13,"column":10}},"text":"true"},{"action":"insertText","range":{"start":{"row":13,"column":6},"end":{"row":13,"column":7}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":7},"end":{"row":13,"column":8}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":8},"end":{"row":13,"column":9}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":9},"end":{"row":13,"column":10}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":10},"end":{"row":13,"column":11}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":11},"end":{"row":13,"column":12}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":12},"end":{"row":13,"column":13}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":13},"end":{"row":13,"column":14}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":14},"end":{"row":13,"column":15}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":15},"end":{"row":13,"column":16}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":16},"end":{"row":13,"column":17}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":17},"end":{"row":13,"column":18}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":18},"end":{"row":13,"column":19}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":19},"end":{"row":13,"column":20}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":20},"end":{"row":13,"column":21}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":21},"end":{"row":13,"column":22}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":22},"end":{"row":13,"column":23}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":23},"end":{"row":13,"column":25}},"text":"''"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":24},"end":{"row":13,"column":25}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":25},"end":{"row":13,"column":26}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":26},"end":{"row":13,"column":27}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":27},"end":{"row":13,"column":28}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":28},"end":{"row":13,"column":29}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":29},"end":{"row":13,"column":30}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":22,"column":0},"end":{"row":22,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":27,"column":0},"end":{"row":27,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":28,"column":0},"end":{"row":28,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":29,"column":0},"end":{"row":29,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":30,"column":0},"end":{"row":30,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":2},"end":{"row":15,"column":3}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":3}},"text":"\t\t\t"},{"action":"removeText","range":{"start":{"row":13,"column":34},"end":{"row":14,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":30,"column":4},"end":{"row":31,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":3},"end":{"row":32,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":32,"column":0},"end":{"row":32,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":32,"column":2},"end":{"row":32,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":2},"end":{"row":32,"column":3}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":3},"end":{"row":33,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":2},"end":{"row":33,"column":3}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":3},"end":{"row":33,"column":4}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":4},"end":{"row":33,"column":5}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":5},"end":{"row":33,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":6},"end":{"row":33,"column":7}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":7},"end":{"row":33,"column":8}},"text":"{"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":8},"end":{"row":34,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":34,"column":0},"end":{"row":35,"column":0}},"lines":["\t\t\t"]},{"action":"insertText","range":{"start":{"row":35,"column":0},"end":{"row":35,"column":3}},"text":"\t\t}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":3},"end":{"row":34,"column":4}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":4},"end":{"row":34,"column":5}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":5},"end":{"row":34,"column":6}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":6},"end":{"row":34,"column":7}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":7},"end":{"row":34,"column":8}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":8},"end":{"row":34,"column":9}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":9},"end":{"row":34,"column":10}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":10},"end":{"row":34,"column":12}},"text":"[]"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":11},"end":{"row":34,"column":12}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":12},"end":{"row":34,"column":13}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":13},"end":{"row":34,"column":14}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":14},"end":{"row":34,"column":15}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":15},"end":{"row":34,"column":16}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":16},"end":{"row":34,"column":17}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":17},"end":{"row":34,"column":18}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":18},"end":{"row":34,"column":20}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":19},"end":{"row":34,"column":20}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":20},"end":{"row":34,"column":21}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":21},"end":{"row":34,"column":22}},"text":"j"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":22},"end":{"row":34,"column":23}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":23},"end":{"row":34,"column":24}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":24},"end":{"row":34,"column":25}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":25},"end":{"row":34,"column":26}},"text":"j"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":26},"end":{"row":34,"column":27}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":27},"end":{"row":34,"column":28}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":28},"end":{"row":34,"column":29}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":29},"end":{"row":34,"column":30}},"text":"j"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":30},"end":{"row":34,"column":31}},"text":"!"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":13},"end":{"row":13,"column":14}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":21},"end":{"row":13,"column":22}},"text":"="}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":22},"end":{"row":13,"column":22},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415280515205}