import styles from './Body.module.css'

const cx = (...classNames) => classNames.join(' ');

export default function Body() {
    return (
      <>
      <p>A Dad, Developer &amp; ambitious entrepreneur. Always Dream. Learning Web 3.0 + NFT</p>
      <div className={cx(styles.btn, styles.btnstyle)}><a target="_blank" href="https://www.linkedin.com/in/diony/"><p>LinkedIn</p></a></div>
      <div className={cx(styles.btn, styles.btnstyle)}><a target="_blank" href="https://dionyc.github.io/"><p>Portfolio</p></a></div>
      <div className={cx(styles.btn, styles.btnstyle)}><a target="_blank" href="https://github.com/dionyc"><p>Github</p></a></div>
      <div className={cx(styles.btn, styles.btnstyle)}><a target="_blank" href="https://trailblazer.me/id/diony"><p>Salesforce Trailhead Ranger</p></a></div>
      </>
    )
  }