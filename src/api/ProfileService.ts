import { PreparedInfo, Profile } from '../types/Profile'

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
  static getProfile = (uuid: string) => {
    return api.get<Profile>(`profile/${uuid}`)
  }

  static createProfile = (profile: Profile) => {
    return api.post('/profile', { profile })
  }

  static prepareProfile = () => {
    return api.get<PreparedInfo>('/profile-prepare')
  }
}
