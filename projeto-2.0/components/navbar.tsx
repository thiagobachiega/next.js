import Link from 'next/link'
import Logo from '../public/Logo.png'
import Image from 'next/image'

const Navbar: React.FC = () => {
    return(
        <div className="w-screen bg-bg-purple h-20 flex ">
            <div className="w-3/4 m-auto flex justify-between items-center">
                <Link href='/'><a><Image src={Logo} height='60' width='60' className='rounded-full'></Image></a></Link>
                
                <div className='flex '>
                    <ul className="list-none text-white flex text-xl">
                        <Link href='/'><a className='pr-5 hover:text-text-purple'><li>Home</li></a></Link>
                        <Link href='/alunos'><a className='pr-5 hover:text-text-purple'><li>Alunos</li></a></Link>
                        <Link href='/cadastro'><a className='pr-5 hover:text-text-purple'><li>Cadastro</li></a></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar