//15:3:: random number between variable number:: floor,ceil,round,random etc coding practice..

var num = 2.333;
var result = Math.floor(num) ;  // Math.floor 2.13/2.50 er pore jai thakok 2 e count korbe.
var result2 = Math.ceil(num);   // Math.ceil 2.33/2.55 er opore jai thakok 3 e count korbe.
var result3 = Math.round(num);   // round er kaz hosse 2.49 porjonto 2 point hobe r 2.50 the opore jai hok 3 hobe.
var result4 = Math.random();    // Math.random();  er kaz hosse 0 theke 1 er modde random value dekhabe..
//console.log(result,result2,result3,result4);
// output:: 2 3 2 0.48964167352503885


var result4 = Math.random()*10; // 0 theke 10 porjonto random value show korbe.
//console.log(result4);        // output:: 0.48964167352503885  2nd search console>>7.836692491668722 >6.504675654657097


var result4 = Math.random()*6;    // random akare 6 porjonto gorbe..
var output = Math.round(result4); // round hoye 1 theke 6 er modde gorte thakbe..
//console.log(output);       /// lodu game er moto kaz korbe..



// same oporer kazti forloop diye coding:::
for (i = 0; i < 6; i++){
    var result4 = Math.random()*6; 
    var output = Math.round(result4); // round hoye 1 theke 6 er modde gorte thakbe..
    console.log(output);       /// lodu game er moto kaz korbe..
}

// //output.. eksathe 6ti vale show korbe random golo eksathe shoow korbe :: 
// 6
// 4
// 3
// 0
// 3
// 4

// noted ::same formula diye lotary deya jabe game khela jabe ..

