import Image from "next/image"
import Logo from '../public/logo.png'

import { useEffect, useState } from "react"
import Aluno from "../types/aluno"
import { getAlunos } from "../services/get-alunos"
import { BsFillPencilFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import Link from "next/link"
import { delAlunos } from "../services/del-alunos"


const CardAluno: React.FC = () => {

    const [aluno, setAluno] = useState<Aluno[]>([])

    const getSetAlunos = async () => {
        const alunosData = await getAlunos()
        setAluno(alunosData)
        console.log(aluno)
      }
      
      useEffect(() => {
        getSetAlunos()
      }, [])

    return (
        <div>
            {aluno.map((alunos) => (
                  <div className="w-full bg-white p-10 flex flex-col text-left border-b-8 border-y-stone-900">
                  <div className="self-center">
                      <Image src={Logo} height='100' width='100' className='rounded-full'></Image>
                      </div>
                      <div className="text-center flex flex-col">
                          <h2 className="text-4xl font-bold mt-5 pt-5 border-t-4 border-text-purple">{alunos.nome}</h2>
                          <p className="text-2xl">{alunos.idade}</p>
                      </div>
                      <p className="text-2xl pl-36">Curso</p>
                          <ul className="pl-40">
                              <li>{alunos.cursos}</li>
                          </ul>
                      <div className="self-center flex">
                      <Link href={`/alunos/$`}><a href="" className="pr-4 hover:text-text-purple"><BsFillPencilFill/></a></Link>                
                      <BsTrashFill className="hover:text-text-purple"/>
                  </div>    
              </div>
            ))}
        </div>
    )
}

export default CardAluno