import { ChatHistory } from './ChatHistory'
import { User } from '../User'

export type Chat = {
  projectUuid?: string // только в групповом чате
  history?: ChatHistory
  type: 'group' | 'direct'
  users: User[]
  imageUrl?: string // только в групповом чате - ссылка на картинку проекта
}
