let guestlist: Array<string> = [
    "umair khan",
    "ali khan",
    "hussain raza",
    "shah jahan",
];

let guestWhoCantMakeIt: string="shah jahan"
console.log(`${guestWhoCantMakeIt} can't make it to dinner`)

let NewGuest: string= "shahmeer"
let indexOfGuestWhoCantMakeIt: number= guestlist.indexOf(guestWhoCantMakeIt)

if(indexOfGuestWhoCantMakeIt !== -1)
{
    guestlist[indexOfGuestWhoCantMakeIt]=NewGuest
}
console.log("second set of invitation messages:")
guestlist.forEach((guest:string) =>
{
      console.log(`Dear ${guest}, you are invited to dinner`)
}
)