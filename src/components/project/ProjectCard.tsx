import React, { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'

const ProjectCard: FC = () => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: '25px', margin: '0 auto' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height=''
          image='https://sun9-4.userapi.com/impg/koPgnUiEOQWr95sZu3M7EBTMDWdmHR7E3aGAWA/rh6-eoWGwyU.jpg?size=1262x1000&quality=95&sign=bda36a2361801f2c3d2e699e378e3edd&type=album'
          alt='iguana (perico)'
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            01.11.2022
          </Typography>
          <Typography variant='h5' component='div'>
            Уборка улиц
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              height: '50px',
            }}
          >
            <Avatar
              alt='Леха внук'
              src='https://sun9-80.userapi.com/impg/kmXHp2VTZ8poy1PUH1Pnea3s6nFf188nKzjYLw/WkQPl1rWALI.jpg?size=1266x1688&quality=95&sign=8a83cb2e7a33ef7636c2510c3e30e604&type=album'
            />
            <Typography sx={{ alignSelf: 'center' }}>Леха внук</Typography>
          </Box>

          <Typography variant='body2' sx={{ mt: '10px' }}>
            Требуется:
            <br />
            - Дворник
            <br />
            - Специалист по лазерам
            <br />
            - Фронтендер
            <br />- Танкист
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProjectCard
