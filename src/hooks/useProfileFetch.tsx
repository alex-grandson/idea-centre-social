import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'

import ProfileService from '../api/ProfileService'
import { Profile } from '../types/Profile'

function useProfilesFetch(page: number) {
  const [loading, setLoading] = useState<boolean>(false)
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [end, setEnd] = useState<boolean>(false)

  const getProfiles = useCallback(async () => {
    try {
      if (!end) {
        setLoading(true)
        const response = await ProfileService.getPageOfProfiles(page)
        const data: any = response.data
        if (!data.length) {
          setEnd(true)
        }
        setProfiles((prev) => [...prev, ...data])
        setLoading(false)
      }
    } catch (err) {
      console.error(err)
    }
  }, [page])

  useEffect(() => {
    getProfiles()
  }, [getProfiles])

  return { loading, profiles }
}

export default useProfilesFetch
