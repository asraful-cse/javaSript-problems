// 15:9::: count the number of word in a string.....

//white spach count kore kotogola word ta ei nicher coding diye dekhano holo::
var mySpeech =("I am a good person. I am a javaScript programar.");
 count = 0;
for (var i = 0; i < mySpeech.length; i++) {
    var char = mySpeech[i];
    if(char == " "){
        count++;
    }  
}
count++;
//console.log(count);
// // output::
// $ node wordCount.js
// 10



//white spach jodi onekgolao hoi tao ektai count korbe..coding::
var mySpeech =("I  am  a  good person.  I         am  a  javaScript  programar.");
 count = 0;
for (var i = 0; i < mySpeech.length; i++) {
    var char = mySpeech[i];
    if(char == " " && mySpeech[i-1] !=" "){    // white spach jodi onekgolao hoi tao ektai count korbe..
        count++;                 // ekta ekta baranor jonno
    }  
}
count++;     // vetore cheye r o ekta count barbe.
console.log(count);

// // output::
// $ node wordCount.js
// 10