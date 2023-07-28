import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function News1() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Press release one title</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>Press release 1</h1>
       <p>28 July 2023</p>
       <p>This is test content for press release one.</p>
      </main>

    </div>
  )
}
