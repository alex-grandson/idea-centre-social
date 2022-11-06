import React, { FC, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import CommentIcon from '@mui/icons-material/Comment'
import IconButton from '@mui/material/IconButton'
import { Profile } from '../../types/Profile'

interface ProfileCardProps {
  profile: Profile
}

const ProfileCard: FC<ProfileCardProps> = ({ profile }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box sx={{ height: '100%' }}>
      <Card
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '25px',
          margin: '0 auto',
          boxShadow: 3,
        }}
      >
        <CardActionArea sx={{ height: '100%' }} onClick={() => handleOpen()}>
          {/* <CardMedia
            sx={{ height: '200px' }}
            component='img'
            image={profile.image}
            alt={profile.name}
          /> */}
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              {profile.email}
            </Typography>
            {/* <Typography variant='h5' component='div'>
              {profile.name}
            </Typography> */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                height: '50px',
              }}
            >
              <Avatar alt={profile.firstname} src={profile.imageURL} />
              <Typography sx={{ alignSelf: 'center' }}>
                {`${profile.firstname} ${profile.lastname}`}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{ overflow: 'scroll' }}
      >
        <Box>BEBRA</Box>
      </Modal>
    </Box>
  )
}

export default ProfileCard
