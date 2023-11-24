"use strict";
const emptyUserNames = [];
const UserNames = ['admin', 'ali phool', 'muhammad ali', 'asad arain', 'Abdullah'];
function greetUsers(UserNames) {
    if (UserNames.length === 0) {
        console.log('we need to find some users!');
        return;
    }
    for (const username of UserNames) {
        if (username.toLowerCase() === 'admin') {
            console.log('hello admin! do you like to see a status report?');
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again!`);
        }
    }
}
console.log(`for nonempty usernames \n:`);
greetUsers(UserNames);
UserNames = [];
console.log(`\n\n for empty Username \n:`);
greetUsers(UserNames);
