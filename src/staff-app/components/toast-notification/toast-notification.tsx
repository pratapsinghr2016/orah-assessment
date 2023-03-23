import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import { Images } from "assets/images";
import React from "react";

type ToastPropTypes = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

export default function ToastBar({ open, setOpen }: ToastPropTypes) {
  const handleClose = (
    _: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Rolls are created successfully"
        action={
          <React.Fragment>
            <IconButton
              style={{ borderRadius: 28 }}
              color="secondary"
              size="small"
              onClick={handleClose}
            >
              <img width={5} height={5} src={Images.nullIcon} />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
