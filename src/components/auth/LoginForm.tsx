import { AxiosError, AxiosResponse } from 'axios'
import { Box, Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

import AuthService from '../../api/AuthService'
import { LoginRequest } from '../../types/auth/Login'
import { loginValidation } from '../../validation/login'
import { useFormik } from 'formik'

const LoginForm = () => {
  const [isError, setIsError] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as LoginRequest,
    onSubmit: (values) => {
      console.debug(values)
      // AuthService.login(values)
      //   .then((response: AxiosResponse) => {
      //     if (response.status == 200) {
      //       // router.push('/dashboard/users')
      //     }
      //   })
      //   .catch((err: AxiosError) => {
      //     setIsError(true)
      //     console.log(err)
      //   })e2 (Inmplement login and register forms)
    },
    validationSchema: loginValidation,
  })
  useEffect(() => {}, [isError])
  return (
    <Box
      component={'form'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        p: 4,
      }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        type={'email'}
        label='Почта'
        id='email'
        value={formik.values.email}
        variant='standard'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        onReset={formik.handleReset}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        type={'password'}
        label='Пароль'
        id='password'
        value={formik.values.password}
        variant='standard'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        onReset={formik.handleReset}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button type='submit' variant='contained'>
        Вход
      </Button>
    </Box>
  )
}

export default LoginForm
