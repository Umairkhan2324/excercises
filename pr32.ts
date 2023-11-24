const current_users:string []=['ali','haris','hassan','hussain','asif'];
const new_users:string[]=['muhammad','asad','hanif','yasir','asif'];

function checkusernames(current_users:string[],new_users:string[]):void
{
    const loweredcase3edcurrentusers = current_users.map(user =>user.toLowerCase()); 
    for (const newUser of new_users) {
        const lowerCasedNewuser = newUser.toLowerCase();
        if (loweredcase3edcurrentusers.includes(lowerCasedNewuser)) {
            console.log(`Username,"${newUser}" has already been taken, please try another one`)
        } else {
            console.log(`Username, "${newUser}" is available`)
        }
    }
};

checkusernames(current_users,new_users);