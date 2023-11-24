function createCar(manufacturer:string ,model:string, ...properties:[string][]):any{
        const car:any ={
            manufacturer,
            model,
        };
        for(const [ key , value ] of properties){
            car[key]=value;
        };
        return car;
        
    };
    const myCar:string = createCar("toyota","corolla",["color","red"],["speed","280MPH"]);
    console.log(myCar);