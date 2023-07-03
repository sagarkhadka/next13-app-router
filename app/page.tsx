import MainHero from '@components/MainHero'
import MyWorks from '@components/MyWorks'

export const metadata = {
  title: 'Sagar Khadka',
  description: 'Frontend developer with experience in UI design as well'
}

const page = () => {
  return (
    <>
      <MainHero />
      <MyWorks />
    </>
  )
}

export default page
