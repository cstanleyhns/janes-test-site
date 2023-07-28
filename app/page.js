import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <body className={styles.main}>
      <h1 className={styles.title}>This is a test body!</h1>
    </body>
  )
}
