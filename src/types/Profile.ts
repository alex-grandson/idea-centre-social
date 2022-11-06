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
  patronymic?: string // это картинка ))))
  country?: string
  city?: string
  citizenship?: string
  gender?: string
  phone?: string
  role?: string
  specialization?: string
  education?: Education
}
