import React from "react"
import { Box } from "@mui/material"
import { TextField, InputAdornment } from "@mui/material"
import { Controller } from "react-hook-form"

const CustomTextField = ({ icon, control, name, placeholder, rules = {} }: any) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { value, onChange, onBlur } }: any) => {
        ;<>
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
              startAdornment: (
                <InputAdornment position="start">{icon}</InputAdornment>
              )
            }}
          />
        </>
      }}
    />
  )
}

export default CustomTextField
