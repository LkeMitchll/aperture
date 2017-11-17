import React from 'react'
import styles from './header.css'

class Header extends React.Component {
  render() {
    return (
      <header className={styles.wrapper}>
        <h1 className={styles.title}>Aperture</h1>
      </header>
    )
  }
}

export default Header
