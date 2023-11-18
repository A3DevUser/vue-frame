import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import '../Component/CSS/ModalComp.css'

export const ModalCompo = ({title,bodyDetails,show,showFunc}) => {
  return (
    <div>
      <Modal show={show} fullscreen={true} scrollable={true} onHide={showFunc}>
        <Modal.Header>{title}
        <div className='modalHead'>
        <button className="btn btn-primary btn-sm mx-2" onClick={showFunc}>Save</button>
        <button className="btn btn-primary btn-sm" onClick={showFunc}>Close</button>
        </div>
        </Modal.Header>
        <Modal.Body>{bodyDetails}</Modal.Body>
        <Modal.Footer style={{height:'50px'}}>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export const SimpleModalCompo = ({title,bodyDetails,show,showFunc}) => {
  return (
    <div>
      <Modal show={show} centered scrollable={true} onHide={showFunc}>
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>{bodyDetails}</Modal.Body>
        <Modal.Footer>
        <button className="btn btn-primary" onClick={showFunc}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}



