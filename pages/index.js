import Head from 'next/head'
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
          Test press releases
        </h1>

        <div className={styles.grid}>
             
          <div className={styles.card}>
            <h2>Here’s a look</h2>
            <a href="https://janes-test-site.vercel.app/news1" className={styles.link} rel="noreferrer">Click here</a>
            <p className= {styles.cardDate}>10 August 2023</p>
            <p className={styles.cardCopy}>This is update 13 test body content for press release one.</p>
          </div>
   
          <div className={styles.card}>
            <h2>Press release two - update 12</h2>
            <a href="https://janes-test-site.vercel.app/news2" className={styles.link} rel="noreferrer">Click here</a>
            <p className={styles.cardDate}>10 August 2023</p>
            <p className={styles.cardCopy}>This is update 13 test body content for press release two.</p>
          </div>

        </div>
      </main>

    </div>
  )
}
