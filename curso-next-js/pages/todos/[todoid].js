import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Todo () {

    const router = useRouter()

    const todoId = router.query.todoid

    return(
        <>
        <Link href='/'><a>Voltar</a></Link>
        <h1>Exibindo o todo: {todoId}</h1>
        <p>Comentário 1: bla bla bla...<Link href={`/todos/${todoId}/comentarios/1`}><a>detalhes</a></Link></p>   
        </>
    )
}