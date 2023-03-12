import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import styled from "styled-components"
import { Colors } from "shared/styles/colors"

type ConfirmationModalProp = {
  open: boolean
  setOpen: (val: boolean) => void
  onAgree: () => void
}

const btnStyle: any = {
  textTransform: "capitalize",
  border: `2px solid ${Colors.blue.base}`,
  color: Colors.blue.base,
  fontWeight: 500,
}

export default function ConfirmationModal({ open, setOpen, onAgree }: ConfirmationModalProp) {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Are you sure?"}</DialogTitle>

        <DialogContent>
          <DialogContentText>
            This is the final submission which highlights the fact that now we have 2 <S.Title color="#13943b">Present</S.Title>, 1 <S.Title color="#f5a623">Late</S.Title>, 1{" "}
            <S.Title color="#9b9b9b">Absent</S.Title>. But still there are{" "}
            <strong style={{ color: "#111", border: "2px solid", padding: "2px", borderRadius: "6.5px" }}>10 Un-rolled</strong> students. Click Submit to hold the rolled student's
            information.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <S.Button style={{ ...btnStyle, color: "#ccc", border: "1px solid #ccc" }} onClick={handleClose} color="secondary" variant="outlined">
            Disagree
          </S.Button>
          <S.Button style={{ ...btnStyle }} onClick={onAgree} color="primary" autoFocus variant="outlined">
            Agree
          </S.Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const S = {
  Title: styled.p`
    display: inline;
    border: 3px solid ${({ color }) => color};
    border-radius: 6.5px;
    padding: 1px 4px;
  `,
  Button: styled(Button)`
    border: 2px solid blue;
  `,
}
