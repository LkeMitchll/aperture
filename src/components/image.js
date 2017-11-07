import React from 'react'
import PropTypes from 'prop-types'
import styles from './image.css'

class Image extends React.Component {
  render() {
    return (
      <picture className={styles.content}>
        <source media="(max-width: 50em)" srcSet={this.props.image.low_resolution.url}/>
        <source media="(min-width: 50em)" srcSet={this.props.image.standard_resolution.url} />
        <img className={styles.content} src={this.props.image.standard_resolution.url} />
      </picture>
    )
  }
}

Image.propTypes = {
  image: PropTypes.object
}

export default Image
