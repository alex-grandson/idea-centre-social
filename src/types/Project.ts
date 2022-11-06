import { Profile } from './Profile'

type Slot = {
  category: string
}

export type Project = {
  UUID: string
  name: string
  description: string
  imageURL: string
  presentationLink?: string
  creator: Profile
  date: string
  slots: Slot[]
}
