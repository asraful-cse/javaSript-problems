// 15:9.. Reverse string ..
// kono likhake ulta kore dawai hosse reverse..



function reverseString (str){   // string ke input nibe..
var reverse = "";    // noted: sarajibon mone rakhte hobe STRING er default value faka =""; example:: sum er 0; .. max er default valo array first er ta,
for (var i = 0; i < str.length; i++) {
    var char = str[i];  
    reverse = char + reverse;  /// reverse + char  >> howar kotha cilo but reverse er jonno ulta korte hobe..noted::
  }
            return reverse;
}
  
var statement = "hello brother how are you ?";   // string a input dilam..
var alian = reverseString(statement);  /// prothom function reverseString (str) er jaigai statement dokiye dilam..
console.log(alian);


// output::
// $ node reverseString.js
// ? uoy era woh rehtorb olleh
androed  gfgth