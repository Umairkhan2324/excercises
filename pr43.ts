const magicianNames2: string[]=["harry potter",'harry houdini','david cooper'];
function make_great( magicians:string[]):void
{
    for(const item of magicians){
        console.log("great" item );
   
    } 
}
make_great(magicianNames2);
function show_magicians(magicians:string[]):void
{
    for(const items of magicians){
        console.log(items);
    }
}
show_magicians(magicianNames2);