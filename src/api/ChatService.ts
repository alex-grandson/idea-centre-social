import axios from 'axios'

const API_HOST = process.env.API_HOST || 'http://localhost:9000/api/v1/'

export const api = axios.create({
  baseURL: API_HOST,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
export default class ChatService {
  static getChat = (chatUUID: string) => {
    return api.post('/chat', { chatUUID: chatUUID })
  }
}
