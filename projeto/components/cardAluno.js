import Image from "next/image"
import Logo from '../public/logo.png'

export default function CardAluno() {
    return(
        <div className="w-full bg-white p-10 flex flex-col text-left">
            <div className="self-center">
                <Image src={Logo} height='100' width='100' className='rounded-full'></Image>
            </div>
            <div className="text-center flex flex-col">
                <h2 className="text-4xl font-bold mt-5 pt-5 border-t-4 border-text-purple">Thiago</h2>
                <p className="text-2xl">22</p>
            </div>
            <p className="text-2xl pl-36">Cursos:</p>
                <ul className="pl-40">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                </ul>
        </div>
    )
}