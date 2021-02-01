// Have to destructure the named export from lib
import { studentData } from "./lib";

console.log(studentData);
// Get a list of all students last names and ids - only those that scored below 70
// filter-map chain
const lowScores = studentData.filter((student) => student.score < 70);

console.log(lowScores);
