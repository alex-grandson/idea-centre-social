import { Avatar, Box, ButtonBase, Typography } from '@mui/material'
import { chatStore } from '../../pages/chat'
import { FC } from 'react'
import { ChatItem } from '../../types/chat/ChatItem'

interface ChatItemProps {
  chatItem?: ChatItem
}

const ChatItem: FC<ChatItemProps> = ({ chatItem }) => {
  const maxMessageLength = 25

  return (
    <ButtonBase
      sx={{
        width: '98%',
      }}
      onClick={() => {
        chatStore.chatUUID = chatItem?.chatUUID
      }}
    >
      <Box p={2} display={'flex'} gap={2} width={'100%'}>
        <Box>
          <Avatar
            sx={{ bgcolor: '#20202080', width: 56, height: 56 }}
            alt='Remy Sharp'
            src='/broken-image.jpg'
          >
            {chatItem?.chatName[0].toUpperCase()}
            {chatItem?.chatName.split(' ')[1][0].toUpperCase()}
          </Avatar>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={1} width={'100%'}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography component={'p'}>{chatItem?.chatName}</Typography>
            <Typography component={'span'} color={'#20202080'}>
              {chatItem?.lastMessage.date}
            </Typography>
          </Box>
          <Typography
            width={'100%'}
            component={'p'}
            px={1}
            sx={{ bgcolor: '#20202015', borderRadius: 1 }}
            textAlign={'left'}
          >
            {/* @ts-igone */}
            {chatItem?.lastMessage.content.length > maxMessageLength
              ? chatItem?.lastMessage.content.substring(
                  0,
                  maxMessageLength - 3
                ) + '...'
              : chatItem?.lastMessage.content}
          </Typography>
        </Box>
      </Box>
    </ButtonBase>
  )
}

export default ChatItem

ChatItem.defaultProps = {
  chatItem: {
    chatName: 'Имя чата',
    chatUUID: '1083-1234-1234-1234',
    lastMessage: {
      date: '23:45',
      content: 'Понюхай бебры другалек',
      sender: {
        firstName: 'Алексей',
        lastName: 'Куценко',
        UUID: '1234-1234-1234-1234',
      },
    },
  },
}
