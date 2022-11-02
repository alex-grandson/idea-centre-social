import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material'
import { PreparedInfo, Profile } from '../../types/Profile'
import { useEffect, useState } from 'react'

import { FC } from 'react'
import { MuiTelInput } from 'mui-tel-input'
import ProfileCreateValidation from '../../validation/profileCreate'
import ProfileService from '../../api/ProfileService'
import React from 'react'
import { useFormik } from 'formik'

const ProfileEditForm: FC = () => {
  const [prepare, setPrepare] = useState({} as PreparedInfo)
  const [isLoading, setIsLoading] = useState(true)
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState(undefined)
  const [country, setCountry] = useState(undefined)
  const [employment, setEmployment] = useState(undefined)
  const handleCounty = (value: string) => {
    if (formik.values.country_code != country) {
      formik.values.city_id = undefined
    }
    setCountry(value)
    formik.values.country_code = value
  }
  const handleCity = (value: number) => {
    formik.values.city_id = value
    setCity(value)
  }
  const handleCitezenship = (value) => {
    console.debug('employment', employment)
    formik.values.citezrnship_id = value
    setCity(value)
  }
  const handleEmployment = (value: string) => {
    console.debug('employment', employment)
    formik.values.employment = value
    setEmployment(value)
  }
  const handlePhone = (newPhone: string) => {
    setPhone(newPhone)
    formik.values.phone = phone
  }

  useEffect(() => {
    ProfileService.prepareProfile()
      .then((response) => {
        setPrepare(response.data)
      })
      .catch()
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    console.log('prepare', prepare)
  }, [prepare])

  const formik = useFormik({
    initialValues: {
      city_id: undefined,
      country_code: undefined,
      email: '',
      citezenship_id: undefined,
      employment: undefined,
      experience: 0,
      firstname: '',
      gender: '',
      lastname: '',
      phone: '',
      skills: [],
    } as Profile,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
      console.log(values)

      // const ISSERVER = typeof window === 'undefined'
      // if (!ISSERVER) {
      //   // formik.values.userBrowser = window.navigator.userAgent
      // }
      // ProfileService.createProfile(values)
      //   .then((response) => {
      //     if (response.status == 200) {
      //       console.log('created!')

      //       // router.push('/dashboard/users')
      //     }
      //   })
      //   .catch((err) => {
      //     console.error(err)
      //   })
    },
    validationSchema: ProfileCreateValidation,
  })
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Typography variant='h2' component={'p'}>
        Заполнение анкеты
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Typography variant='h4' component={'p'}>
              Контактная информация
            </Typography>
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
              label='Фамилия'
              id='lastname'
              value={formik.values.lastname}
              variant='standard'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onReset={formik.handleReset}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
            <TextField
              label='Имя'
              id='firstname'
              value={formik.values.firstname}
              variant='standard'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onReset={formik.handleReset}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />

            <TextField
              label='Отчество'
              id='patronymic'
              value={formik.values.patronymic}
              variant='standard'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onReset={formik.handleReset}
              error={
                formik.touched.patronymic && Boolean(formik.errors.patronymic)
              }
              helperText={formik.touched.patronymic && formik.errors.patronymic}
            />
            <MuiTelInput label='Телефон' value={phone} onChange={handlePhone} />

            {/* EMPLOYMENT */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <Typography variant='h4' component={'p'}>
                Опыт
              </Typography>
              <Autocomplete
                disablePortal
                getOptionLabel={(option) => option.name}
                options={prepare['employment']}
                onChange={(e, value) =>
                  (formik.values.employment = value?.value)
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='Трудоустройство'
                    name='employment'
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <Typography variant='h4' component={'p'}>
                Общая информация
              </Typography>
              <Autocomplete
                id='country_code'
                options={countries}
                autoHighlight
                onChange={(e, value) =>
                  (formik.values.country_code = value?.code)
                }
                onBlur={formik.handleBlur}
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component='li'
                    sx={{ '& > img': { flexShrink: 0, mr: 2 } }}
                    {...props}
                  >
                    <img
                      loading='lazy'
                      width='20'
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=''
                    />
                    {option.label} ({option.code})
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='Гражданство'
                    name='country_code'
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Box>
            <Typography variant='body1'>
              Город для поиска единомышленников
            </Typography>
            {/* COUNTRY INPUT */}
            <Autocomplete
              id='country_code'
              options={countries}
              autoHighlight
              // value={formik.values.country_code}
              onChange={(e, value) =>
                (formik.values.country_code = value?.code)
              }
              onBlur={formik.handleBlur}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component='li'
                  sx={{ '& > img': { flexShrink: 0, mr: 2 } }}
                  {...props}
                >
                  <img
                    loading='lazy'
                    width='20'
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=''
                  />
                  {option.label} ({option.code})
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Страна'
                  name='country_code'
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                />
              )}
            />
            {/* CITY INPUT */}
            <Autocomplete
              disablePortal
              disabled={formik.values.country_code == undefined}
              getOptionLabel={(option) => option.name}
              onChange={(e, value) => (formik.values.city_id = value?.id)}
              options={
                formik.values.country_code != undefined
                  ? prepare.cities[formik.values.country_code]
                  : []
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Город'
                  onChange={formik.handleChange}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <Typography variant='h4' component={'p'}>
                Навыки
              </Typography>
              {/* сфера */}
              {/* Скиллы */}
              {/* TODO: доделать формочку */}
            </Box>
            <Button type='submit'>Отправить</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

interface CountryType {
  code: string
  label: string
  suggested?: boolean
}

const countries: readonly CountryType[] = [
  { code: 'KZ', label: 'Казахстан' },
  { code: 'RU', label: 'Россия' },
]

export default ProfileEditForm
