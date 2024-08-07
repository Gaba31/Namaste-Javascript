const p = new Promise(function(resolve,reject){
    resolve("Promise resolve");
});
// async function getData(){
//     // always return a promise 
//     return p;
// }

// const data = getData();                         
// data.then(res => console.log(res));

// Handling promises before async await

// function getData(){
//     p.then(res => console.log(res));
// }


// getData();

// Handling using async function

// async function handlePromise(){
//     // await can only be used inside an ansyn function and you write it before promises
//    const val =  await p;
//     console.log(val);
// }                              

// handlePromise();



// Difference bw handling promises using async await and without async await

// Handling without first

const p1 = new Promise((resolve,reject)=>{
    setInterval(() => {
        resolve("Promise resolved value");
    }, 5000);
});

// function getData(){
//     p1.then((res)=> console.log(res));
//     console.log("Namaste Javascript");
// }

// getData();

//output = Namaste java.. then Promise resovled value

// What happens in async await

// async function getD(){
//     // Js Engine was waiting for promise to resolved
//     const val = await p1;
//     console.log("Namaste India"); 
//     console.log(val);
// }

// getD();


// What will happen now
const p2 = new Promise((resolve,reject)=>{
    setInterval(() => {
        resolve("Promsie resolved");
    },10000);
});

async function getD(){
    // Js Engine was waiting for promise to resolved
    console.log("YO");
    console.log(new Date());
    
    const val = await p1;
    console.log(new Date());
    console.log(val);
    console.log("Namaste India"); 

    const val2 = await p2;
    console.log(new Date());
    
    console.log(val2); 
    console.log("Namaste India 2"); 
}

getD();

// output = Yo
//  After 10 sec 
// All of that printed


// Now make p1 promise 5sec and p2 10sec

// output = yo
//        Ater 5 sec
//      Namaste India
//      Promise resolved
//      After 10 sec
//   Namaster India 2 
//     Promise resolved


// const API = "https://api.github.com/users/akshaymarch7";

// async function handle(){
//   try{
//       // this will return a response or promise
//       const data = await fetch(API);
//       // .json() also returns a promise
//       const json = await data.json();
  
//       log(json);
//   }
//   catch(err){
//     console.log(err);
//   }
// }
//  For error handling
// or we can do this too 
//  we know handle will return a promise 

// handle().then(err => console.log(err));