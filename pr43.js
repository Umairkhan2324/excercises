"use strict";
const magicianNames2 = ["harry potter", 'harry houdini', 'david cooper'];
function make_great(magicians) {
    for (const item of magicians) {
        console.log("great", item);
    }
}
make_great(magicianNames2);
function show_magicians(magicians) {
    for (const items of magicians) {
        console.log(items);
    }
}
show_magicians(magicianNames2);
