import { ProfileData } from './ProfileData'

export type ProjectData = {
  uuid: string
  name: string
  description: string
  image: string
  presentation_link: string
  creator: ProfileData
  date: string
}
