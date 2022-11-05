import { FC } from 'react'
import ContentContainer from '../../components/global/ContentContainer'
import MeCards from '../../components/me/MeCards'
import { Profile } from '../../types/Profile'

const mock = {
  UUID: 'fa044ee2-cebd-484d-9697-9f8b25646188',
  email: 'Grigory.Valevin@gmail.com',
  firstname: 'Григорий',
  lastname: 'Валевин',
  experience: 10, //?
  achievement: '5000 часов в доте',
  patronymic: 'Александрович', //?
  country: 'Россия', //?
  citizenship: 'Россия', //?
  city: 'Санкт-Петербург', //?
  gender: 'Мужчина', //?
  phone: '89996688572', //?
  imageURL:
    'https://sun9-78.userapi.com/impg/TzT4iG3pCUaVzsOMntof9fptQClkHrAY1czPSg/mQqfexGEaGo.jpg?size=604x589&quality=96&sign=2df7c6a2e7f1f70e9c8a57a76b6bb652&type=album', //?
  employment: 'Самозанятый', //?
  skill:
    'Потный задр a;lskdjf;laksj ;lkajsd f;lkajs ; a;lskdjf;lasdf ajsgdfjkhyg akjshgdfkj hgiu iauysgdkfjhgqwieuyt kajhsgdfkjyqgieu ry aksjhdgfkjash fkgjh iuqwekjh gsadf ', //?
  team: 'NaVi',
  team_role: 'Кич',
  patent: 'мастурбация',
  company_inn: 12039847, //////////???????
  role: 'admin', //?
  education: 'Школа 8 классов', ////////???????
}

const Me: FC = () => {
  return (
    <ContentContainer>
      <MeCards profile={mock} />
    </ContentContainer>
  )
}

export default Me
