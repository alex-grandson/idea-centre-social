import { Box, Typography } from '@mui/material'

import { authStore } from '../../pages/_app'
import { FC } from 'react'
import { Message } from '../../types/chat/Message'
import { observer } from 'mobx-react-lite'

interface ChatMessageProps {
  message: Message
}

const ChatMessage: FC<ChatMessageProps> = ({ message }) => {
  return (
    <Box width={'100%'} display={'flex'}>
      <Box
        justifySelf={
          message.sender.UUID == authStore.user?.uuid ? 'end' : 'start'
        }
        display={'flex'}
        justifyContent={
          message.sender.UUID == authStore.user?.uuid ? 'row' : 'row-reverse'
        }
        p={2}
        borderRadius={2}
      >
        <Typography component={'span'} color={'#20202080'}>
          {message.date}
        </Typography>
        <Typography>{message.content}</Typography>
      </Box>
    </Box>
  )
}

export default observer(ChatMessage)
