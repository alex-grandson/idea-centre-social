import { FC } from 'react'
import ProjectCard from '../../components/profiles/ProfileCard'
import useProfilesFetch from '../../hooks/useProfileFetch'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import ContentContainer from '../../components/global/ContentContainer'
import ProfileCard from '../../components/profiles/ProfileCard'
import { Grid } from '@mui/material'

const ProfilePage: FC = () => {
  const { loadMoreRef, page } = useInfiniteScroll()
  const { loading, profiles } = useProfilesFetch(page)
  return (
    <>
      <ContentContainer>
        <Grid container spacing={3} columns={{ xs: 6, md: 12 }}>
          {profiles.map((item, index) => (
            <Grid item xs={6}>
              <ProfileCard profile={item} key={index} />
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
export default ProfilePage
