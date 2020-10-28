import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import './style.css'
function Back() {
    return (
        <div className="back">
            <FontAwesomeIcon className="icon" icon={faChevronLeft} />
            <p className="word-back">Back</p>
        </div>
    )
}
export default Back
