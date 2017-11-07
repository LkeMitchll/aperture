import React from 'react'
import jsonp from 'jsonp'
import Image from './image.js'
import Meta from './meta.js'

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: []
    }
  }

  componentWillMount() {
    var _this = this
    jsonp(`https://api.instagram.com/v1/users/11193757/media/recent?access_token=${process.env.INSTAGRAM_API_KEY}`, null, function (err, res) {
      if (err) {
        window.alert(err.message)
      } else {
        const images = res.data.map(obj => obj)
        _this.setState({ images: images })
      }
    })
  }

  render() {
    return (
      <section>
        {this.state.images.map((image) =>
          <figure key={image.id}>
            <Image key={image.id} image={image.images} />
            <Meta key={image.id} date={image.created_time} location={image.location} />
          </figure>
        )}
      </section>
    )
  }
}

export default Gallery
