/*
Objects, Interfaces, and API's
 */

let dog = {
    name: "steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark: function (typeOfBark){
         console.log ("Bark!");
    },
};

function x(y) {
    y = y + 5;
    console.long(y);
}

let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);