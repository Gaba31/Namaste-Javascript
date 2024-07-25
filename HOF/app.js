// What we do
// const arr = [2,4,5,6];

// const circumference =  function (arr){
//     const output = [];
//     for(let i = 0; i<arr.length; i++){
//         output.push(2 * Math.PI * arr[i]);
//     }
//     return output;
// }

// const diameter = function (arr){
//     const output = [];
//     for(let i = 0; i<arr.length; i++){
//         output.push(2 * arr[i]);
//     }
//     return output;
// }
// const area = function(arr){
//     const output = [];
//     for(let i = 0; i<arr.length; i++){
//         output.push(Math.PI * arr[i] * arr[i]);
//     }

//     return output;
// }


// console.log(area(arr));
// console.log(circumference(arr));
// console.log(diameter(arr));


// What we should do

// We are writing generic function 
// Making higher order function


const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI * radius * radius;
}

// we are just passing the logic 
// readability

const diameter = function(radius){
    return 2 * radius;
}

const calculate = function(rad,logic){
    const output = [];
    for(let i = 0; i<rad.length; i++){
        output.push(logic(rad[i]));
    }
    return output;
}

// seperat functions for all these
console.log(calculate(radius,area));
console.log(calculate(radius,diameter));