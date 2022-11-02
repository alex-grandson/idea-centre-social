import React, { FC, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import ProjectModalContent from './ProjectContent'
import { Project } from '../../types/Project'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Card
        sx={{
          maxWidth: 300,
          borderRadius: '25px',
          margin: '0 auto',
          boxShadow: 3,
        }}
      >
        <CardActionArea onClick={() => handleOpen()}>
          <CardMedia
            component='img'
            height=''
            image={project.image}
            alt={project.name}
          />
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
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
              <Avatar
                alt={project.creator.firstname}
                src={project.creator.image}
              />
              <Typography sx={{ alignSelf: 'center' }}>
                {`${project.creator.firstname} ${project.creator.lastname}`}
              </Typography>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <ProjectModalContent />
      </Modal>
    </Box>
  )
}

export default ProjectCard
