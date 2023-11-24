const bouquet =
{
    name : 'Spring Delight',
    price: 250,
    description : ' it is a pleasant, and joyfull home decoration piece which shoulsd be bought by every home maker.',
};

let bouquets: Array<typeof bouquet> = [];

bouquets.push(bouquet);
bouquets.push( {
    name:"venus flower", 
    price: 450,
    description: "it is a delicate flower with enchanting beauty of sea.",});
let bouquet3 = {
    name:"rose",
    price: 350,
    description : "it ois a red velvety soft and scentful flower",
    }
bouquets.push(bouquet3);
console.log(bouquets);
bouquets.push({
    name:"fresh lily", 
    price:500 , 
    description:"it is a nice one", });
function displaybouquets(bouquets: Array<typeof bouquet>)
{
    for (let i of bouquets){
        console.log(`title: ${i.name}
        description:${i.description}
        price:${i.price}
        __________\n`);
    }
}
displaybouquets(bouquets);