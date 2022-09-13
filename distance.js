'use strict';

let x1 = 2;
let y1 = 4;
let x2 = 4;
let y2 = 6;

let x = x2 - x1;
let y = y2 - y1;

let result = ((x**2) + (y**2));
let remainder = Math.ceil(Math.sqrt(result));
console.log(`The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${remainder}.`);
