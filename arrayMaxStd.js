// 15:5 :: find the largest value of an array::


// student der max  number array and forloop if using to code:: 
var marks = [55, 67, 77, 58, 44, 23, 34, 55,39];
var max = marks[0];
for (var  i = 0; i < marks.length; i++) {
    var element = marks[i];
        if (element > max){
            max = element;

        }
    
}
console.log("Highest value is : ", max);  // : ", er mane hosse pasapashi velo ta asbe.
// output:: Highest value is :  77