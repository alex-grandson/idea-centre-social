import { FC } from 'react'
import ContentContainer from '../../components/global/ContentContainer'
import MeCards from '../../components/me/MeCards'
import { Profile } from '../../types/Profile'

const mock = {
  uuid: 'x1kk4',
  firstname: 'Григорий',
  lastname: 'Валевин',
  patronymic: 'Александрович',
  country_uuid: 'Россия',
  city_uuid: 'Санкт-Петербург',
  citizenship_uuid: 'Россия',
  gender: 'Вертосексуал',
  contact: '89996688572',
  email: 'Grigory.Valevin@gmail.com',
  image:
    'https://sun9-78.userapi.com/impg/TzT4iG3pCUaVzsOMntof9fptQClkHrAY1czPSg/mQqfexGEaGo.jpg?size=604x589&quality=96&sign=2df7c6a2e7f1f70e9c8a57a76b6bb652&type=album',
  education: 'Школа 8 классов',
  experience: 10,
  employment_uuid: 'фывазщшг1234',
  skill: 'Потный задр',
  achievement: '5000 часов в доте',
  team: 'NaVi',
  team_role: 'Кич',
  patent: 'мастурбация',
  company_inn: 12039847,
  role: 'admin',
}

const Me: FC = () => {
  return (
    <ContentContainer>
      <MeCards profile={mock} />
    </ContentContainer>
  )
}

export default Me
