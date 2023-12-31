import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'


const Ibm = IBM_Plex_Sans({
  subsets: ['greek'],
  weight: ['400', '500', '700'],
  variable: '--font-Ibm',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  other: {
    'impact-site-verification': 'bfbf6254-c516-45d6-a64d-2cb829daac99'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${Ibm.variable} font-Ibm bg-[#111111]`} >

        <main className='bg-[#111111]'>
          {children}
        </main>

      </body>
    </html>
  )
}
