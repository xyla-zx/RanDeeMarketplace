import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@randee/db"
import bcrypt from "bcryptjs"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Line from "next-auth/providers/line"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  providers: [
    // OAuth Providers
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    Line({
      clientId: process.env.LINE_CLIENT_ID!,
      clientSecret: process.env.LINE_CLIENT_SECRET!,
      issuer: "https://access.line.me",
    }),
    // Credentials (Email/Password)
    {
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const email = credentials.email as string
        const password = credentials.password as string

        // Check if user exists
        let user = await prisma.user.findUnique({
          where: { email },
          include: {
            accounts: true,
            sessions: true,
          },
        })

        if (!user) {
          // Register new user if name is provided
          if (!credentials.name) {
            return null
          }

          const hashedPassword = await bcrypt.hash(password, 12)
          user = await prisma.user.create({
            data: {
              email,
              name: credentials.name as string,
              password: hashedPassword,
              emailVerified: new Date(),
            },
            include: {
              accounts: true,
              sessions: true,
            },
          })
        } else {
          // Verify password for existing user
          if (!user.password) {
            return null
          }
          const isValid = await bcrypt.compare(password, user.password)
          if (!isValid) {
            return null
          }
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          emailVerified: user.emailVerified?.toISOString() ?? null,
        }
      },
    },
  ],
  callbacks: {
    async jwt({ token, user, trigger, session, account }) {
      if (user) {
        token.id = user.id
        token.emailVerified = user.emailVerified
      }

      if (account) {
        token.provider = account.provider
        token.providerAccountId = account.providerAccountId
      }

      if (trigger === "update" && session) {
        return { ...token, ...session }
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.emailVerified = token.emailVerified as string | null
        session.user.provider = token.provider as string | null
        session.user.providerAccountId = token.providerAccountId as string | null
      }
      return session
    },
  },
})
