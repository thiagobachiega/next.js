import Container from "../components/container"
import Navbar from "../components/navbar"
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Container>
        <div className="bg-bg-purple rounded-md text-white w-1/2 p-10 mt-40 flex flex-col text-left ">
          <h1 className="text-6xl font-bold underline mb-3 ">Class</h1>
          <p className="text-xl">Bem vindo(a) ao <span className="font-bold">Class</span>,</p>
          <p className="text-xl">Sua plataforma virtual de ensino.</p>
        </div>

        <div className="bg-bg-purple rounded-md text-white p-10 m-10 self-end flex flex-col text-left">
          <p className="text-xl"><Link href='/cadastro'><a>Comece agora mesmo!</a></Link></p>
        </div>
      </Container>
    </div>
  )
}
