export type Profile = {
  uuid: string
  firstname: string
  lastname: string
  patronymic?: string
  country_uuid: string
  city_uuid: string
  citizenship_uuid: string
  gender?: string
  contact: string
  email: string
  image?: string
  education?: string
  experience: number
  employment_uuid: string
  skill: string
  achievement: string
  team?: string
  team_role?: string
  patent: string
  company_inn?: number
  role?: string
}
//Образование
//Опыт (число)
//Профессия
//Навыки
//Достижения
//Компания (+ роль)
//Изобретения
//ИНН компании
