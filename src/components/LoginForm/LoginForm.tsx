import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormHelperText, IconButton } from "@mui/joy";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
interface emailPasswordProps {
  email: string;
  password: string;
}
export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: emailPasswordProps = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "Invalid password format",
      )
      .required(
        "minimum six digits with one number one capital letter and one small letter is required",
      ),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: any, { resetForm }: any) => {
      if (
        formik.values.email === "admin@gmail.com" &&
        formik.values.password === "Tasnim@1234"
      ) {
        localStorage.setItem("token", "loggedin");
        navigate("/admin");
      } else {
        alert("Invalid credentials");
      }
      resetForm();
      console.log(values);
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background:
          'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url("../../public/images/adminAnalyticDashboard.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Box
        onSubmit={formik.handleSubmit}
        component="form"
        sx={{
          margin: "0px auto",
          backgroundColor: "rgb(213 209 209 / 73%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          padding: { xs: 6, sm: 8 },
          display: "flex",
          flexDirection: "column",
          width: { xs: "90%", sm: "60%", md: "40%" },
          borderRadius: "7px",
          gap: 2,
          opacity: 0.9,
        }}
      >
        <FormControl
          required
          error={formik.touched.email && Boolean(formik.errors.email)}
        >
          <InputLabel
            sx={{
              "& .MuiFormLabel-asterisk": {
                color: "#FF0000",
              },
            }}
          >
            Email
          </InputLabel>
          <OutlinedInput label="Email" {...formik.getFieldProps("email")} />
          <FormHelperText sx={{ color: "#FF0000" }}>
            {formik.touched.email && formik.errors.email}
          </FormHelperText>
        </FormControl>

        <FormControl
          required
          error={formik.touched.password && Boolean(formik.errors.password)}
        >
          <InputLabel
            sx={{
              "& .MuiFormLabel-asterisk": {
                color: "#FF0000",
              },
            }}
          >
            Password
          </InputLabel>
          <OutlinedInput
            label="Password"
            type={showPassword ? "text" : "password"}
            {...formik.getFieldProps("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePassword}
                  sx={{
                    ":hover": {
                      background: "transparent",
                    },
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText sx={{ color: "#FF0000" }}>
            {formik.touched.password && formik.errors.password}
          </FormHelperText>
        </FormControl>
        <Button type="submit" sx={{ mt: 2 }}>
          Sign In
        </Button>
      </Box>
    </Box>
  );
}
