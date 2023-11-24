"use strict";
let Person = 'umair khan';
let LowerCaseName = Person.toLowerCase();
console.log(LowerCaseName);
let UpperCaseName = Person.toUpperCase();
console.log(UpperCaseName);
let words = Person.split(" ");
let titlecasename = "";
for (let i = 0; i < words.length; i++) {
    titlecasename += words[i].charAt(0.).toUpperCase() + words[i].slice(1).toLowerCase() + "";
}
;
console.log(titlecasename);
