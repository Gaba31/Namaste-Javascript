// cart = ["gloves","kurta","shoes"];
// // Normal Callback func 
// // problem arises -> Inversion of control
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// });

// // Using Promises

// const promise = createOrder(cart);
// // {data:undefined};

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// const GitHub = "https://api.github.com/users/akshaymarch7";

// const user = fetch(GitHub);

// console.log(user);

// user.then(function(data){
//     console.log(data);
// });



// Second video

// const cart = ["gloves", "kurta", "shoes"];

// createOrder(cart)
//     .then(function(orderId) {
//         return orderId;
//     })
//     .catch(function(err) {
//         console.log(err.message);
//     })
//     .then(function(orderId) {
//         // console.log(orderId);
//         return proceedToPayment(orderId);
//     })
//     .then(function(paymentInfo) {
//        return showOrderSummary(paymentInfo);
//     })
//     .then(function(ans){
//         console.log(ans);
//     });
   


// // Producer

// function createOrder(cart) {
//     return new Promise(function(resolve, reject) {
//         if (!isValidCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         } else {
//             const out = "342";
//             if (out) resolve(out);
//         }
//     });
// }


// function isValidCart(cart) {
//     return false;
// }

// function proceedToPayment(orderId) {
//     return new Promise(function(resolve, reject) {
//         resolve("Successful");
//     });
// }

// function showOrderSummary(paymentInfo) {
//     return new Promise(function(resolve,reject){
//         // const ecf = new Error("teri maa ki");
//         // reject(ecf);
//         resolve("mja aa gya");
//     });
// }


const p1 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P1 pass"),10000);
    setTimeout(()=>reject("P1 Fail"),1000);
});
const p2 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P2 pass"),3000);
    setTimeout(()=>reject("P2 fail"),5000);
});
const p3 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P3 pass"),6000);
    setTimeout(()=>reject("P3 fail"),6000);
});

// Promise.all([]);

// Promise.all([p1,p2,p3])
// .then(res =>{
//     console.log(res);
// })
// .catch(er=>{
//     console.error(er);
// });


// Promise.allSettled([])

// Promise.allSettled([p1,p2,p3])
// .then(output=> console.log(output))
// .catch(er => console.error(er)); 

// Promise.race([]);

// Promise.race([p1,p2,p3])
// .then(output=>console.log(output))
// .catch(err=>console.error(err));


// Promise.any([]);

Promise.any([p1,p2,p3])
.then(output=>console.log(output))
.catch(err=> console.log(err.errors));