const magicianNames: string[]=["harry potter",'harry houdini','david cooper'];
function show_magicians(magicians:string[]):void
{
    for(const items of magicians){
        console.log(items);
    }
}
show_magicians(magicianNames);