// 15:5-1:: How to recurtion works and recursion vs interactive.
// mone rakhte hobe je  * korar somoi i=1 theke suro korte hobe and + korar somoi 0 theke soru korte hobe .
//function forloop use to  factorial:::
// function  factorial(num){
//     var fact = 1;
//     for (var i = 1; i <=num; i++) {
//          fact = fact * i;
        
//      }
    
//          return fact;
// }
//        var result = factorial(5);   // output: 24
//     console.log(result);
    // ooutput:::
    // $ node recursion.js
    //  120

    
// ::: factorial recursion::: coding use to forloop+function...
// function factorial(n){
//     if (n==0){
//         return 1;
//     }
//     else{
//         return n * factorial(n-1)
//     }
// }

// var result = factorial(10);
// console.log(result);

// // output::
// $ node recursion.js
// 3628800


// 5! = 5*4*3*2*1
// 5*4*3*2*1
function factorialRecursive(num) {
    if(num == 1){
        console.log(num);
        return 1;
        
    }
    else{
        console.log(num, num - 1);
        return num * factorialRecursive(num -1);
    }
}
var result = factorialRecursive(5);  
console.log('result', result);
//:: output:
// $ node recursion.js
// 5 4
// 4 3
// 3 2
// 2 1
// 1
//result 12 
//youtube/ MDN now ditails
