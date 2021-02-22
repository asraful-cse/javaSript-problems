//15:6 sum of all numbers in an array::::::
// array er value sum/+ kore ekta value dekhate hobe::


// forloop and normal sum coding:::

var numbers = [12, 43, 56, 66, 77, 88,22,2];   //array
sum = 0;
for (var i = 0; i < numbers.length; i++) {       // forloop
    var element = numbers[i];
    sum = sum + element;                          
//console.log(sum);
    
}
//console.log("Total of the numbers: ", sum);

//// output::: 
// 12
// 55
// 111
// 177
// 254
// 342
// 364
// 366
// Total of the numbers:  366


//array sum and function using coding::barbar output dekhanor jonno:::
var numbers = [12, 43, 56, 66, 77, 88,22,2];   //array
function getArraySum(numbers){
    sum = 0;
    for (var i = 0; i < numbers.length; i++) {       // forloop
        var element = numbers[i];
        sum = sum + element;                          
}
return sum;
    
}
var result = getArraySum(numbers);
console.log("Total of the number ", result);

var addNumber = getArraySum([20, 33, 44, 55, 66]); // nton kore add korar jonno.
console.log("New add number:", addNumber);

/// output:: 
// Total of the number  366
// New add number: 218