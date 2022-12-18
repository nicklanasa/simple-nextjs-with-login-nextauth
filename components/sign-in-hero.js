import Image from "next/image"

const heroStyle = {
  marginLeft: "auto",
  marginRight: "auto"
}

const SignInHero = () => {
  const heroImg = "/super-secret.png"

  return (
    <Image
      style={heroStyle}
      src={heroImg}
      width={400}
      height={400}
    />
  )
}

export default SignInHero
