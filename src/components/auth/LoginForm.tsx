import { AxiosError, AxiosResponse } from 'axios'
import { Box, Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import AuthService from '../../api/AuthService'
import { LoginRequest } from '../../types/auth/Login'
import { loginValidation } from '../../validation/login'
import { useFormik } from 'formik'

const ModifiedTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#202020',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#202020',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: '#202020',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#202020',
    },
  },
})

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
      //   })
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
      <ModifiedTextField
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
      <ModifiedTextField
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
      <Button
        type='submit'
        variant='contained'
        sx={{
          backgroundColor: '#38B2AC',
          '&:hover': { backgroundColor: '#38B2AC' },
        }}
      >
        Вход
      </Button>
    </Box>
  )
}

export default LoginForm
