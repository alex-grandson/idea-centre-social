type Company = {
  name: string
  inn: string
}

type Education = {
  university: string
  eduspeciality: string
  graduationYear: number
}

export type Profile = {
  UUID: string
  email: string
  firstname: string
  lastname: string
  experience?: number
  achievement: string
  patronymic?: string
  country?: string
  citezenship?: string
  city?: string
  gender?: string
  phone?: string
  employment?: string
  imageURL?: string
  team?: string
  role?: string
  skill?: string
  company?: Company
  education?: Education
}

//Образование
//Опыт (число)
//Профессия
//Навыки
//Достижения
//Компания (+ роль)
//Изобретения
//ИНН компании
