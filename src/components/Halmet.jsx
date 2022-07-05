import React from 'react'
import PropTypes from 'prop-types'

const Halmet = props => {

  document.title = 'Yolo - ' + props.title

  React.useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <div>
      {props.children}
    </div>
  )
}

Halmet.propTypes = {
  title: PropTypes.string.isRequired
}

export default Halmet