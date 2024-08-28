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
