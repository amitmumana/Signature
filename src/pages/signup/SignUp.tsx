import React from "react"
import { Box, Typography, Button, Divider } from "@mui/material"
import CustomTextField from "../../component/ui/CutomTextField"
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({})

const SignUp = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values, { resetForm }) => {
      console.log(values, "dispatchValue")
    },
    validationSchema
  })

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Typography>SignUp</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <CustomTextField
            placeholder="UserName"
            icon={<AccountCircleOutlinedIcon />}
          />
          <CustomTextField placeholder="Email" icon={<EmailOutlinedIcon />} />
          <CustomTextField placeholder="Password" icon={<HttpsOutlinedIcon />} />
        </Box>
        <Button variant="contained">Sign Up</Button>
        <Divider sx={{ width: "20%" }}>OR</Divider>
        <Button onClick={() => navigate("/")}>Login</Button>
      </Box>
    </>
  )
}

export default SignUp
