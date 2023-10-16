import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
       <p className={styles.cardDate}>16 October 2023</p>
       <p className={styles.cardCopy}>Update 13 - This is test content for press release one. Updated 16 October 2023. Martins Test Update.</p>
      </main>

    </div>
  )
}
