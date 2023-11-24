function makeSandwich(...items: string[]):void{
console.log("Sandwich Summary:");
if(items.length===0){
    console.log("you ordered an empty sandwich please add some items");
} else {
    items.forEach((item,index)=>{
        console.log(`${index}, ${item}`);
    });
}
console.log('\n');
}
makeSandwich();
makeSandwich('ham' , 'cheese');
makeSandwich('turkey','tomatoes','lettuce','bread');
makeSandwich('butter','chicken','onion');
