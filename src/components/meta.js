import React from 'react'
import PropTypes from 'prop-types'
import convertDate from '../shared/convert_date.js'

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
      <figcaption>
        <time>{this.state.date}</time>
        <p>{this.state.location}</p>
      </figcaption>
    )
  }
}

Meta.propTypes = {
  date: PropTypes.string,
  location: PropTypes.string
}

export default Meta
