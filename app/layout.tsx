import { Manrope, Sora } from 'next/font/google'

import PageHeader from '@components/PageHeader'
import '@styles/global.scss'
import Provider from './provider'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--manrope'
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--sora'
})

export const metadata = {
  title: 'Sagar Khadka',
  description: 'Frontend developer with experience in UI design as well'
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang='en'
      className={`${manrope.variable} ${sora.variable} font-sans`}
    >
      <body className='font-sora'>
        <Provider attribute='class' defaultTheme='light' enableSystem>
          <PageHeader />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
