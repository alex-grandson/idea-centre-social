import { Chat } from '../types/chat/Chat'
import { makeAutoObservable } from 'mobx'

export default class ChatStore {
  chatUUID: string | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }
}
