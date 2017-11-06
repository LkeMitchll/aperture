import React from 'react'
import jsonp from 'jsonp'
import Image from './image.js'
import Meta from './meta.js'

class App extends React.Component {
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
        console.log(_this.state.images)
      }
    })
  }

  render() {
    return (
      <ul>
        {this.state.images.map((image) =>
          <li>
            <Image key={image.id} url={image.images.thumbnail.url} />
            <Meta key={image.id} date={image.created_time} />
          </li>
        )}
      </ul>
    )
  }
}

export default App
