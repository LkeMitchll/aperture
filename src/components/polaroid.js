import React from 'react'
import PropTypes from 'prop-types'
import styles from './polaroid.css'

class Polaroid extends React.Component {
  constructor(props) {
   super(props) 

    this.state = {
      height: 500,
      oddEven: 'even'
    }
  }

  componentWillMount() {
    var height = Math.floor(Math.random() * (90 - 50)) + 50
    var heightRounded = Math.round(height / 10) * 10
    var oddEven = ''

    if (this.props.index % 2 == 0) {
      oddEven = 'odd'
    } else {
      oddEven = 'even'
    }

    this.setState({
      height: heightRounded + '%',
      oddEven: oddEven
    })
  }

  render() {
    return (
      <svg
        data-id={this.props.index}
        width="100%"
        height={this.state.height}
        className={styles[this.state.oddEven] + ' ' + styles.rectangle}>
        <g stroke="black">
          <rect
            width="100%"
            height="100%"
            fill="transparent"
            strokeWidth="3">
          </rect>
        </g>
      </svg>
    )
  }
}

Polaroid.propTypes = {
  index: PropTypes.number
}

export default Polaroid
