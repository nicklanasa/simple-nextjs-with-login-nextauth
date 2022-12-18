import { SessionProvider } from "next-auth/react"
import Chakra from "../components/chakra"

function Website ({ Component, pageProps, session}) {
  return (
    <SessionProvider>
      <Chakra>
        <Component {...pageProps}/>
      </Chakra>
    </SessionProvider>
  )
}

export default Website
