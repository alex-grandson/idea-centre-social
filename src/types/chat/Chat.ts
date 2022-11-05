import { ChatHistory } from './ChatHistory'
import { User } from '../User'

export type Chat = {
  UUID: string
  projectUuid?: string // только в групповом чате
  history?: ChatHistory
  type: 'group' | 'direct'
  users: User[]
}
