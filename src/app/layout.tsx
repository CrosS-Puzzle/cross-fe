import React from 'react'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import './globals.css'

import Provider from '@/utils/QueryProviders'
import Header from '@/features/header/Header'
import StoreProvider from './StoreProvider'

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'CS크로스 퍼즐',
  description: 'ChatGPT로 생성된 CS용어를 맞추는 가로세로 낱말퍼즐',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <StoreProvider>
          <Provider>
            <Header />
            <main className="pt-12 lg:h-screen">
              <div className="flex flex-col items-center justify-start space-y-4 text-center break-keep">
                {children}
              </div>
            </main>
          </Provider>
        </StoreProvider>
      </body>
    </html>
  )
}
