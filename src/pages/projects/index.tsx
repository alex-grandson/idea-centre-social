import { FC, useState, useEffect } from 'react'
import ContentContainer from '../../components/global/ContentContainer'
import ProjectCard from '../../components/project/ProjectCard'
import ProjectService from '../../api/ProjectService'
import { Project } from '../../types/Project'
import Grid from '@mui/material/Grid'

const ProjectPage: FC = () => {
  const [pageData, setPageData] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    ProjectService.getAllProjects()
      .then((response) => {
        setPageData(response.data)
      })
      .catch()
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <ContentContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        pageData.map((item) => (
          <Grid item xs={6}>
            <ProjectCard project={item} />
          </Grid>
        ))
      )}
    </ContentContainer>
  )
}

export default ProjectPage
