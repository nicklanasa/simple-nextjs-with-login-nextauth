import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const isCorrectCredentials = credentials =>
      credentials.username === process.env.NEXTAUTH_USERNAME &&
      credentials.password === process.env.NEXTAUTH_PASSWORD

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "text" }
      },
      async authorize(credentials) {
        if (isCorrectCredentials(credentials)) {
          const user = { id: 1, name: "Admin" }
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ]
}

export default (req, res) => NextAuth(req, res, options)
