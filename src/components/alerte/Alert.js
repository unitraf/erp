import React from 'react'
import './alerte.css'

const Alert = ({ showAlert, children }) => {
    return (
        showAlert ? (
            <div className="alertBackground" >
                <div className="alertContainer">
                    { children }
                </div>
            </div>
        ):""
    )
}

export default Alert
