import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'
import { Project } from '../types/Project'
import ProjectService from '../api/ProjectService'

function useFetch(page: number) {
  const [loading, setLoading] = useState<boolean>(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [end, setEnd] = useState<boolean>(false)

  const getProjects = useCallback(async () => {
    try {
      if (end === false) {
        setLoading(true)
        const response = await ProjectService.getAllProjects()
        const data: any = response.data
        data ? () => setEnd(false) : () => setEnd(true)
        setProjects((prev) => [...prev, ...data])
        setLoading(false)
      }
    } catch (err) {
      console.error(err)
    }
  }, [page])

  useEffect(() => {
    getProjects()
  }, [getProjects])

  return { loading, projects }
}

export default useFetch
