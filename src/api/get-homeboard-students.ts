import { generateStudents } from "shared/helpers/data-generation";
import { httpMock } from "shared/helpers/http-mock";
import {
  addIfNotExist,
  LocalStorageKey,
  get,
  add,
} from "shared/helpers/local-storage";
import { sortBy } from "shared/helpers/performance-utils";
import { Person } from "shared/models/person";

const TOTAL_COUNT: number = 14;
type P = {
  limit: number;
  offset: number;
  sortByKey?: string;
  filter: string;
  sortOrder: "asc" | "dsc";
};

function getExistingInfo(
  limit = 10,
  offset = 0,
  sortByKey = "first_name",
  sortOrder: "asc" | "dsc" = "asc",
  filter: string = ""
) {
  const data: [] = get(LocalStorageKey.students) ?? [];
  const filteredData = filter
    ? data.filter(({ roll }) => roll === filter)
    : data;

  const studentList = filteredData?.slice(limit, offset);
  const sortedStudentList = sortBy(studentList, sortByKey, sortOrder);
  return sortedStudentList;
}

const getCount = (students: any, rollType: string) =>
  students.filter(({ roll }: { roll: string }) => roll === rollType).length;

export async function getHomeboardStudents(obj?: P) {
  const students: any[any] = get(LocalStorageKey.students) || [];
  const present = getCount(students, "present");
  const late = getCount(students, "late");
  const absent = getCount(students, "absent");
  const unRolled = getCount(students, "un-rolled");

  try {
    await httpMock({ randomFailure: true });
    return {
      success: true,
      total: TOTAL_COUNT,
      students:
        students && students.length
          ? getExistingInfo(
              obj?.limit,
              obj?.offset,
              obj?.sortByKey,
              obj?.sortOrder,
              obj?.filter
            )
          : addIfNotExist(
              LocalStorageKey.students,
              generateStudents(TOTAL_COUNT)
            ),
      counts: {
        total: students.length,
        present,
        late,
        absent,
        unRolled,
      },
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

export async function updateHomeboardStudent(
  newDetail: Person,
  studentId: number,
  obj: any
) {
  try {
    await httpMock({ randomFailure: true });
    const students: [any] | [] = get(LocalStorageKey.students) ?? [];
    const targetIdx = students.findIndex(({ id }) => id === studentId);
    students[targetIdx] = newDetail;
    add(LocalStorageKey.students, students);
    const present = getCount(students, "present");
    const late = getCount(students, "late");
    const absent = getCount(students, "absent");
    const unRolled = getCount(students, "un-rolled");
    return {
      total: students.length,
      present,
      late,
      absent,
      unRolled,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

export async function saveRollsInStorage() {
  try {
    await httpMock({ randomFailure: true });
    const students: [any] | [] = get(LocalStorageKey.students) ?? [];
    const onlyRolledStudents = students?.filter(
      ({ roll }) => roll !== "un-rolled"
    );
    add(LocalStorageKey.rolls, onlyRolledStudents);
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}
