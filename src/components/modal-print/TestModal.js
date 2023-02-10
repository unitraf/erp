import React, { useState } from 'react'
import Modal from './ModalPrint'


const TestModal = () => {

  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }
  const hideModal  = () => {
    setOpen(false)
  }
  return (
    <>
      <div>
        <button onClick={showModal}>Show</button>
      </div>
      <Modal showModal={open} >
        <div className='modalHeader'>
       <h2>modalHeader</h2> 
        </div>
        <div className='modalBody'>
        modalBody
          </div>
          <div className='modalFooter'>
          <button className='modalBtn'onClick={hideModal} >Fermer</button>
          </div>
       
      </Modal>

    </>
  )
}

export default TestModal