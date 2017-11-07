import React from 'react'
import PropTypes from 'prop-types'

class Image extends React.Component {
  render() {
    return (
      <picture>
        <source media="(max-width: 50em)" srcSet={this.props.image.low_resolution.url}/>
        <source media="(min-width: 50em)" srcSet={this.props.image.standard_resolution.url} />
        <img src={this.props.image.standard_resolution.url} />
      </picture>
    )
  }
}

Image.propTypes = {
  image: PropTypes.object
}

export default Image
