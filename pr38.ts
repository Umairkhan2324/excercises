function describe_city(city:string, country : string ="unknown country"):void
{
    console.log(`${city} is in ${country}.`);
}
describe_city("karachi","pakistan");
describe_city("newyork");
describe_city("berlin","germany");