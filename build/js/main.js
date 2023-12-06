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
