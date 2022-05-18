import React from "react"
import { getCursos } from "../services/get-cursos"
import Aluno from "../types/aluno"
import Curso from "../types/curso"

type FormCadastroProps = {
    handleSubmit: (aluno: Aluno) => void
}

const FormCadastro: React.FC<FormCadastroProps> = ({handleSubmit}) => {

    const [cursos, setCursos ] = React.useState<Curso[]>([])
    const [aluno, setAluno ] = React.useState<Aluno>({} as Aluno)

    //PEGANDO OS DADOS DOS CURSOS NO BANCO DE DADOS
    const getSetCursos = async () => {
      const cursosData = await getCursos()
      setCursos(cursosData)
    }
    
    React.useEffect(() => {
      getSetCursos()
    }, [])
    //ENVIANDO OS DADOS DO FORMULARIO PARA O POST NA PAGINA DE CADASTRO
    const submit = (e: any) => {
        e.preventDefault()
        handleSubmit(aluno)
        console.log(aluno)
    }

    const handleOnChange: (event: any) => void = (event) => {
        setAluno({
          ...aluno,
          [event.target.name]: event.target.value
        } as Aluno)
    }



    return (
        <div className="bg-white p-10 flex flex-col">
            <h1 className="text-4xl font-bold mb-5 pb-5 border-b-4 border-text-purple">Novo Cadastro</h1>
            <form onSubmit={submit} className="flex flex-col text-left">
                <label className="text-2xl font-semibold">Nome:</label>
                <input onChange={handleOnChange} type='text' name='nome' id='nome' className="border-2 rounded-md border-text-purple w-1/2"></input>
                <label className="text-2xl font-semibold">Idade:</label>
                <input onChange={handleOnChange} type='number' name='idade' id='idade' className="border-2 rounded-md border-text-purple w-1/6"></input>
                <label className="text-2xl font-semibold">Curso:</label>
                <select onChange={handleOnChange} name='cursos' id='cursos' className="border-2 rounded-md border-text-purple ">
                {cursos.map((curso) => (
                        <option value={curso.nome} key={curso.id}>{curso.nome}</option>
                    ))}
                </select>
                <button type='submit' className="border-2 rounded-md border-text-purple w-1/2 mt-5 self-center">Confirmar</button>
            </form>
        </div>
    )
}

export default FormCadastro