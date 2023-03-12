import React from "react"
import { Switch } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    width: "130px",
    height: "24px",
    padding: "0px",
  },
  switchBase: {
    color: "#23bf58",
    padding: "1px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "#23bf58",
      },
    },
  },
  thumb: {
    color: "white",
    width: "64px",
    height: "22px",
    margin: "0px",
    borderRadius: "10px",
  },
  track: {
    borderRadius: "20px",
    backgroundColor: "#23bf58",
    opacity: "1 !important",
    "&:after, &:before": {
      color: "white",
      fontSize: "11px",
      position: "absolute",
      top: "6px",
    },
    "&:after": {
      content: "'First Name'",
      left: "8px",
    },
    "&:before": {
      content: "'Last Name'",
      right: "7px",
    },
  },
  checked: {
    color: "#23bf58 !important",
    transform: "translateX(62px) !important",
  },
})

type PropTypes = {
  state: boolean
  setState: (value: boolean) => void
}

export default function Switches({ state, setState }: PropTypes) {
  const classes = useStyles()

  const handleChange = (event: { target: { checked: boolean } }) => {
    setState(event.target.checked)
  }

  return (
    <Switch
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      checked={state}
      onChange={handleChange}
      name="switch"
    />
  )
}
