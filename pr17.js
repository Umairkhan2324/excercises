"use strict";
let guestlist = [
    "umair khan",
    "ali khan",
    "hussain raza",
    "shah jahan",
];
console.log(`I can only invite 2 guest`);
while (guestlist.length > 2) {
    let removeguest = guestlist.pop();
    console.log(` Sorry, ${removeguest} I cant invite you to dinner! `);
}
;
for (let guest of guestlist) {
    console.log(`Hello, ${guest}, you are still invited!`);
}
;
guestlist.pop();
guestlist.pop();
console.log(`Guest list after dinner:`, guestlist);
