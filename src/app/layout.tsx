import { Header } from '@/Components/Header/Header'
import type { Metadata } from 'next'
import Footer from '@/Components/Footer/Footer'
import './globals.css'
import { Toaster } from 'sonner'


export const metadata: Metadata = {
  title: 'GetLinked',
  description: 'GetLinked Hackathon',
  icons: [{rel: 'icon', url: './icon.png'}]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        {/* <Toaster theme="dark" position="top-right" close-button  /> */}
      </body>
    </html>
  )
}
