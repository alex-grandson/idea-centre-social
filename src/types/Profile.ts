export type Profile = {
  email: string
  firstname: string
  lastname: string
  patronymic?: string
  country_code: string | undefined
  citezenship_uuid: number | undefined
  city_uuid: number | undefined
  gender: string
  phone: string | undefined
  university_uuid?: number
  speciality_uuid?: number
  graduation_year?: number
  experience: number
  employment: string | undefined
  // achivement_id?: number
  team_id?: number
  role?: string
  company_uuid?: number
}

export type PreparedInfo = {
  employment: {
    name: string
    value: 'self_employed' | 'employed' | 'unemployed'
  }[]
  citezenship: [
    {
      name: string
      country_code: string
    }
  ]
  country: {
    name: string
    code: string
  }[]
  cities: {
    [key: string]: {
      name: string
      code: string
      id: number
    }[]
  }
  skills: {
    name: string
    value: string
    category: string
  }[]
}
