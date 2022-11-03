import axios from 'axios'
import { LoginRequest } from '../types/auth/Login'
import { RegisterRequest } from '../types/auth/Register'

const API_HOST = process.env.API_HOST || 'http://localhost:9000/api/v1/'

export const api = axios.create({
  baseURL: API_HOST,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
export default class AuthService {
  static login = (data: LoginRequest) => {
    return api.post('/login', data)
  }

  static register = (data: RegisterRequest) => {
    return api.post('/profile-prepare', data)
  }

  static logout = () => {
    return api.get('/logout')
  }

  // static createProfile = (profile: Profile) => {}
}
