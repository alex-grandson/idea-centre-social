import { LoginRequest, LoginResponse } from '../types/auth/Login'
import { RegisterRequest, RegisterResonse } from '../types/auth/Register'

import AuthService from '../api/AuthService'
import { makeAutoObservable } from 'mobx'

export default class AuthStore {
  user: LoginResponse | RegisterResonse | undefined = undefined
  userUUID: string | undefined = undefined

  constructor() {
    makeAutoObservable(this)
  }

  setUser(user: LoginResponse) {
    this.user = user
  }

  async login({ email, password }: LoginRequest) {
    try {
      const response = await AuthService.login({
        email,
        password,
      })
      // localStorage.setItem('user', JSON.stringify(response.data))
      this.setUser(response.data)
    } catch (error) {
      // console.log(error.response?.data?.message)
    }
  }

  async register({ email, password }: RegisterRequest) {
    try {
      const response = await AuthService.register({
        email,
        password,
      })
      // localStorage.setItem('user', JSON.stringify(response.data))
      this.setUser(response.data)
    } catch (error) {
      console.log(error)
      // console.log(error.response?.data?.message)
    }
  }

  async logout() {
    try {
      await AuthService.logout()
      // localStorage.setItem('user', '')
      this.setUser({} as LoginResponse)
    } catch (error) {
      console.log(error)
      // console.log(error.response?.data?.message)
    }
  }
}
