import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CodeMaster Pro - Master Coding Skills Like a Pro',
  description: 'Transform your career with comprehensive coding bootcamps. Learn from industry experts and build real-world projects.',
  keywords: 'coding courses, programming bootcamp, web development, full stack, javascript, python, react',
  authors: [{ name: 'CodeMaster Pro' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}