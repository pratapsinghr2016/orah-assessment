import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Images } from "assets/images";
import React from "react";
import { debounce } from "shared/helpers/performance-utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      width: "100%",
      alignItems: "center",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

type SearchInputPropTypes = {
  searchFn: (value: string) => void;
  searchRef: any;
  width: number;
};

export default function SearchInput(props: SearchInputPropTypes) {
  const classes = useStyles();
  const { width, searchRef, searchFn } = props;

  const inputChangeHandler = debounce(searchFn);

  return (
    <Paper
      component="form"
      className={classes.root}
      style={{
        width,
      }}
    >
      <InputBase
        inputRef={searchRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          inputChangeHandler(e.target.value)
        }
        className={classes.input}
        placeholder="Search Name"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <img src={Images.search} width={20} height={20} />
      </IconButton>
    </Paper>
  );
}
