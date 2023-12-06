interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return { ...assign, ...propsToUpdate }
}

const assign1 = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0
}

console.log(assign1);
console.log(updateAssignment(assign1, { grade: 95 }));

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc.
  return assign
}

const assignGraded = updateAssignment(assign1, { grade: 95 })
const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }
