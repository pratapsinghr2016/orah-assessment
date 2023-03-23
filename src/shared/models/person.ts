export interface Person {
  id: number;
  age: number;
  parent: string;
  grade: string;
  gender: string;
  first_name: string;
  last_name: string;
  photo_url?: string;
  last_update: string;
  roll: string;
}

export type DefaultPropTypes = {
  limit: number;
  offset: number;
  sortByKey?: string;
  sortOrder: "asc" | "dsc";
};

export type UpdateType = {
  studentId: number;
  newStudentIfo: Person;
  defaultProps: DefaultPropTypes;
};

export const PersonHelper = {
  getFullName: (p: Person) => `${p.first_name} ${p.last_name}`,
};
