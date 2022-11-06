import { FC, useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import {
  Box,
  Paper,
  Typography,
  Avatar,
  IconButton,
  Modal,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { Profile } from '../../types/Profile'
import ChangePassModal from './ChangePassModal'
import ProfileService from '../../api/ProfileService'

const Item = styled(Paper)(() => ({
  backgroundColor: 'white',
  textAlign: 'left',
  color: 'black',
  boxShadow: '5',
  borderRadius: 12,
  padding: '5%',
}))

interface MeProps {
  profile: Profile
}

const MeCards: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [profileData, setProfileData] = useState<Profile>({} as Profile)

  useEffect(() => {
    const me = async () => {
      setIsLoading(true)
      try {
        const response = await ProfileService.getProfileByUUID(
          'fa044ee2-cebd-484d-9697-9f8b25646188'
        )
        const data = response.data[0]
        setProfileData(data)
      } catch (err) {
        console.error(err)
      }
      setIsLoading(false)
    }
    me()
  }, [])

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  if (isLoading) {
    return <p>Loading...</p>
  } else {
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
            <IconButton sx={{ display: 'none' }}>
              <EditIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', gap: '3%' }}>
            <Avatar
              src={profileData.imageURL}
              alt={profileData.firstname}
              sx={{ height: 100, width: 100 }}
            />

            <Box alignSelf={'center'}>
              <Typography variant='h6'>{`${profileData.lastname} ${
                profileData.firstname
              } ${
                profileData.patronymic ? profileData.patronymic : ''
              }`}</Typography>
              <Typography>{`${profileData.citizenship}, ${profileData.city}`}</Typography>
              <Typography>
                {profileData.gender ? profileData.gender : ''}
              </Typography>
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
            <IconButton sx={{ display: 'none' }}>
              <EditIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', gap: '15%' }}>
            <Box>
              <Typography variant='h6'>Образование:</Typography>
              {/* <Typography>
                {profileData.education ? profileData.education : 'Не указано'}
              </Typography> */}
              <Typography variant='h6'>Специальность:</Typography>
              {/* <Typography>{profileData.employment_uuid}</Typography> */}
              <Typography variant='h6'>Опыт:</Typography>
              <Typography>{`${profileData.experience} лет`}</Typography>
            </Box>
            <Box>
              <Typography variant='h6'>Организация:</Typography>
              <Typography>
                {profileData.team ? profileData.team : 'Не указано'}
              </Typography>
              <Typography variant='h6'>Роль:</Typography>
              <Typography>
                {profileData.role ? profileData.role : 'Не указано'}
              </Typography>
              <Typography variant='h6'>ИНН организации:</Typography>
              {/* <Typography>
                {profileData.company_inn
                  ? profileData.company_inn
                  : 'Не указано'}
              </Typography> */}
            </Box>
          </Box>
        </Item>
        <Item>
          <Box display='flex' justifyContent='space-between' sx={{ mb: '2%' }}>
            <Typography variant='h4'>Успехи</Typography>
            <IconButton sx={{ display: 'none' }}>
              <EditIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant='h6'>Навыки:</Typography>
              <Typography>{profileData.skill}</Typography>
            </Box>
            <Box>
              <Typography variant='h6'>Достижения:</Typography>
              <Typography>{profileData.achievement}</Typography>
            </Box>
          </Box>
        </Item>
        <Item>
          <Box display='flex' justifyContent='space-between' sx={{ mb: '2%' }}>
            <Typography variant='h4'>Контакты</Typography>
            <IconButton sx={{ display: 'none' }}>
              <EditIcon />
            </IconButton>
          </Box>

          <Box display={'flex'}>
            <Box sx={{ mr: '20%' }}>
              <Typography variant='h6'>Электронная почта:</Typography>
              <Typography>{profileData.email}</Typography>
            </Box>
            <Box>
              <Typography variant='h6'>Номер телефона:</Typography>
              <Typography>{profileData.phone}</Typography>
            </Box>
          </Box>
        </Item>
        <Item>
          <Box display='flex' justifyContent='space-between' sx={{ mb: '2%' }}>
            <Typography variant='h4'>Пароль</Typography>
            <IconButton onClick={handleOpen}>
              <EditIcon />
            </IconButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <ChangePassModal />
            </Modal>
          </Box>
          <Typography variant='h6'>••••••••••••••••</Typography>
        </Item>
      </Box>
    )
  }
}

export default MeCards
