// undefined means a variable has been declared but has not yet been assigned a value.
var a;
console.log(a);
console.log(typeof(a));

var aa = undefined;
console.log(aa);
// console.log(a.toString());



// null is an assignment value. It can be assigned to a variable as a representation of no value.
var b = null;
console.log(b);
console.log(typeof(b));
// console.log(b.toString());


console.log("null === undefined: ", null === undefined);
console.log("null == undefined: ", null == undefined);
console.log("null === null: ", null === null);

console.log(null == "");
console.log("");
console.log(typeof(""));

console.log(null == " ");
console.log(" ");
console.log(typeof(" "));

console.log(null == 0);
console.log(0);
console.log(typeof(0));

console.log(null == false);
console.log(false);
console.log(typeof(false));


// Uncaught TypeError  null is an object
// console.log(null.valueOf());
console.log("".valueOf());
console.log(false.valueOf());
// console.log(undefined.valueOf()); // Uncaught TypeError


// console.log(null = 'value'); // ReferenceError
console.log(undefined = 'value');




var c = [undefined, undefined, undefined];
console.log(c.length);
console.log(Boolean(c));

console.log(Boolean([]));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));


