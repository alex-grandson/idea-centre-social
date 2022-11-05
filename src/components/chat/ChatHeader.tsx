import { Avatar, Box, ButtonBase, Typography } from '@mui/material'

import { FC } from 'react'

interface ChatHeaderProps {
  chatName: string
}

const ChatHeader: FC<ChatHeaderProps> = ({ chatName }) => {
  return (
    <Box display={'flex'}>
      <ButtonBase
        sx={{
          width: '100%',
          py: 1,
          px: 2,
          display: 'flex',
          justifyContent: 'start',
        }}
      >
        <Avatar
          sx={{ bgcolor: '#20202080', width: 36, height: 36, mr: 2 }}
          alt='Remy Sharp'
          src='/broken-image.jpg'
        >
          {chatName[0].toUpperCase()}
        </Avatar>
        <Typography justifySelf={'start'}>{chatName}</Typography>
      </ButtonBase>
    </Box>
  )
}

export default ChatHeader
