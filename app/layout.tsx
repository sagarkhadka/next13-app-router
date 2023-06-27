import '@styles/global.css'

export const metadata = {
  title: 'Promtopia',
  description: 'Discover and share the prompts'
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
