import react, { Children, FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

interface ContentContainerProps {
  children: React.ReactNode
}

const ContentContainer: FC<ContentContainerProps> = ({ children }) => {
  return (
    <Box sx={{ width: '70%', m: '0 auto' }}>
      <Grid container direction='row'>
        {children}
      </Grid>
    </Box>
  )
}

export default ContentContainer
