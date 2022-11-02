import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fade from '@mui/material/Fade'
import AdbIcon from '@mui/icons-material/Adb'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import NavLink from '../NavLink'
import { headerMenuElements } from '../../constants/HeaderMenuElements'

const settings = ['Профиль', 'Dashboard', 'Выход']

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}

function ScrollTop(props: Props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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

export default function Header(props: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='static' style={{ backgroundColor: '#202020' }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {/* desktop */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'row-reverse', md: 'row' },
                // gap: '30vw',
              }}
            >
              <Link href='/' style={{ textDecoration: 'none' }}>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  <img
                    style={{
                      boxSizing: 'border-box',
                      width: 'auto',
                      height: 70,
                      maxHeight: 70,
                    }}
                    src='/logo_light.png'
                    alt='iTMO'
                  />
                </Box>
              </Link>

              {/* mobile */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' },
                }}
              >
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {headerMenuElements.map((headerMenuElement) => (
                    <Link
                      href={headerMenuElement.url}
                      style={{ textDecoration: 'none' }}
                    >
                      <MenuItem
                        key={headerMenuElement.title}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography textAlign='center'>
                          {headerMenuElement.title}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
                <Link href='/' style={{ textDecoration: 'none' }}>
                  <Box>
                    <img
                      style={{
                        boxSizing: 'border-box',
                        width: 'auto',
                        height: 70,
                        maxHeight: 70,
                      }}
                      src='/logo_light.png'
                      alt='iTMO'
                    />
                  </Box>
                </Link>
              </Box>

              {/* Desktop */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  m: '0 auto',
                  pr: '5%',
                  pl: '5%',
                }}
              >
                {headerMenuElements.map((headerMenuElement) => (
                  <NavLink
                    href={headerMenuElement.url}
                    handleCloseNavMenu={handleCloseNavMenu}
                  >
                    {headerMenuElement.title}
                  </NavLink>
                ))}
              </Box>

              {/* <Link

                    href={headerMenuElement.url}
                    style={{ textDecoration: 'none', width: '80%' }}
                  >
                    <Button
                      key={headerMenuElement.title}
                      onClick={handleCloseNavMenu}
                      sx={{
                        fontSize: '18px',
                        my: 2,
                        color: 'white',
                        display: 'block',
                        height: '100%',
                        width: '100%',
                        m: '0 auto',
                        '&:hover': { backgroundColor: 'transparent' },
                      }}
                    >
                      {headerMenuElement.title}
                    </Button>
                  </Link>
                ))}
              </Box> */}
            </Box>

            {/* Global */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
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
    </React.Fragment>
  )
}
