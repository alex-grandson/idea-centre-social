export type Profile = {
  email: string
  firstname: string
  lastname: string
  image: string
  patronymic?: string //?
  country_uuid: string
  city_uuid: string
  citizenship_uuid: string
  gender: string
  contact: string
  education: string
  employment_uuid: string
  experience: number
  skill: string
  achievement: string
  team: string
  team_role: string
  patent: string
  company_inn: number
  role?: string // ?
}
