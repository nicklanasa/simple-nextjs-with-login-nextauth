import {
  Box,
  Button
} from "@chakra-ui/react"
import { signIn, signOut, useSession } from "next-auth/react"
import SignInHero from "../components/sign-in-hero"

function Home() {
  const { status, data: session } = useSession()
  if (status === "authenticated") {
    return (
      <Box textAlign="center">
        <SignInHero />
        <p>Signed in as {session.user.name}</p>
        <br />
        <Button onClick={() => signOut()}>
          Leave
        </Button>
      </Box>
    )
  } else {
    return (
      <Box textAlign="center">
        <SignInHero />
        <br />
        <Button onClick={() => signIn()}>
          Enter
        </Button>
      </Box>
    )
  }
}

export default Home
