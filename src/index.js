// Have to destructure the named export from lib
import { senatorsData } from "./lib";

// TODO: We need to make a list of all female senators to call them and invite to a special event (we need 'phone' and 'name')

// TODO: Get a list of just the 'name' field from the senators if they were born since 1960
const youngSenators = senatorsData.map(({ person }) => ({ name: person.name }));

console.log(youngSenators);
