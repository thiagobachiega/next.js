import Link from 'next/link'
import Head from 'next/head'

export default function Index() {
    return( 
    <>
    <Head>
        <title>Produtos</title>
    </Head>
    <div>
        <h1>Página de Produtos</h1>
        <Link href='/'><a>Voltar</a></Link>
    </div>
    </>
    )
}