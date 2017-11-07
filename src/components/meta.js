import React from 'react'

class Meta extends React.Component {
  render() {
    return (
      <figcaption>
        <p>{this.props.date}</p>
      </figcaption>
    )
  }
}

export default Meta
