import React from 'react'
import PropTypes from 'prop-types'
import convertDate from '../shared/convert_date.js'
import styles from './meta.css'

class Meta extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      location: ''
    }
  }

  componentWillMount() {
    this.setState({ date: convertDate(this.props.date) })

    if (this.props.location) {
      this.setState({ location: this.props.location.name })
    }
  }

  render() {
    return (
      <figcaption className={styles.wrapper}>
        <p className={styles.location}>{this.state.location}</p>
        <time className={styles.date}>{this.state.date}</time>
      </figcaption>
    )
  }
}

Meta.propTypes = {
  date: PropTypes.string,
  location: PropTypes.string
}

export default Meta
