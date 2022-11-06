import { FC, useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import styled from '@emotion/styled'
import { passwordValidation } from '../../validation/password'
import { useFormik } from 'formik'
import { PasswordChangeRequest } from '../../types/PasswordChangeRequest'

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

const style = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 3,
  p: 4,
  borderRadius: '25px',
}

const ChangePassModal: FC = () => {
  const [isError, setIsError] = useState(false)
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
    } as PasswordChangeRequest & { newPasswordConfirmation: string },
    onSubmit: (values) => {
      console.debug(values)
      // прикрутить эндпоинт
      // AuthService.register(values)
      //   .then((response: AxiosResponse) => {
      //     if (response.status == 200) {
      //       // router.push('/projects')
      //     }
      //   })
      //   .catch((err: AxiosError) => {
      //     setIsError(true)
      //     console.log(err)
      //   })
    },
    validationSchema: passwordValidation,
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={style}>
        <Typography variant='h4'>Изменение пароля</Typography>
        <ModifiedTextField
          type={'password'}
          variant='standard'
          label='Старый пароль'
          id='oldPassword'
          value={formik.values.oldPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onReset={formik.handleReset}
          error={
            formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
          }
          helperText={formik.touched.oldPassword && formik.errors.oldPassword}
        />
        <ModifiedTextField
          type={'password'}
          variant='standard'
          label='Новый пароль'
          id='newPassword'
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onReset={formik.handleReset}
          error={
            formik.touched.newPassword && Boolean(formik.errors.newPassword)
          }
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <ModifiedTextField
          type={'password'}
          variant='standard'
          label='Подтверждение пароля'
          id='newPasswordConfirmation'
          value={formik.values.newPasswordConfirmation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onReset={formik.handleReset}
          error={
            formik.touched.newPasswordConfirmation &&
            Boolean(formik.errors.newPasswordConfirmation)
          }
          helperText={
            formik.touched.newPasswordConfirmation &&
            formik.errors.newPasswordConfirmation
          }
        />
        <Button
          type='submit'
          variant='contained'
          sx={{
            backgroundColor: '#38B2AC',
            '&:hover': { backgroundColor: '#38B2AC' },
          }}
        >
          Подтвердить
        </Button>
      </Box>
    </form>
  )
}

export default ChangePassModal
