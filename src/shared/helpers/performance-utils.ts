export const debounce = (fn: (value: string) => void) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (...args: [any]) {
    if (timer) {
      clearInterval(timer);
    }
    const ctx = this;
    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, 1000);
  };
};

export const sortBy = (
  data: any[any],
  sortByKey: string,
  sortOrder: "asc" | "dsc"
) =>
  data.sort((itemA: any, itemB: any) => {
    if (sortOrder === "asc" && itemA[sortByKey] < itemB[sortByKey]) {
      return -1;
    }
    if (sortOrder === "asc" && itemA[sortByKey] > itemB[sortByKey]) {
      return 1;
    }
    if (sortOrder === "dsc" && itemA[sortByKey] > itemB[sortByKey]) {
      return -1;
    }
    if (sortOrder === "dsc" && itemA[sortByKey] < itemB[sortByKey]) {
      return 1;
    }
    return 0;
  });

type keyProps = {
  first_name: string;
  last_name: string;
};

const lc = (str: string) => str.toLowerCase();

export function searchName(arr: any[any], searchedValue: string) {
  const filteredStudentList = arr.filter(
    ({ first_name: firstName, last_name: lastName }: keyProps) =>
      lc(firstName).includes(lc(searchedValue)) ||
      lc(lastName).includes(lc(searchedValue))
  );

  return filteredStudentList;
}

export const getLimitAndOffset = (rowsPerPage: number, page: number) => {
  const limit = rowsPerPage * page + (page === 0 ? 0 : 1);
  const offset = rowsPerPage * page + rowsPerPage + 1;
  return [limit, offset];
};
