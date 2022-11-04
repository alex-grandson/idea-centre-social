import { FC, useState, useEffect } from 'react'
import ContentContainer from '../../components/global/ContentContainer'
import ProjectCard from '../../components/project/ProjectCard'
import ProjectService from '../../api/ProjectService'
import { Project } from '../../types/Project'
import Grid from '@mui/material/Grid'
import useFetch from '../../hooks/useFetch'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

const ProjectPage: FC = () => {
  // const [pageData, setPageData] = useState<Project[]>([])
  const { loadMoreRef, page } = useInfiniteScroll()
  const { loading, projects } = useFetch(page)
  // const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <ContentContainer>
        {projects.map((item) => (
          <Grid item xs={6}>
            <ProjectCard project={item} />
          </Grid>
        ))}
      </ContentContainer>
      <div
        style={{ position: 'relative', bottom: '500px' }}
        ref={loadMoreRef}
      ></div>
    </>
  )
}

export default ProjectPage
