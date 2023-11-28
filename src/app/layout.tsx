import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import LenisProvider from '@/components/Providers/LenisProvider'
import Header from '@/components/Header'
const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deb',
  description: 'Building interfaces for the web.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body className=" dark:bg-black dark:text-white">

        <Header />
        <LenisProvider>
          <main>{children}</main>
        </LenisProvider>

      </body>
    </html>
  )
}
