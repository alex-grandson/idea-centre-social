import react, { Children, FC } from 'react'
import Box from '@mui/material/Box'

interface ContentContainerProps {
  children: React.ReactNode
}

const ContentContainer: FC<ContentContainerProps> = ({ children }) => {
  return (
    <Box sx={{ width: { md: '70%', xs: '90%' }, m: '0 auto' }}>{children}</Box>
  )
}

export default ContentContainer
