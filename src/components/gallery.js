import React from 'react'
import jsonp from 'jsonp'
import Image from './image.js'
import Meta from './meta.js'
import Polaroid from './polaroid.js'
import styles from './gallery.css'

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      images: []
    }
  }

  loading() {
    return this.state.loading ? styles.loading : styles.loaded
  }

  componentWillMount() {
    var _this = this
    jsonp(`https://api.instagram.com/v1/users/11193757/media/recent?access_token=${process.env.INSTAGRAM_API_KEY}`, null, function (err, res) {
      if (err) {
        window.alert(err.message)
      } else {
        const images = res.data.map(obj => obj)
        _this.setState({ loading: false, images: images })
      }
    })
  }

  render() {
    return (
      <section className={[styles.wrapper + ' ' + this.loading()]}>
        {this.state.images.map((image, index) =>
          <figure className={styles.item} key={image.id}>
            <Image image={image.images} />
            <Meta index={index} date={image.created_time} location={image.location} />
            <Polaroid index={index}/>
          </figure>
        )}
      </section>
    )
  }
}

export default Gallery
