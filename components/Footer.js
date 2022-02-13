import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/heart.svg" alt="Diony C. with Love" className={styles.logo} /> for you
      </footer>
    </>
  )
}
