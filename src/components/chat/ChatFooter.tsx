import { Box, IconButton, Input } from '@mui/material'

import { chatStore } from '../../pages/chat'
import { observer } from 'mobx-react-lite'
import SendIcon from '@mui/icons-material/Send'
import { SendMessage } from '../../types/chat/SendMessage'
import { useFormik } from 'formik'
import { useState } from 'react'

const ChatFooter = () => {
  // const [message, setMessage] = useState('')
  const formik = useFormik<SendMessage>({
    initialValues: {
      content: '',
      chatUUID:
        chatStore.chatUUID != undefined
          ? chatStore.chatUUID
          : '0000-0000-0000-000',
    },
    onSubmit: (values) => {
      console.log(values)
      formik.resetForm()
    },
  })
  return (
    <Box component={'form'} display={'flex'} onSubmit={formik.handleSubmit}>
      <Input
        name={'content'}
        value={formik.values.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        onReset={formik.handleReset}
        placeholder='Введите сообщение'
        sx={{
          width: '100%',
        }}
      />
      <Box>
        <IconButton aria-label='send' type={'submit'}>
          <SendIcon fontSize='inherit' />
        </IconButton>
      </Box>
    </Box>
  )
}

export default observer(ChatFooter)
