// 15:7 Remove duplicate item from an array...
  var studentId = [1, 3, 4, 6, 7, 8, 1, 3, 9, 8]; // er dublicate number sorate hobe..
var uniqueName = [];
for (var i = 0; i < studentId.length; i++) {
    var element = studentId[i];
    index = uniqueName.indexOf(element);        //element er number golo uniqueName er vetore duplicate number ase kina ta dekhar jonno....
    if (index == -1){
        uniqueName.push(element);        // uniqename jeheto faka element push kore dokiye dilam.
    }
}
console.log(uniqueName);

// output::
// $ node duplicate.js
// [
//   1, 3, 4, 6,
//   7, 8, 9
// ]


// noted::: break poin diye dekhe hobe..debug kore dekhte hobe

