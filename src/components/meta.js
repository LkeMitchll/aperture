import React from 'react'
import PropTypes from 'prop-types'
import convertDate from '../shared/convert_date.js'
import styles from './meta.css'

class Meta extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      location: '[Location Unknown]'
    }
  }

  componentWillMount() {
    this.setState({ date: convertDate(this.props.date) })

    var oddEven = ''
    if (this.props.index % 2 == 0) {
      oddEven = 'odd'
    } else {
      oddEven = 'even'
    }

    if (this.props.location) {
      this.setState({ 
        location: this.props.location.name,
        oddEven: oddEven
      })
    }
  }

  render() {
    return (
      <figcaption className={styles[this.state.oddEven] + ' ' + styles.wrapper}>
        <p className={styles.location}>{this.state.location}</p>
        <p className={styles.date}><time className={styles.date}>{this.state.date}</time></p>
      </figcaption>
    )
  }
}

Meta.propTypes = {
  index: PropTypes.number,
  date: PropTypes.string,
  location: PropTypes.string
}

export default Meta
