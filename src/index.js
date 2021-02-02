// Have to destructure the named export from lib
import { getBirthYear, senatorsData } from "./lib";

// TODO: We need to make a list of all female senators to call them and invite to a special event (we need 'phone' and 'name')

const youngSenators = senatorsData
  .filter(({ person }) => getBirthYear(person.birthday) > 1960)
  .map(({ person }) => ({ name: person.name }));

console.log(youngSenators);
