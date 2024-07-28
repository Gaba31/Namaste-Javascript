const arr = [5,1,3,2,6];
//Map

function double(x){
    return x*2;
}
function binary(x){
    return x.toString(2);
}
const fg = arr.map(binary);
console.log(fg);

// using arrow function
const gg = arr.map((x)=>x*3);
console.log(gg);

// Filter

// used for filtering the data
// for eg  find out the no. which are greater than 4

function filter(x){
    return x>4;
}

const output =  arr.filter(filter);
const output2 = arr.filter((x)=>x>4);
console.log(output);
console.log(output2);


// Reduce 

// Find sum of all the array

// normal way

function findSum(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(findSum(arr));

// What we should do 

const result = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);

console.log(result);

// Now find max of the array by using reduce function

// Normal way

function findMax(arr){
    let max = 0;
    for(let i = 0; i<arr.length; i++){
        if(max<arr[i]) max = arr[i];
    }
    return max;
}

console.log(findMax(arr));


// by using reduce function

const res = arr.reduce(function(acc,curr){
    if(acc<curr) acc = curr;
    return acc;
},0);

console.log(res);


// Tricky examples of map, filter , reduce

const users = [
    {firstName : "akshay", lastName:"saini" , age: 26},
    {firstName : "doland", lastName:"trumph" , age: 75},
    {firstName : "your", lastName:"musk" , age:50},
    {firstName : "chaman", lastName:"chutiya" , age: 26},
];

// Map
// Assume that this is data comming from api

// find out list of full name from this

const fullName = users.map(function(x){
    return x.firstName + " " + x.lastName;
});
// OR
// const fullName = users.map((x)=>x.firstName + " " + x.lastName);
console.log(fullName);


// Reduce 

// find out how many users have perticulate age

// output like this {26:2 . 75:1, 50:1}

const res2 = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

console.log(res2);
// Filter

// we need to find firstName of people whose age is less < 30
// function lessthan30(users){
//     if(users.age<30) return users.firstName;
// }

// first we will find which objs has age less than 30 and then apply map over it
// This is known as chaining

const og = users.filter((x)=>x.age<30).map((x)=>x.firstName);

console.log(og);

// by using reduce same thing

const rand = users.reduce(function(acc,curr){
    var i = 0;
    if(curr.age<30){
       acc.push(curr.firstName);
    }
    return acc;
},[]);

console.log(rand);
