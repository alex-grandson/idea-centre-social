import { Box, TextField, Typography } from '@mui/material'

import { FC } from 'react'

const ProfileEditForm: FC = () => {
  return (
    <Box>
      <Typography variant='h2' component={'p'}>
        Заполнение анкеты
      </Typography>
      <form>
        <TextField id='standard-basic' label='Standard' variant='standard' />
      </form>
    </Box>
  )
}

export default ProfileEditForm
