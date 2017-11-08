import React from 'react'
import Header from './header.js'
import Gallery from './gallery.js'
import Footer from './footer.js'
import styles from './app.css'

class App extends React.Component {
  render() {
    return (
      <section className={styles.wrapper}>
        <Header />
        <Gallery />
        <Footer />
      </section>
    )
  }
}

export default App
