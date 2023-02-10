import React from 'react'
import './print.css'

const Print = ({ showPrint, children }) => {
    return (
        showPrint ? (
            <div className="printBackground" >
                <div className="printContainer">
                    { children }
                </div>
            </div>
        ):""
    )
}

export default Print
