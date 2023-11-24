"use strict";
let guestlist = [
    "umair khan",
    "ali khan",
    "hussain raza",
    "shah jahan",
];
for (let guest of guestlist) {
    console.log(`dear, ${guest}, we found a bigger table`);
}
let newGuestatTheBeginning = "ali phool";
guestlist.unshift(newGuestatTheBeginning);
let newGuestInMiddle = " mian ashiq";
let middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, newGuestInMiddle);
let newGuestAtTheEnd = " M Asif";
guestlist.push(newGuestAtTheEnd);
console.log("New set of invitation messages:");
for (let guest of guestlist) {
    console.log(` Dear ${guest}, you are invited or tonights dinner, kindly join us`);
}
