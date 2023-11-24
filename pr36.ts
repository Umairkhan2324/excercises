const make_shirt=(size:string, message:string)
:void=>
{
    console.log(`size:'${size}', message:'${message}'`);
    `size:'${size}', nessage:'${message}'`
}
let size:string = 'medium';
let message :string=' its how its done';
make_shirt(size,message)
make_shirt("large","nah its the wrong way");