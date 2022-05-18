import { useRouter } from 'next/router'

export default function Comentario() {

    const router = useRouter()

    const comentarioid = router.query.comentarioid

    return(
        <p>Comentário: {comentarioid}</p>
    )
}