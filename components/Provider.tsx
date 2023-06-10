'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'

interface providerProps {
  children: React.ReactNode
  session?: any
}

const Provider = ({ children, session }: providerProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default Provider
