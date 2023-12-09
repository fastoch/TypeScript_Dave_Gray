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


const hexColorMap: Record<string, string> = {
	red: "FF0000",
	green: "00FF00",
	blue: "0000FF"
} 

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"
const finalGrades: Record<Students, LetterGrades> = {
  Sara: "A",
  Kelly: "B"
}

interface Grades {
  assign1: number,
  assign2: number
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 8, assign2: 12 },
  Kelly: { assign1: 10, assign2: 16 }
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
  studentId: "k123",
  grade: 82
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
  studentId: "x999",
  title: "Starter Project"
}

// Exclude and Extract



