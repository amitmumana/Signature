import React from "react"
import { Box } from "@mui/material"
import { TextField, InputAdornment } from "@mui/material"

const CustomTextField = ({ placeholder, onChange, value, icon, name }: any) => {
  return (
    <TextField
      sx={{
        margin: "8px",
        height: "54px",
        width: "324px"
      }}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: <InputAdornment position="start">{icon}</InputAdornment>
      }}
    />
  )
}

export default CustomTextField
