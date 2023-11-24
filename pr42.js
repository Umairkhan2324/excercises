"use strict";
const magicianNames1 = ["harry potter", 'harry houdini', 'david cooper'];
function make_great(magicians) {
    for (const item of magicians) {
        console.log("great", item);
    }
}
make_great(magicianNames1);
