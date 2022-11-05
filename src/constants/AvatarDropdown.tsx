import { AccountTree, Add, Person } from '@mui/icons-material'

export const avatarDropdown = [
  {
    title: 'Профиль',
    href: '/me',
    icon: <Person />,
  },
  {
    title: 'Начать проект',
    href: '/projects/add',
    icon: <Add />,
  },
  {
    title: 'Мои проекты',
    href: '/projects/my',
    icon: <AccountTree />,
  },
]
