import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name='keywords' content='Roupas, Calçados, Boné'></meta>
      <meta name='description' content='Encontre a melhor roupa para você'></meta>
    </Head>
    <div className={styles.container}>
      <ul>
        <li><Link href='/products'><a>Produtos</a></Link></li>
        <li><Link href='/about'><a>Sobre</a></Link></li>
        <li><Link href='/todos'><a>To Do</a></Link></li>
      </ul>
      <h1>Hello World</h1>
    </div>
    </>
  )
}
