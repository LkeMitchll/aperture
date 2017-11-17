import React from 'react'
import styles from './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p className={styles.text}>An interroban.gg project</p>
        <p className={styles.text}>
          Set in <a className={styles.link} href="https://klim.co.nz/retail-fonts/tiempos-text/">Tiempos Text</a> &amp; <a className={styles.link} href="https://quoteunquoteapps.com/courierprime/">Courier Prime</a>.
          <br/>
          Data from <a href="https://www.instagram.com/developer/">Instagram</a><br/>
          Source code hosted at <a className={styles.link} href="https://github.com/LkeMitchll/aperture">GitHub</a>.
        </p>
      </footer>
    )
  }
}

export default Footer
