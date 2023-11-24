let favouriteTransportation: Array<[transport:string, brand:string]>=[]
favouriteTransportation.push([ "car","BMW"])
favouriteTransportation.push([ "bike","honda"])
favouriteTransportation.push([ "bicycle","sohrab"])

favouriteTransportation.forEach(([transport, brand] ) =>
{console.log(  `I would like to own a ${transport} of ${brand}`)}
)