function xyz(){
    var b = 49;
    function x(){
        var a = 100;
    
        function y(){
            console.log(a,b);
        }
        // a = 40;
        return y;
    }
   return x;
}

// var z = xyz();
// z();

xyz()()();

// setTimeout

// function x(){
    
//    for(var i = 1; i<=5 ;i++){
//     function a(i){

//         setTimeout(()=>{
//         console.log(i);
//         let date = new Date();
//         console.log(date);
        
//         },i*10000);
        
        
//     }
//     a(i);
//    }
// }

// x();

 