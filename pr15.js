"use strict";
let guestlist = [
    "umair khan",
    "ali khan",
    "hussain raza",
    "shah jahan",
];
let guestWhoCantMakeIt = "shah jahan";
console.log(`${guestWhoCantMakeIt} can't make it to dinner`);
let NewGuest = "shahmeer";
let indexOfGuestWhoCantMakeIt = guestlist.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestlist[indexOfGuestWhoCantMakeIt] = NewGuest;
}
console.log("second set of invitation messages:");
guestlist.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner`);
});
