'use strict'

var c = [2, 3, [5, 6, [7, 8], 9]];
let count = 1;

const nestArray = function(arr)
{
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]))
        {
            count++;
            nestArray(arr[i]);
        }
    }
}
nestArray(c);

console.log(Math.max(...c.flat(count)));