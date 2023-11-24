"use strict";
function createCar(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    ;
    return car;
}
;
const myCar = createCar("toyota", "corolla", ["color", "red"], ["speed", "280MPH"]);
console.log(myCar);
