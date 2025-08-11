const types = Actor.implementation.TYPES;
const shells = types.map( t => new Actor.implementation({name: t, type: t}));
shells.forEach( s => console.log(`'${s.type}'`, "type Actors have the following attribute keys available:\nsystem.\n", s.toObject().system));
