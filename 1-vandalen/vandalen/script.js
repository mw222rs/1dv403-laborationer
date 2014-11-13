"use strict";

var makePerson = function(persArr){
    
    var ages = persArr.map(function(obj){return obj.age;});
    
    var ageSum = ages.reduce(function(a, b){return a + b;});
    
    var nameSum = persArr.map(function(obj){return obj.name;});
    
    nameSum.sort(function(a, b){return a.localeCompare(b, 'sv');});
    
    var result = {
        names : nameSum.join(", "),
        minAge : Math.min.apply(Math, ages),
        maxAge : Math.max.apply(Math, ages),
        averageAge : Math.round(ageSum / persArr.length)
    };
    
    return result;
};
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);