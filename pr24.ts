const str1: string= "Hello";
const str2: string= "hello";
console.log(str1 == str2);
console.log(str1 !== str2);

const text1: string= "Hello world";
const text2: string= "hello world";
console.log(text1.toLowerCase() === text2);

const num1: number=10;
const num2: number=5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

const l : number=5;
const y : number=10;
const z : number=15;
console.log(l<y && y<z);
console.log(l<y || y>z);
console.log(l>y && y>z);
console.log(l>y || y>z);

const fruits:string[] =['apple','grapes','orange','banana'];
console.log(fruits.includes('banana'));
console.log(fruits.includes('kiwi'));

const colors:string[]=['yellow','purple','green','blue'];
console.log(!colors.includes('brown'));
console.log(!colors.includes('blue'));