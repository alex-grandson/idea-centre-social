import { Profile } from './Profile'

type Slot = {
  category: string
}

export type Project = {
  uuid: string
  name: string
  description: string
  image: string
  presentation_link: string
  creator: Profile
  date: string
  slots: Slot[]
}
