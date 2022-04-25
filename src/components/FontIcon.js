import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FontIcon({ type, name, color = '#000000', size = 16, action, style }) {
  return (
    <FontAwesomeIcon 
        icon={[type, name]} 
        color={color}
        fontSize={size}
        onClick={ () => action && action()}
        style={ style && style }
    />
  )
}

FontIcon.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    action: PropTypes.func,
}

