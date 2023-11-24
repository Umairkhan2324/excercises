"use strict";
function describe_city(city, country = "unknown country") {
    console.log(`${city} is in ${country}.`);
}
describe_city("karachi", "pakistan");
describe_city("newyork");
describe_city("berlin", "germany");
