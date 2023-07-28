import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test title</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is a test page
        </h1>

        <div className={styles.grid}>
          <a href="news1" className={styles.card}>
            <h2>Press release one</h2>
            <p>28 July 2023</p>
            <p>This is test body content for press release one.</p>
          </a>

          <a href="news2" className={styles.card}>
            <h2>Press release two</h2>
            <p>28 July 2023</p>
            <p>This is test body content for press release two.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}