import * as React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '../components/Link'
import Typography from '@mui/material/Typography'

export default function Home() {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          my: 4,
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom>
          НЮХАНИ БЕБРАЧЬКИ АБОБУС
        </Typography>
      </Box>
    </Container>
  )
}
