import React from 'react'
import styles from './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p className={styles.text}>An interroban.gg project</p>
        <p className={styles.text}>
          Set in Tiempos Text & Courier Prime<br/>
          Data from instagram<br/>
          Source code hosted at GitHub
        </p>
      </footer>
    )
  }
}

export default Footer
