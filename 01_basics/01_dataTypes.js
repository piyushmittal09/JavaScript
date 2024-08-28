///////// Primitive Data Types //////

let booly = true
let number = 1
let string = "any sentence"
let bigInt = 999999999999999
let state = null
let sym = Symbol(123)
let undefined;
let RegEXP = /my regexp/;
let error =  new Error("Something went wrong"); 

// console.log(boolean, number, string, bigInt, state, undefined);
console.table([typeof booly, typeof number, typeof string, typeof bigInt, typeof state, typeof sym, typeof undefined]);


////// Non-Primitive OR Reference Data Types = function, objects, arrays ///////

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

let date = new Date();
console.log(date);



const regexConstructor = new RegExp('abc');
console.log(regexConstructor);

const regEx = /hello/;
const helloString = "hello world";
const result = regEx.test(helloString);

console.log(result); // there is much more in regular expressions...

const customError =  new Error("this is not right!");
console.log(customError);
console.error("An error occurred:", error.message);
