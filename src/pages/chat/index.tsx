import { Box, Grid, Typography } from '@mui/material'

import ChatItem from '../../components/chat/ChatItem'
import ChatStore from '../../store/ChatStore'
import ChatWindow from '../../components/chat/ChatWindow'
import { observable } from 'mobx'
import { observer } from 'mobx-react-lite'

export const chatStore = new ChatStore()

const ChatPage = () => {
  return (
    <Grid container gap={5}>
      <Grid xs={4} height={'75vh'}>
        <Typography variant='h6' pb={2}>
          Чаты
        </Typography>
        <Box
          sx={{
            height: '100%',
            width: '100%',
            overflowY: 'scroll',
          }}
        >
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </Box>
      </Grid>
      <Grid xs={7}>
        {chatStore.chatUUID == undefined ? <>Не выбран чат</> : <ChatWindow />}
      </Grid>
    </Grid>
  )
}

export default observer(ChatPage)
