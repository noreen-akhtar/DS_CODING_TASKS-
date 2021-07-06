/*You need to place 7 at the 3rd index
of the array: [3, 8, 10, 12, 45, 34, 
34, 34, 2, 2, 0] . How’d you do that? */

// const arr = ['a', 'b', 'd'];

// let start = 2;
// let deleteCount = 0;
// arr.splice(start, deleteCount, 'c');

// arr; // ['a', 'b', 'c', 'd'];

let arr = [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0];
let result = arr.splice(3, 0, 7);
console.log(arr);