// You are given a object of user’s details as:
 

//  let userObject = {

// userName: ‘Philip’,

// fatherName: ‘Norman’,

// className: ‘four’,

// };

 

// Your task is to traverse the object and print its properties (both names and values).

let userObject = {
    userName: "Philip",
    fatherName: "Norman",
    className: "four",
};
for (let [key, value] of Object.entries(userObject)) {
    console.log(`${key}: ${value}`);
}
