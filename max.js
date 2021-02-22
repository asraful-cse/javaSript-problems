//15:4:: find max of two value and max of three value..
//max hosee sorboccho value take ber kora formula::

var businessMan = 400;
var ministerMan = 300;
var sochibMan = 500;
var max =  Math.max(businessMan,ministerMan,sochibMan);
// console.log(max);


var arr = [1,2,3,5,6,7,9];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max);

// noted:::same formulai  Math.min diye sob chaite kom value ta ber kora jai...



// noted:: ditails janar jonno MDN dekhte hobe..
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max