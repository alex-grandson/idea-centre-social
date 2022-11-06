import { Profile } from '../types/Profile'
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
export default class ProfileService {
  static getAllProfiles = () => {
    return api.get<Profile[]>(`profiles`)
  }
  static getPageOfProfiles = (page: number) => {
    return api.get<Profile[]>(`profiles?_limit=4&_page=${page}`)
  }
  static getProfileByUUID = (UUID: string) => {
    return api.get<Profile[]>(`profiles?UUID=${UUID}`)
  }
}
