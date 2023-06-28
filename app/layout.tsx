import '@styles/global.css'
import { Manrope, Sora } from '@next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--manrope'
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--sora'
})

export const metadata = {
  title: 'Promtopia',
  description: 'Discover and share the prompts'
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

      <body className='font-manrope'>{children}</body>
    </html>
  )
}

export default RootLayout
