

const array = [1, 2, 3, 4, 5];
console.log(array[3]);

// const mixedArray = [1, "One", true, "Two"];

// console.log(mixedArray[1]);

// const constructedArray = new Array(1, 2, 3, 4, 5, 6, 7);
// console.log(constructedArray);

array.push(6, 7, 8, "Rakesh");
console.log(array);

array.pop();
console.log(array);

array.unshift(0, "Mukesh");
console.log(array);

array.shift()
console.log(array);

console.log(array.includes(8));
console.log(array.indexOf("Mukesh"));

const stringArray = array.join()

console.log(array);
console.log(stringArray);
console.log(typeof(stringArray));


// const arrayOfObjects = [{
//   name: 'john',
//   email: 'johnwork@email.com',
//   comment: "you are the best!"
// }, 
// {
//   name: 'Jane',
//   email: 'jane@email.com',
//   comment: "you are the best too!"
// }];

// console.log(arrayOfObjects);