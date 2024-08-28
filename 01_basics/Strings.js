let str1 = "This is a string primitive";
let str2 = 'This is also a string primitive';
let str3 = `Yet another string primitve`;

const string4 = new String("A String object");

console.log(str1, str2, str3, string4);

const gameName = new String("piyush mittal");

console.log(gameName.toUpperCase());

const newName = gameName.toUpperCase();
console.log(newName);

const trimmer = "        Asla tera yaar bhi rakhe      ";
console.log(trimmer.trim());

const stringObj = new String("this is string object");
console.log(stringObj);

const valueString = stringObj.valueOf();
console.log(valueString);

const emailId = "piyushmittal1983@gmail.com";
const newEmailId = emailId.substring(0, 16);
console.log(newEmailId);

const word = "My ";
const word2 = "Name "
const word3 = "Is "
const word4 = "Piyush"

const sentence = word.concat(word2, word3, word4);
console.log(sentence);

const para = "I think happy is sad";
const paraReplace = para.replace('happy', 'my dog');
console.log(paraReplace);

const slice = "I think slice method is copy pasting strings";
const sliceMethod = slice.slice(7, 20);
console.log(sliceMethod);
console.log(slice);
console.log(slice.length);

const charAt = "my string is lengthy";
console.log(charAt.charAt(1));

const para2 = "There is two apples, apple One and apple Two";
const searchTerm = "apple"
console.log(para2.indexOf(searchTerm));



// String Methods in ES6 //


//Length

const string = "Hello"
console.log(string.length);

// To UpperCase

const string2 = "hello";
console.log(string2.toUpperCase());

// To Lowercase

const string3 = new String("HELLO");
console.log(string3.toLowerCase());

// CharAt(Index) //

const str4 = "Hello";
console.log(str4.charAt(1));  // index starts with 0 //

// IndexOf (substring)

const str5 = "Hello World";
console.log(str5.indexOf("World"));

// slice (start, end) //

const str6 = "Hello World";
console.log(str6.slice(0, 5)); //extracts the part of existing string and make a new one. //

// substring 

const str7 = "Hello World";
console.log(str7.substring(6, 12)); // similar to slice but does not accept negative values

// replace 

const str8 = "Hello World";
console.log(str8.replace('World', 'Piyush'));

// Trim

const str9 = "     Hello World     ";
console.log(str9);
console.log(str9.trim())  // removes extra spaces
