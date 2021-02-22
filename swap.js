  //15:2.. swap variable, swap with out temp , destructing::::
// swap mane hosse odol bodol kora .. a = b , b=a ... a er man b te ar b er man a te neoya..

  var a = 5;
  var b = 7;
  //console.log("before swap: a =", a, "b =" , b);


  var temp = a;
  a = b;
  b = temp;
  //console.log("after swap: a =", a, "b =", b);


//second process same coding :::
  var x = 5;
  var y = 7;
  //console.log("before swap: x =", x, "y =" , y);
  x = x + y;
  y = x - y;
  x = x - y;
  //console.log("before swap: x =", x, "y =" , y);



//3rd process same coding by javascript formula:::
var p = 5;
var q = 7;
console.log("before swap: p =", p, "q =" , q);
[p, q] = [q, p];
console.log("after swap:  p =", p, "q =" , q);


//output :: sobgolar same:::
// before swap: p = 5 q = 7
// after swap:  p = 7 q = 5