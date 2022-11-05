import { FC } from 'react'
import ContentContainer from '../../components/global/ContentContainer'
import ProjectCard from '../../components/project/ProjectCard'
import Grid from '@mui/material/Grid'
import useProjectsFetch from '../../hooks/useProjectsFetch'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

const ProjectPage: FC = () => {
  const { loadMoreRef, page } = useInfiniteScroll()
  const { loading, projects } = useProjectsFetch(page)

  return (
    <>
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
