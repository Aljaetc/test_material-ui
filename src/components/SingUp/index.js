import { useState } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { ReactComponent as GoogleIcon } from './google.svg'
import { ReactComponent as MicrosoftIcon } from './microsoft.svg'
import { useFormik } from 'formik'
import * as yup from 'yup'

import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

function StoryBook() {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <Box width="550px" m="158px auto">
      <Typography variant="h2" component="h1" gutterBottom>
      Sign up to set your brand up for success
      </Typography>
      <Box display="flex" justifyContent="space-between" mb={3.75}>
        <Button 
          variant="contained"
          size="large"
          color="primary"
          startIcon={<GoogleIcon />}
        >
          Sign up with Google
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<MicrosoftIcon />}
        >
          Sign up with Microsoft
        </Button>
      </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection="column" alignItems="start">
            <TextField
              placeholder="Placeholder"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              label="Full Name"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <TextField
              placeholder="Placeholder"
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="filled"
              label="Email Adress"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              // error={!!errors.email}
            />
            <TextField
              placeholder="Placeholder"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment:
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                
              }}
              variant="filled"
              label="Password (8 characters)"
              type={showPassword ? 'text' : 'password'}
              name="password"
              helperText="Please input your password! The password must be at least 8 characters!"
              error={false}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Box>
          <Button
            variant="contained"
            size="large"
            type="submit"
          >
            Sign Up
          </Button>
        </form>                         
    </Box>
  )
}

export default StoryBook
