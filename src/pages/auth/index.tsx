import AuthForms from '../../components/auth/AuthForms'
import { Box } from '@mui/material'
import ContentContainer from '../../components/global/ContentContainer'

const AuthPage = () => {
  return (
    <ContentContainer>
      <Box sx={{ width: '40%', m: '0 auto' }}>
        <AuthForms />
      </Box>
    </ContentContainer>
  )
}
export default AuthPage
