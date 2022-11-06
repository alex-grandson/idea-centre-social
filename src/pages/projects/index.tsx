import { FC } from 'react'
import ContentContainer from '../../components/global/ContentContainer'
import ProjectCard from '../../components/project/ProjectCard'
import { Grid, FormGroup, FormControlLabel, Switch, Paper } from '@mui/material'
import useProjectsFetch from '../../hooks/useProjectsFetch'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

const ProjectPage: FC = () => {
  const { loadMoreRef, page } = useInfiniteScroll()
  const { loading, projects } = useProjectsFetch(page)

  return (
    <>
      <Paper sx={{ display: 'block', m: '0 auto', width: '800px' }}>
        <FormGroup sx={{ mb: '30px', width: '100%' }}>
          <FormControlLabel
            sx={{ m: '0 auto' }}
            control={
              <Switch size='medium' color='default' sx={{ m: '0 auto' }} />
            }
            label='ЗАПУСТИТЬ ТУРБО ПОИСК'
          />
        </FormGroup>
      </Paper>
      <ContentContainer>
        <Grid container spacing={3} columns={{ xs: 6, md: 12 }}>
          {projects.map((item, index) => (
            <Grid item xs={6}>
              <ProjectCard project={item} key={index} />
            </Grid>
          ))}
        </Grid>
      </ContentContainer>
      <div style={{ position: 'relative', bottom: '600px' }} ref={loadMoreRef}>
        {/* YAKOR' */}
      </div>
    </>
  )
}

export default ProjectPage
