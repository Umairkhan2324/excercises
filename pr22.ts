function createfruit(name:string, color:string , taste:string){
   return{
    name,
    color,
    taste,
   };
}
const fruit = [
    createfruit("apple","red","citrus"),
    createfruit("orange","yellow","citrusy sour"),
    createfruit("banana","yellow","sweet"),
    createfruit("watermelon","red","sweet"),
    createfruit("lemon","yellow/green","sour"),
    ];

    const invalidIndex=10;
    console.log(`Fruit at index ${invalidIndex}:`, "fruit[invalidIndex].name");

    fruit.forEach((fruit)=> {
        console.log(`name:${fruit.name}, colour:${fruit.color},taste:${fruit.taste}`);
    });