const userNames:string[]=['admins','ali phool','asad hussain','sikandar raza','hassan raza','ali ashiq'];
function greetUsers():void{
    for(const i in userNames){
        if(userNames[i].toLowerCase()==='admin'){
            console.log(`hello admin, would you like to see the status report?`);
        } else{
            console.log(` Hello ${userNames[i]} for logging in again`);
        }
    }
}

greetUsers()