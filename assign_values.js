var a = b = 2;
console.log("a: ", a , " b: ", b);

var c = 2;
var d = c = 3;
console.log("c: ", c, " d: ", d);

var e = 10, ee = 20;
var f = e == 10;
console.log("f: ", f);
f = 100;
console.log("f: ", f);

var ff = e == 10 && ee == 10;
console.log("ff: ", ff);