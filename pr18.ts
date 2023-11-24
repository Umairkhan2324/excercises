let traveldestinations: string []=['Tokyo','Paris','Madinah','Cayman','St.petersburg']
console.log("Original order")
console.log(traveldestinations)

console.log("\n Alphabetical order without modifying the actual list")
console.log([...traveldestinations].sort())

console.log("\n showing array is still in original order")
console.log(traveldestinations)

console.log("\n reverse Alphabetical order without modifying the actual list")
console.log([...traveldestinations].sort().reverse())

console.log("\nshowing array is still in original order")
console.log(traveldestinations)

console.log("\nReverse order")
traveldestinations.reverse()
console.log(traveldestinations)

console.log("\nback to original")
traveldestinations.reverse()
console.log(traveldestinations)

console.log("\nchange to alphabetical order")
traveldestinations.sort()
console.log(traveldestinations)


console.log("\nchange to reverse alphabetical order")
traveldestinations.sort().reverse()
console.log(traveldestinations)