import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Fab,
  Fade,
  Toolbar,
  useScrollTrigger,
} from '@mui/material'

// import { Context } from '../../pages/_app'
import HeaderNavContent from './HeaderNavContent'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { observer } from 'mobx-react-lite'
import ProfileAvatar from './ProfileAvatar'
// import { useContext } from 'react'
import { authStore } from '../../pages/_app'
import Link from 'next/link'

interface Props {
  window?: () => Window
  children: React.ReactElement
}

function ScrollTop(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

const Header = (props: Props) => {
  // const { authStore } = useContext(Context)

  return (
    <>
      <CssBaseline />
      <AppBar position='static' style={{ backgroundColor: '#202020' }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <HeaderNavContent />

            <Box
              sx={{
                minWidth: '138px',
                display: 'flex',
                justifyContent: 'right',
              }}
            >
              {authStore.user == undefined ? (
                <ProfileAvatar />
              ) : (
                <Link href={'/auth'}>
                  <Button
                    variant='outlined'
                    sx={{
                      color: '#38B2AC',
                      borderColor: '#38B2AC',
                      '&:hover': { borderColor: '#38B2AC' },
                    }}
                  >
                    Авторизация
                  </Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar id='back-to-top-anchor' />
      <Container>{props.children}</Container>
      <ScrollTop {...props}>
        <Fab size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default observer(Header)
