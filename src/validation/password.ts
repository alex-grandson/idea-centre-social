import * as yup from 'yup'

export const passwordValidation = yup.object().shape({
  oldPassword: yup
    .string()
    .min(5, 'Длина пароля минимум 5 символов')
    .max(20, 'Длина пароля не должна превышать 20 символов')
    .required('Введите текущий пароль'),
  newPassword: yup
    .string()
    .min(5, 'Длина пароля минимум 5 символов')
    .max(20, 'Длина пароля не должна превышать 20 символов')
    .required('Введите новый пароль'),
  newPasswordConfirmation: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Пароли не совпадают')
    .required('Повторите новый пароль'),
})
