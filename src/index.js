// Have to destructure the named export from lib
import { studentData } from "./lib";

function getLastName(name) {
  return name.split(" ")[1];
}

const lowScores = studentData
  .filter((student) => student.score < 70)
  .map((student) => ({
    lastName: getLastName(student.name),
    id: student.id,
  }));

console.log(lowScores);
