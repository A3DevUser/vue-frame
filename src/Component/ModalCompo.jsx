import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const ModalCompo = ({title,bodyDetails,show,showFunc}) => {
  return (
    <div>
      <Modal show={show} fullscreen={true} scrollable={true} onHide={showFunc} >
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>{bodyDetails}</Modal.Body>
        <Modal.Footer>
        <button className="btn btn-primary" onClick={showFunc}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalCompo
