let Person: string= 'umair khan'
 let LowerCaseName: string= Person.toLowerCase();
 console.log(LowerCaseName);

 let UpperCaseName: string= Person.toUpperCase();
 console.log(UpperCaseName);

 let words:string[] =Person.split(" ");
 let titlecasename: string=""
 for (let i=0 ; i < words.length; i++) {
    titlecasename += words[i].charAt(0.) .toUpperCase() + words[i].slice(1).toLowerCase()+""
 };
 console.log(titlecasename);