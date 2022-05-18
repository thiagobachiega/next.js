import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/Logo.png'

export default function Navbar() {
    return(
        <div className="w-screen bg-bg-purple h-20 flex ">
            <div className="w-3/4 m-auto flex justify-between items-center">
            <Link href='/'><a><Image src={Logo} width='50px' height='50px'></Image></a></Link>
                <navbar className='flex '>
                    <ul className="list-none text-white flex text-xl">
                        <Link href='/'><a className='pr-5'><li>Home</li></a></Link>
                        <Link href='../alunos'><a className='pr-5'><li>Alunos</li></a></Link>
                        <Link href='../cadastro'><a className='pr-5'><li>Cadastro</li></a></Link>
                    </ul>
                </navbar>
            </div>
        </div>
    )
}