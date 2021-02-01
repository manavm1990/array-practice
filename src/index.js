// Have to destructure the named export from lib
import { getLastName, studentData } from "./lib";

const lowScores = studentData
  .filter((student) => student.score < 70)
  .map((student) => ({
    lastName: getLastName(student.name),
    id: student.id,
  }));

console.log(lowScores);
