"use strict";

var memory = {
    rows: 4,
    cols: 4,
    randomedArray: [],
    init:function(){
        memory.randomedArray = RandomGenerator.getPictureArray(memory.rows, memory.cols);
        
        console.log(memory.randomedArray);
    }
};
window.onload = memory.init;

