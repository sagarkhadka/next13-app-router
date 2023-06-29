import '@styles/global.css'
import { Manrope, Sora } from '@next/font/google'
import PageHeader from '@components/PageHeader'

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
      className={`${manrope.variable} ${sora.variable} font-sans`}>
      {/* <style
        jsx
        global>
        html{' '}
        {`
          --manrope: ${manrope.style.fontFamily};
          --sora: ${sora.style.fontFamily};
        `}
      </style> */}

      <body className='font-manrope'>
        <PageHeader />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
