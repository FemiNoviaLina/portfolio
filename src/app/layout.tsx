import Navbar from '@/components/Navbar'
import Image from 'next/image'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  icons: {
    icon: '/porto-icon.svg'
  },
  title: 'Femi Novia Lina'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <Navbar />
        {children}
        <div className='h-1 bg-deep-blush-300'></div>
        <Image
          src='/arrow-down.svg'
          alt=''
          width={50}
          height={50}
          className='z-10 fixed bottom-5 right-5'
        ></Image>
      </body>
    </html>
  )
}
