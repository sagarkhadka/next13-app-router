import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { providerTypes } from './routs'
import { connectToDB } from '@utils/database'
import User from '@models/user'

// console.log({
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET
// })

// interface AuthOptions {
//   signIn(): Promise<void>
// }

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    } as providerTypes)
  ],

  async session({ session }: any) {
    const sessionUser = await User.findOne({
      email: session.user.email
    })

    session.user.id = sessionUser._id.toString()
    return session
  },

  async signIn({ profile }: any) {
    try {
      await connectToDB()

      // check if a user exists
      const userExists = await User.findOne({
        email: profile.email
      })

      // if not, create new
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(' ', '').toLowerCase(),
          image: profile.picture
        })
      }

      return true
    } catch (err) {
      console.log(err)
    }
  }
})

export { handler as GET, handler as POST }
