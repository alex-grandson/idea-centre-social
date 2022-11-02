import { AxiosError, AxiosResponse } from 'axios'
import { Box, Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

import AuthService from '../../api/AuthService'
import { RegisterRequest } from '../../types/auth/RegisterRequest'
import { registerValidation } from '../../validation/register'
import { useFormik } from 'formik'

const RegisterForm = () => {
  const [isError, setIsError] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as RegisterRequest,
    onSubmit: (values) => {
      console.debug(values)
      AuthService.register(values)
        .then((response: AxiosResponse) => {
          if (response.status == 200) {
            // router.push('/projects')
          }
        })
        .catch((err: AxiosError) => {
          setIsError(true)
          console.log(err)
        })
    },
    validationSchema: registerValidation,
  })
  useEffect(() => {}, [isError])
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          p: 4,
        }}
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
        <TextField
          type={'password'}
          name={'passwordConfirmation'}
          id={'passwordConfirmation'}
          label='Повторите пароль'
          variant='standard'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onReset={formik.handleReset}
          error={
            formik.touched.passwordConfirmation &&
            Boolean(formik.errors.passwordConfirmation)
          }
          helperText={
            formik.touched.passwordConfirmation &&
            formik.errors.passwordConfirmation
          }
        />
        <Button type='submit' variant='contained'>
          Регистрация
        </Button>
      </Box>
    </form>
  )
}

export default RegisterForm
