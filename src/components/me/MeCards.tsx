import { FC, ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Paper, Typography, Avatar, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { Profile } from '../../types/Profile'

const Item = styled(Paper)(() => ({
  backgroundColor: 'white',
  textAlign: 'left',
  color: 'black',
  boxShadow: '5',
  borderRadius: 12,
  padding: '2%',
}))

interface MeProps {
  profile: Profile
}

const MeCards: FC<MeProps> = ({ profile }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        gap: '20px',
      }}
    >
      <Item>
        <Box display='flex' justifyContent='space-between' sx={{ mb: '2%' }}>
          <Typography variant='h4'>Основная информация</Typography>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', gap: '3%' }}>
          <Avatar
            src={profile.image}
            alt={profile.firstname}
            sx={{ height: 100, width: 100 }}
          />

          <Box alignSelf={'center'}>
            <Typography>{`${profile.lastname} ${profile.firstname} ${
              profile.patronymic ? profile.patronymic : ''
            }`}</Typography>
            <Typography>{`${profile.citizenship_uuid}, ${profile.city_uuid}`}</Typography>
            <Typography>{profile.gender ? profile.gender : ''}</Typography>
          </Box>
          <Box>
            <Typography></Typography>
            <Typography></Typography>
          </Box>
        </Box>
      </Item>
      <Item>
        <Box display='flex' justifyContent='space-between' sx={{ mb: '2%' }}>
          <Typography variant='h4'>Компетенции</Typography>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', gap: '15%' }}>
          <Box>
            <Typography variant='h6'>Образование:</Typography>
            <Typography>
              {profile.education ? profile.education : 'Не указано'}
            </Typography>
            <Typography variant='h6'>Специальность:</Typography>
            <Typography>{profile.employment_uuid}</Typography>
            <Typography variant='h6'>Опыт:</Typography>
            <Typography>{`${profile.experience} лет`}</Typography>
          </Box>
          <Box>
            <Typography variant='h6'>Организация:</Typography>
            <Typography>
              {profile.team ? profile.team : 'Не указано'}
            </Typography>
            <Typography variant='h6'>Роль:</Typography>
            <Typography>
              {profile.role ? profile.role : 'Не указано'}
            </Typography>
            <Typography variant='h6'>ИНН организации:</Typography>
            <Typography>
              {profile.company_inn ? profile.company_inn : 'Не указано'}
            </Typography>
          </Box>
          <Box>
            <Typography variant='h6'>Навыки:</Typography>
            <Typography>{profile.skill}</Typography>
            <Typography variant='h6'>Достижения:</Typography>
            <Typography>{profile.achievement}</Typography>
            <Typography variant='h6'>Изобретения:</Typography>
            <Typography>{profile.patent}</Typography>
          </Box>
        </Box>
      </Item>
      <Item>
        <Box display='flex' justifyContent='space-between' sx={{ mb: '2%' }}>
          <Typography variant='h4'>Контакты</Typography>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Box>

        <Box display={'flex'}>
          <Box sx={{ mr: '20%' }}>
            <Typography variant='h6'>Электронная почта:</Typography>
            <Typography>{profile.email}</Typography>
          </Box>
          <Box>
            <Typography variant='h6'>Номер телефона:</Typography>
            <Typography>{profile.contact}</Typography>
          </Box>
        </Box>
      </Item>
      <Item>
        <Box display='flex' justifyContent='space-between' sx={{ mb: '2%' }}>
          <Typography variant='h4'>Пароль</Typography>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Box>
        <Typography variant='h6'>**************</Typography>
        ???
      </Item>
    </Box>
  )
}

export default MeCards
