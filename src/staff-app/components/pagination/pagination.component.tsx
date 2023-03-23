import TablePagination from "@material-ui/core/TablePagination";
import React from "react";

type FN = (value: number) => void;

type PaginationProp = {
  count: number;
  page: number;
  setPage: FN;
  rowsPerPage: number;
  setRowsPerPage: FN;
};

export default function Pagination({
  count,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}: PaginationProp) {
  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TablePagination
        component="div"
        count={count}
        onChangePage={handleChangePage}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        style={{ margin: "20px 2px" }}
      />
    </>
  );
}
