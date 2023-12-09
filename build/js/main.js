"use strict";
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0
};
console.log(assign1);
console.log(updateAssignment(assign1, { grade: 95 }));
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
const assignGraded = updateAssignment(assign1, { grade: 95 });
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "A",
    Kelly: "B"
};
const gradeData = {
    Sara: { assign1: 8, assign2: 12 },
    Kelly: { assign1: 10, assign2: 16 }
};
const score = {
    studentId: "k123",
    grade: 82
};
const preview = {
    studentId: "x999",
    title: "Starter Project"
};
// ReturnType
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);
