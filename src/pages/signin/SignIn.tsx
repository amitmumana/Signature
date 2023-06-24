import React from "react"
import { Box, TextField, Typography, Button, Divider } from "@mui/material"
import CustomTextField from "../../component/ui/CutomTextField"
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import { useNavigate } from "react-router-dom"
import Auth from "../../component/firebase/auth"
import { useFormik } from "formik"
import * as Yup from "yup"

const SignIn = () => {
  const navigate = useNavigate()

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Typography>Login</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <CustomTextField
            name="email"
            placeholder="Email"
            icon={<EmailOutlinedIcon />}
          />
          <CustomTextField
            name="password"
            placeholder="Password"
            icon={<HttpsOutlinedIcon />}
          />
        </Box>
        <Button onClick={() => console.log("okokokoko")} variant="contained">
          LogIn
        </Button>
        <Divider sx={{ width: "20%" }}>OR</Divider>
        <Button onClick={() => navigate("/signup")}>SignUp</Button>
      </Box>
    </>
  )
}

export default SignIn
