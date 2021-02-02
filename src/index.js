// Have to destructure the named export from lib
import { getBirthYear, senatorsData } from "./lib";

const femaleSenatorNames = senatorsData
  .filter(({ person }) => person.gender === "female")
  .map(({ person }) => ({ name: person.name }));

console.log(femaleSenatorNames);

const youngSenators = senatorsData
  .filter(({ person }) => getBirthYear(person.birthday) > 1960)
  .map(({ person }) => ({ name: person.name }));

// console.log(youngSenators);
