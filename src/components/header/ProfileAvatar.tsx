import {
  Avatar,
  Box,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material'

import Link from 'next/link'

import { avatarDropdown } from '../../constants/AvatarDropdown'
import { Logout } from '@mui/icons-material'
import { useState } from 'react'

const ProfileAvatar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Профиль'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt='Remy Sharp'
            src='https://sun9-70.userapi.com/impg/M9vGoki7hgqhRZQ6XRwatvzqAlrFA21LoWtrdg/nMF6Hq7rFQ4.jpg?size=604x604&quality=96&sign=fd8f66171046300706ab75ea3ea4b699&type=album'
          />
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
        {avatarDropdown.map((setting, idx) => (
          <Link href={setting.href} style={{ textDecoration: 'none' }}>
            <MenuItem
              key={idx}
              onClick={handleCloseUserMenu}
              style={{ color: 'black' }}
            >
              <Box
                display={'flex'}
                alignItems={'center'}
                textAlign='center'
                py={1}
              >
                <Icon
                  sx={{
                    mr: 1.2,
                  }}
                >
                  {setting.icon}
                </Icon>
                <Typography pt={0.4}>{setting.title}</Typography>
              </Box>
            </MenuItem>
          </Link>
        ))}
        <MenuItem onClick={handleCloseUserMenu}>
          <Box
            display={'flex'}
            alignItems={'center'}
            color={'red'}
            textAlign='center'
            py={1}
          >
            <Icon
              sx={{
                mr: 1.2,
              }}
            >
              <Logout />
            </Icon>
            <Typography pt={0.4}>Выход</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default ProfileAvatar
