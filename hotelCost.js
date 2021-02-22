function hotelCalculation(day) {
   
    var hotelCost = 0;
    if (day <= 10) {
        var hotelCost = day * 100;
    
    }

    else if(day <= 20){
        var firstPart = 10 * 100;
        var remining = day - 10;
        var secondPart  = remining * 80;
        hotelCost = firstPart + secondPart ;
    }
    
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remining = day - 20;
        var thirdPart = remining * 50;
        hotelCost = firstPart + secondPart +thirdPart;
    }
        return hotelCost;
}
var dayCount = hotelCalculation(22);
console.log(dayCount);