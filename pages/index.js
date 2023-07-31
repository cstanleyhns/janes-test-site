import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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
          Test press releases
        </h1>

        <div className={styles.grid}>
       
          
        <a href="https://janes-test-site.vercel.app/news1" className="links" rel="noreferrer">
          <div className={styles.card}>
            <h2>Press release one</h2>
            <p className={styles.cardDate}>28 July 2023</p>
            <p className={styles.cardCopy}>This is test body content for press release one.</p>
          </div>
        </a>

        <a href="https://janes-test-site.vercel.app/news2" className="links" rel="noreferrer">
          <div className={styles.card}>
            <h2>Press release two</h2>
            <p className={styles.cardDate}>28 July 2023</p>
            <p className={styles.cardCopy}>This is test body content for press release two.</p>
          </div>
        </a>
 
    
        </div>
      </main>

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  )
}
