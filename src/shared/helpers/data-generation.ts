import { getRandomInt, generateRange } from "shared/helpers/math-utils"
import { sortBy } from "shared/helpers/performance-utils"

const nameTokens = ["Alan", "John", "Brandon", "Key", "Branda", "Morris", "Carlos", "Lee"]
const parentNameTokens = ["Susan", "Lucas", "Shanti", "Samuel", "Jacob", "Robert", "Grace", "Marry"]
const grade = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]

export function generateStudent(id: number) {
  return {
    id,
    first_name: nameTokens[getRandomInt(0, nameTokens.length - 1)],
    last_name: nameTokens[getRandomInt(0, nameTokens.length - 1)],
    age: getRandomInt(4, 16),
    gender: getRandomInt(0, 10) % 2 === 0 ? "m" : "f",
    parent: parentNameTokens[getRandomInt(0, nameTokens.length - 1)] + " " + parentNameTokens[getRandomInt(0, nameTokens.length - 1)],
    grade: grade[getRandomInt(0, grade.length - 1)],
    roll: "un-rolled",
  }
}

export function generateStudents(number: number) {
  const studentList = generateRange(number).map((_, id) => generateStudent(id + 1))
  const sortedStudentList = sortBy(studentList, "first_name", "asc")
  return sortedStudentList
}

export function getBgColor(type: string) {
  switch (type) {
    case "present":
      return "#13943b"
    case "late":
      return "#f5a623"
    case "absent":
      return "#9b9b9b"
    case "un-rolled":
      return "#9c9fab"
    default:
      return "#13943b"
  }
}
