function make_album(artist:string, title:string, tracks:number):
{ artist:string; title:string; tracks:number}
{
    const album ={
        artist, 
        title,
        tracks
        };
        if (tracks !==undefined)
        {
            album.tracks=tracks;
        }
return album;
};

const album1= make_album('vital signs','hum tum');
const album2= make_album('Artist2','album2',8);
const album3= make_album('Artist3','album3',12);

console.log(album1);
console.log(album2);
console.log(album3);