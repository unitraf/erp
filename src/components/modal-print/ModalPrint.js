import React from 'react'
// import './modalPrint.css'

const ModalPrint = ({ showModal, children }) => {
    return (
        showModal && (
            <div className="modalBackground" >
                <div className="modalContainer">
                    { children }
                </div>
            </div>
        )
    )
}

export default ModalPrint
