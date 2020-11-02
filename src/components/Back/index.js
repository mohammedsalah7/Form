import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
function Back() {
    return (
        <div className="back">
            <Link to="/LogIn" className="link-back">
                <FontAwesomeIcon className="icon" icon={faChevronLeft} />
                <p className="word-back">Back</p>
            </Link>
        </div>
    )
}
export default Back
