import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import CommentIcon from '@mui/icons-material/Comment'
import IconButton from '@mui/material/IconButton'
import { Project } from '../../types/Project'

const style = {
  display: 'inline-block',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '610px',
  height: '190',
  borderRadius: '25px',
  boxShadow: 3,
  p: '0 0 32px 0',
}

interface ProjectCardProps {
  project: Project
}

const ProjectContent: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      sx={{
        display: 'inline-block',
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 610,
        borderRadius: '25px',
        margin: '0 auto',
        boxShadow: 3,
      }}
    >
      <CardMedia
        component='img'
        height='350px'
        image={project.image}
        alt={project.name}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {project.date}
        </Typography>
        <Typography variant='h5' component='div'>
          {project.name}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            height: '50px',
          }}
        >
          <Avatar alt={project.creator.firstname} src={project.creator.image} />
          <Typography
            sx={{ alignSelf: 'center' }}
          >{`${project.creator.firstname} ${project.creator.lastname}`}</Typography>
        </Box>
        {project.slots.map((value) => (
          <ListItem
            disableGutters
            secondaryAction={
              <IconButton aria-label='comment'>
                <CommentIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`${value.category}`} />
          </ListItem>
        ))}
      </CardContent>
    </Card>
  )
}

export default ProjectContent
