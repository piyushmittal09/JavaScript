///////// Primitive Data Types //////

let booly = true
let number = 1
let string = "any sentence"
let bigInt = 999999999999999
let state = null
let sym = Symbol(123)
let undefined;

// console.log(boolean, number, string, bigInt, state, undefined);
console.table([typeof booly, typeof number, typeof string, typeof bigInt, typeof state, typeof sym, typeof undefined]);


////// Reference Data Types = function, objects, arrays ///////

let array = [1, 2, 3, 4, 5]
let stringArray = ["a", "b", "c", "d", "e"]

console.log(array);
console.log(stringArray);


let jsonOrJavascriptObject = {
    name : "piyush",
    age : 18,
    number : "971169xxxx",
    email : "piyushmittal1983@gmail.com"
}

console.log(jsonOrJavascriptObject);


let myFunction = function() {
    console.log(1 + 2);
}

myFunction()