import { Box, Container, Grid } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import { AxiosError } from 'axios'
import { Chat } from '../../types/chat/Chat'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import ChatService from '../../api/ChatService'
import { chatStore } from '../../pages/chat/index'
import { observer } from 'mobx-react-lite'

interface ChatWindowProps {
  chat?: Chat
}

const ChatWindow: FC<ChatWindowProps> = ({ chat }) => {
  const [chat1, setChat] = useState<Chat>({} as Chat)

  const loadChat = () => {
    if (chatStore.chatUUID) {
      ChatService.getChat(chatStore.chatUUID)
        .then((response) => {
          setChat(response.data)
        })
        .catch((err: AxiosError) => {
          console.error(err)
        })
    }
  }

  useEffect(() => {
    loadChat()
  }, [])

  return (
    <Grid
      container
      gridTemplateColumns={'1fr 10fr 1fr'}
      gridAutoColumns={'1fr'}
      height={'60vh'}
    >
      <Grid item width={'100%'}>
        <ChatHeader chatName={'Имя чата'} />
      </Grid>
      <Grid
        item
        sx={{
          height: '100%',
          overflow: 'scroll',
        }}
      >
        <Container>
          {chat?.history ? (
            chat.history.messages.map((message, idx) => {
              return <ChatMessage key={idx} message={message} />
            })
          ) : (
            <>Нет сообщений</>
          )}
        </Container>
      </Grid>

      <Grid item width={'100%'} pb={2}>
        <ChatFooter />
      </Grid>
    </Grid>
  )
}

export default observer(ChatWindow)
