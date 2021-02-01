// Re-exporting out whatever 'data' exports out as default.
// Assigning it the name 'studentData'
export { default as studentData } from "./data";

export const getLastName = (name) => name.split(" ")[1];
