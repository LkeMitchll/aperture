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
    var height = Math.floor(Math.random() * (600 - 200)) + 200
    var oddEven = ''

    if (this.props.index % 2 == 0) {
      oddEven = 'odd'
    } else {
      oddEven = 'even'
    }

    this.setState({
      height: height,
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
            height={this.state.height}
            fill="transparent"
            strokeWidth="2">
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
