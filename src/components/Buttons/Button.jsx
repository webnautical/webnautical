import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Button({children}) {
  return (
    <div className='primery-btn'>
      <span className="primery-btn-text">{children}<FontAwesomeIcon  icon={faArrowRight}/></span>
    </div>
  )
}

export default Button