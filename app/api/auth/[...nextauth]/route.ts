import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { providerTypes } from './routs'

// console.log({
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET
// })

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    } as providerTypes)
  ]

  //   async session({ session }) {},

  // async signIn({ profile }) {
  //   try {
  //
  //     }
  //   }
})

export { handler as GET, handler as POST }
